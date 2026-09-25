import urllib.request
import re

html = urllib.request.urlopen('http://localhost:3000/').read().decode('utf-8')
matches = re.findall(r'<link[^>]*rel="[^"]*icon[^"]*"[^>]*>', html)
for m in matches:
    print(m)
