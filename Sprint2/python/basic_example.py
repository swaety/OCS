# ADXL345 Python example 
#
# author:  Jonathan Williamson
# license: BSD, see LICENSE.txt included in this package
# 
# This is an example to show you how to the Grove +-16g Accelerometer
# http://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html

from adxl345 import ADXL345
import time

adxl345 = ADXL345()
    
print("ADXL345 on address 0x%x:" % (adxl345.address))
while True:
	axes = adxl345.getAxes(True)
	first = axes['z']
	time.sleep(.1)
	axes = adxl345.getAxes(True)
	second = axes['z']
	if(first-second>0.08):
		print "courrier"
	