# //pip3 install beautifulSoup
import urlib.request
from bs4 import BeautifulSoup


url = 'http://www.gxust.edu.cn/'



html = urllib.request.urlopen(url)
html = html.read()

#print(html)
soup = BeautifulSoup(html,'html')
tit = soup.div
con = soup.select('.nav_list>li>a')
prit(tit)
#print(con[1].string)

