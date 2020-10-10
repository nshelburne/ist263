import requests
import pandas as pd


try:
    from urllib.request import Request, urlopen  # Python 3
except ImportError:
    from urllib2 import Request, urlopen  # Python 2

countrycode= input("Please enter country code: \n") #get country code input

req = Request('https://spotifycharts.com/regional/'+countrycode+ '/daily/latest/download') #get data of corosponding country
req.add_header('User-Agent', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0')
content = urlopen(req)

df = pd.read_csv(content, usecols = [0,1,2]) #rank, name, artist

list_of_rows = [list(row) for row in df.values]
list_of_rows.insert(0, df.columns.to_list())    #create list from data

top10_list = []
for i in range(2,12):
    top10_list.insert(i,list_of_rows[i])        #Get top 10 info, into list
print(top10_list)
