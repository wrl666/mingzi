import urlib.request
#from bas
import re


url = 'http://www.gxust.edu.cn/'



html = urllib.request.urlopen(url)
html = html.read()
gbk_html = html.decode('utf-8')
#print(gbk_html)

