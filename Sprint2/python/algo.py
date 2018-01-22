from adxl345 import ADXL345
import time
import datetime
import grovepi
import requests
import json

import sys, termios, tty, os, time

def getch():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
 
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch
	
def getMail():
	while True:
		char = getch()
		if (char == "p"):
			print("Stop!")
			exit(0)
		if (char == "c"):
			print "Courrier detecte, heure : " + str(datetime.datetime.now())

def buttonPressed():
	doorOpen = 0
	while True:
		char = getch()
		if (char == "p"):
			print("Stop!")
			exit(0)
		if (char == "b"):
			if (doorOpen == 1):
				print("Porte fermee !")
				doorOpen = 0
			else :
				print("Porte ouverte !")
				doorOpen = 1
	
def myfunc():
	print("starting loop")
	doorOpen = 0
	run = True
	activityDoor = True
	while run:
		char = getch()
		if (char == "p"):
			print("Stop!")
			exit(0)
		if (char == "d"):
			if (doorOpen == 1):
				print("Porte fermee !")
				doorOpen = 0
			else :
				print("Porte ouverte !")
				run = False
				doorOpen = 1
		if (char == "c"):
			print "Courrier detecte, heure : " + str(datetime.datetime.now())
	while activityDoor:
		char = getch()
		if (char == "p"):
			print("Stop!")
			exit(0)
		if (char == "d"):
			if (doorOpen == 1):
				print("Porte fermee !")
				myfunc()
				doorOpen = 0
			else :
				print("Porte ouverte !")
				run = False
				doorOpen = 1
		
	
myfunc()
