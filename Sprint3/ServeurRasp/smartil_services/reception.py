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
import datetime
import capteur
from capteur import CapteurService

class ReceptionService(Service):
        
	version = (1, 0)
	serviceType = "urn:schemas-upnp-org:service:Reception:1"
	serviceId = "urn:upnp-org:serviceId:Reception"

	actions = {
		'GetMailReceivingStatus': [
			ServiceActionArgument('MailReceiving','out','MailReceivingStatus'),
		]
	}
	
	stateVariables = [
		ServiceStateVariable('MailReceivingStatus','string',sendEvents=True)
	]
	 
	mailStatus=EventProperty('MailReceivingStatus')

	@register_action('GetMailReceivingStatus')
	def getMailReceivingStatus(self):
		return {
			'MailReceiving' : self.mailStatus
		}

	def listen_receiving_status(self, s):
                SECONDPAUSE = 3
                MAIL = False
                DOOR = False #False = Close / True = Open
                CanReceive = True
                timerMail = 0
		while True:
			try:
                                if CapteurService.stateDoor == 0:
                                        DOOR = False
                                    #door close
                                else:
                                        DOOR = True
                                    #door open
                                if(CapteurService.stateMailing == True):
                                    MAIL = True
                                if(CanReceive == False):
                                    timerMail = timerMail + 1
                                if(timerMail == 8*SECONDPAUSE):
                                    CanReceive = True
                                if(MAIL==True and DOOR==False and CanReceive==True):
                                	print("reception courrier : "+str(datetime.datetime.now()))
					self.mailStatus = str(datetime.datetime.now())
                                	CanReceive = False
                                 	timerMail = 0
                                
								
				time.sleep(.1)
				MAIL = False
			except IOError as e:
				print "I/O error({0}): {1}".format(e.errno, e.strerror)
				time.sleep(0.5)
		return

	def startListening(self):
		self.mailStatus="Nothing"
		
		self.thread = threading.Thread(target=ReceptionService.listen_receiving_status, args = (self,0))
		self.thread.daemon = True
		self.thread.start();
