import logging
from threading import Thread
import threading
from adxl345 import ADXL345
from twisted.internet import reactor
from pyupnp.event import EventProperty
from pyupnp.device import Device, DeviceIcon
from pyupnp.logr import Logr
from pyupnp.services import register_action, Service, ServiceActionArgument, ServiceStateVariable
from pyupnp.ssdp import SSDP
from pyupnp.upnp import UPnP
import grovepi
from grovepi import *

pin = 7
numleds = 4
grovepi.pinMode(pin,"OUTPUT")

class CapteurService(Service):
	version = (1, 0)
	serviceType = "urn:schemas-upnp-org:service:Capteur:1"
	serviceId = "urn:upnp-org:serviceId:Capteur"

	actions = {
		'GetDoorState': [
			ServiceActionArgument('Door','out','DoorState'),
		],
                'GetButtonState': [
			ServiceActionArgument('Button','out','ButtonState'),
		],
                'GetAccelerometerState': [
			ServiceActionArgument('Accelerometer','out','AccelerometerState'),
		],
                'SetColorLed': [
			ServiceActionArgument('Input', 'in', 'ColorLed')
		],
		'GetMailingState': [
			ServiceActionArgument('Mailing','out','Mailingtate'),
		]
	}
	
	stateVariables = [        
		# Variables
                ServiceStateVariable('ColorLed', 'int'),
		ServiceStateVariable('DoorState','boolean',sendEvents=True),
                ServiceStateVariable('ButtonState','boolean',sendEvents=True),
                ServiceStateVariable('AccelerometerState','string',sendEvents=True),
		ServiceStateVariable('Mailingtate','boolean',sendEvents=True)
	]
	
	stateDoor=EventProperty('DoorState')
	stateButton=EventProperty('ButtonState')
	stateAccelerometer=EventProperty('AccelerometerState')
	stateMailing = EventProperty('Mailingtate')
	
	@register_action('GetDoorState')
	def getDoorState(self):
		return {
			'Door' : self.stateDoor
		}

	@register_action('GetButtonState')
	def getButtonState(self):
		return {
			'Button' : self.stateButton
		}

	@register_action('GetAccelerometerState')
	def getAccelerometerState(self):
		return {
			'Accelerometer' : self.stateAccelerometer
		}

        @register_action('SetColorLed')
	def setColorLed(self, color):
                print(color)
                grovepi.chainableRgbLed_test(pin, numleds, int(color))
				
	@register_action('GetMailingState')
	def getMailingState(self):
		return {
			'Mailing' : self.stateMailing
		}

	def listen_capteur(self, s):
                sensor = 4 
                button = 3
		i = 0
		m = False
		while True:
			adxl345 = ADXL345()
			#print(CapteurService.getDoorState(self))
			#print(CapteurService.getAccelerometerState(self))
			#print(CapteurService.getButtonState(self))
			self.stateDoor=grovepi.digitalRead(sensor)
			axes = adxl345.getAxes(True)
			self.stateAccelerometer = axes['z']
			first = axes['z']
			self.stateButton = grovepi.digitalRead(button)
			
			time.sleep(.1)
			axes = adxl345.getAxes(True)
			second = axes['z']
			res = int(abs(first-second)*100)
			if(res > 10):
				self.stateMailing = True
				m = True
			if(m == True):
				i = i+1
			if(i >= 5):
				self.stateMailing = False
				m = False
				i = 0
			
	def startListening(self):
		self.stateDoor=True
		self.stateButton=True
		self.stateAccelerometer="test"
		self.stateMailing=False
		
		self.thread = threading.Thread(target=CapteurService.listen_capteur, args = (self,0))
		self.thread.daemon = True
		self.thread.start();
