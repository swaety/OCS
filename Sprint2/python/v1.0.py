from adxl345 import ADXL345
import time
import grovepi
import datetime
import requests
import json

UniversalID = "0"

adxl345 = ADXL345()
SECONDPAUSE = 60

##################BOLEAN FOR SENSOR STATE##################################
MAIL = False
DOOR = False #False = Close / True = Open
BUTTONSTATE = False
SENDING = True
CanReceive = True
timerMail = 0
IDColis = 0

DOOR1 = False
DOORRESET = False
###########################################################################

##############################SENSOR PIN###################################
#Infrared
sensor = 4 
grovepi.pinMode(sensor,"INPUT")
button = 3
grovepi.pinMode(button,"INPUT")
pin = 7
numleds = 4
grovepi.pinMode(pin,"OUTPUT")

testColorBlack = 0   # 0b000 #000000
testColorBlue = 1    # 0b001 #0000FF
testColorGreen = 2   # 0b010 #00FF00
testColorCyan = 3    # 0b011 #00FFFF
testColorRed = 4     # 0b100 #FF0000
testColorMagenta = 5 # 0b101 #FF00FF
testColorYellow = 6  # 0b110 #FFFF00
testColorWhite = 7   # 0b111 #FFFFFF
###########################################################################

################################HTTP REQUESTS##############################
ReceivingMail='http://192.168.0.18:8080/boite/'+str(UniversalID)+'/courrier'
#PostingMail='http://192.168.0.18:8080/boite/'+str(UniversalID)+'/colisDepose/'+str(IDColis)
#PostingMailOK='http://192.168.0.18:8080/boite/'+str(UniversalID)+'/colisPrisFacteur/'+str(IDColis)

headers = {'content-type': 'application/json'}
###########################################################################

#Init LED -> Off
grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)

while True:
	if grovepi.digitalRead(sensor) == 0:
		DOOR = False
		#door close
	else:
		DOOR = True
		#door open
	axes = adxl345.getAxes(True)
	first = axes['z']
	time.sleep(.1)
	axes = adxl345.getAxes(True)
	second = axes['z']
	BUTTONSTATE = grovepi.digitalRead(button)
	if(first-second>0.08):
		MAIL = True
	if(CanReceive == False):
		timerMail = timerMail + 1
	if(timerMail == 10*SECONDPAUSE): #TIME OF LOOP -> 0.1 sec
		CanReceive = True
	if(MAIL==True and DOOR==False and CanReceive==True):
		#########################################################POST#################################################
		print("courrier recu a la date suivante : "+str(datetime.datetime.now()))
		ReceivingMailpayload = {'dateHeure': str(datetime.datetime.now())}
		r = requests.post(ReceivingMail, data=json.dumps(ReceivingMailpayload), headers=headers)
		##############################################################################################################
		CanReceive = False
		timerMail = 0
	MAIL = False
	if(DOOR==True and BUTTONSTATE==True and SENDING==True):
		grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
		IDColis = IDColis + 1
		#########################################################POST#################################################
		print("Colis a recuperer par le facteur, mis dans la boite a la date suivante : "+str(datetime.datetime.now()))
		PostingMailpayload = {'dateHeureDep': str(datetime.datetime.now())}
		r = requests.post('http://192.168.0.18:8080/boite/'+str(UniversalID)+'/colisDepose/'+str(IDColis), data=json.dumps(PostingMailpayload), headers=headers)
		##############################################################################################################
		SENDING = False
	if(SENDING == False and DOOR == False):
		DOOR1 = True
	if(DOOR1 == True and DOOR == True):
		SENDING = True
		grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
		#########################################################POST#################################################
		print("Colis recupere par le facteur a la date suivante : "+str(datetime.datetime.now()))
		PostingMailOKpayload = {'dateHeurePri': str(datetime.datetime.now())}
		r = requests.post('http://192.168.0.18:8080/boite/'+str(UniversalID)+'/colisPrisFacteur/'+str(IDColis), data=json.dumps(PostingMailOKpayload), headers=headers)
		##############################################################################################################
		DOOR1 = False
		DOORRESET = False
		