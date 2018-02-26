import logging
from threading import Thread
import threading
import time
from twisted.internet import reactor
from pyupnp.event import EventProperty
from pyupnp.device import Device, DeviceIcon
from pyupnp.logr import Logr
from pyupnp.services import register_action, Service, ServiceActionArgument, ServiceStateVariable
from pyupnp.ssdp import SSDP
from pyupnp.upnp import UPnP
import grovepi
from grovepi import *
import datetime
import capteur
from capteur import CapteurService


class EnvoiService(Service):
	version = (1, 0)
	serviceType = "urn:schemas-upnp-org:service:Envoi:1"
	serviceId = "urn:upnp-org:serviceId:Envoi"

	actions = {
		'GetPackageDepositeInMailBoxStatus': [
			ServiceActionArgument('PackageDepositeInMailBox','out','PackageDepositeInMailBoxStatus'),
		],
		'GetPackageTookOfMailBoxStatus': [
			ServiceActionArgument('PackageTookOfMailBox','out','PackageTookOfMailBoxStatus'),
		]
	}
	
	stateVariables = [
		ServiceStateVariable('PackageDepositeInMailBoxStatus','string',sendEvents=True),
		ServiceStateVariable('PackageTookOfMailBoxStatus','string',sendEvents=True)
	]
	
	packDepositeInMBox=EventProperty('PackageDepositeInMailBoxStatus')
	packTookOfMBox=EventProperty('PackageTookOfMailBoxStatus')

	@register_action('GetPackageDepositeInMailBoxStatus')
	def getPackageDepositeInMailBoxStatus(self):
		return {
			'PackageDepositeInMailBox' : self.packDepositeInMBox
		}
		
	@register_action('GetPackageTookOfMailBoxStatus')
	def getPackageTookOfMailBoxStatus(self):
		return {
			'PackageTookOfMailBox' : self.packTookOfMBox
		}

	def listen_sending_status(self, s):
                DOOR = False #False = Close / True = Open
                BUTTONSTATE = False
                SENDING = True

                DOOR1 = False
                DOORRESET = False
                pin = 7
                numleds = 4
                grovepi.pinMode(pin,"OUTPUT")

                testColorBlack = 0   # 0b000 #000000
                testColorRed = 4     # 0b100 #FF0000

		while True:
			try:
                                if CapteurService.stateDoor == 0:
                                	DOOR = False
                                    #door close
                                else:
                                	DOOR = True
                                    #door open
                                BUTTONSTATE = CapteurService.stateButton
                                if(DOOR==True and BUTTONSTATE==True and SENDING==True):
                                	grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
                                	print("Colis posee dans la boite a : "+str(datetime.datetime.now()))
					self.packDepositeInMBox=str(datetime.datetime.now())
                                	SENDING = False
                                if(SENDING == False and DOOR == False):
                                	DOOR1 = True
                                if(DOOR1 == True and DOOR == True):
                                	SENDING = True
                                	grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
                                	print("Colis pris par le facteur a : "+str(datetime.datetime.now()))
					self.packTookOfMBox=str(datetime.datetime.now())
                                	DOOR1 = False
                                	DOORRESET = False
                                time.sleep(.1)
			except IOError as e:
				print "I/O error({0}): {1}".format(e.errno, e.strerror)
				time.sleep(0.5)
		return

	def startListening(self):
		self.packDepositeInMBox="Nothing"
		self.packTookOfMBox="Nothing"
		self.thread = threading.Thread(target=EnvoiService.listen_sending_status, args = (self,0))
		self.thread.daemon = True
		self.thread.start();
