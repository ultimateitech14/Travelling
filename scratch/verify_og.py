import urllib.request
import re

url = 'http://localhost:3000/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        print('HTTP Status:', response.status)
        html = response.read().decode('utf-8')
        
        # Check title
        title_match = re.search(r'<title>(.*?)</title>', html)
        if title_match:
            print('Title:', title_match.group(1))
            
        # Check all meta tags
        meta_tags = re.findall(r'<meta\s+[^>]*>', html)
        print(f'Total meta tags found: {len(meta_tags)}')
        for tag in meta_tags:
            if any(k in tag for k in ['og:', 'twitter:', 'description', 'keywords']):
                print(' ', tag)
except Exception as e:
    print('Error:', e)
