# PyUPnP - Simple Python UPnP device library built in Twisted
# Copyright (C) 2013  Dean Gardiner <gardiner91@gmail.com>

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
# Doc & examples : https://github.com/fuzeman/PyUPnP

import logging
from twisted.internet import reactor
from pyupnp.event import EventProperty
from pyupnp.device import Device, DeviceIcon
from pyupnp.logr import Logr
from pyupnp.services import register_action, Service, ServiceActionArgument, ServiceStateVariable
from pyupnp.ssdp import SSDP
from pyupnp.upnp import UPnP
from smartil_services.reception import ReceptionService
from smartil_services.envoi import EnvoiService
from smartil_services.capteur import CapteurService
import grovepi
import time

pin = 7
numleds = 4
grovepi.pinMode(pin,"OUTPUT")
        
class SmartilDevice(Device):
    deviceType = 'urn:schemas-upnp-org:device:Smartil:1'
    friendlyName = "Smartil"
    
    def __init__(self):
	Device.__init__(self)
	self.uuid='2fac1234-31f8-11b4-a222-08002b34c003'
        self.receptionservice = ReceptionService()
        self.envoiservice = EnvoiService()
        self.capteurservice = CapteurService()

        self.services = [
            self.receptionservice,
            self.envoiservice,
            self.capteurservice
        ]
        self.receptionservice.startListening()
        self.envoiservice.startListening()
        self.capteurservice.startListening()

        self.icons = [DeviceIcon('image/png', 32, 32, 24,'http://172.25.3.103:52323/MediaRenderer_32x32.png')]

        
if __name__ == '__main__':
    #Logr.configure(logging.DEBUG)
    grovepi.chainableRgbLed_test(pin, numleds, 0)
    grovepi.chainableRgbLed_test(pin, numleds, 2)
    time.sleep(1)
    grovepi.chainableRgbLed_test(pin, numleds, 0)
    time.sleep(1)
    grovepi.chainableRgbLed_test(pin, numleds, 2)
    time.sleep(1)
    grovepi.chainableRgbLed_test(pin, numleds, 0)
    device = SmartilDevice()
    upnp = UPnP(device)
    ssdp = SSDP(device)

    upnp.listen()
    ssdp.listen()
    print("Smartil is ready !")
    reactor.run()
	
    
        
