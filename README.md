# Team2

# HTF2015 nodejs Deploy instructies

### Project structuur
myApp/  ->conf   
        ->htdocs  
        ->data (optional)

#### conf
In deze map dien je volgende twee bestanden te voorzien:  

##### httpd-prefix.conf  
  
> Include “/opt/bitnami/apps/[myapp]/conf/httpd-app.conf" 

##### httpd-app.conf  

> ProxyPass / http://127.0.0.1:4000/  
> ProxyPassReverse / http://127.0.0.1:4000/  

#### data
dit is een optionele folder waarin je data kunt uploaden

### Server

In de map /opt/bitnami maak je de map apps aan   
> sudo mkdir /opt/bitnami/apps

Hier kan je dan met behulp van git (steeds sudo gebruiken) je repository binnen halen

via het commando  

> sudo vim /opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf

kan je volgende lijn toevoegen:  

> Include “/opt/bitnami/apps/myapp/conf/httpd-prefix.conf”

dan dien je enkel nog je apache te herstarten:  

> sudo /opt/bitnami/ctlscript.sh restart apache

En je node server opstarten uiteraard. Wanneer je klaar bent kan je volgend commando runnen om de server permanent te laten draaien:  

> node /opt/bitnami/nodejs/bin/forever start myapp.js
