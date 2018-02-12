import requests

url='http://192.168.0.18:8080/courrier'
r = requests.get(url)

print(r.status_code)
print(r.text)