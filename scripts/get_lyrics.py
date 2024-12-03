# import requests
from requests_html import HTMLSession
from bs4 import BeautifulSoup

session = HTMLSession()

song = "Don't stop believin'"
artist = "Journey"
searchterm = ascii(f"{song} {artist}")
searchterm_check = "Don%27t%20stop%20believin%27%20Journey"

# url = f"https://genius.com/search?q={searchterm}"
url = f"https://search.azlyrics.com/search.php?q={searchterm}"

response = session.get(url)
print(response.html.html)

# Chromium download workaround: set PYPPETEER_CHROMIUM_REVISION to e.g. 1263111
# https://stackoverflow.com/questions/78023508/python-request-html-is-not-downloading-chromium
# response.html.render()
links = response.html.find('a')

dom = BeautifulSoup(response.html.html, "html.parser")
# links = dom.select("a.mini_card")
# links = dom.find_all("a")
# links = dom.find_all('a', class_='mini_card')

# print(links)
for link in links:
    print(link)
