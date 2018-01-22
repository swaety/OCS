import requests
import json

url='http://192.168.0.18:8080/courrier'
payload = {'nom': 'pelo','horaire': 'pelo','date': 'pelo','gps': 'pelo','vitesse': 'pelo'}
headers = {'content-type': 'application/json'}
r = requests.post(url, data=json.dumps(payload), headers=headers)

print(r.status_code)