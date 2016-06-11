---
layout: post
title: Google Apps as your CDN
category: tutorial
---

Setting up [Goggle Apps as your own CDN](http://www.digitalistic.com/2008/06/09/10-easy-steps-to-use-google-app-engine-as-your-own-cdn/)

* Install [Python](http://www.python.org/download/)
* Download Google Apps [SDK](http://code.google.com/appengine/downloads.html)
* Signup for Google [App Engine](http://code.google.com/appengine/downloads.html) and create an application
* Download [CDN Example](http://digitalisticcdn.appspot.com/files/digitalisticcdn.zip), nicely put together by **Andreas Krohn** of **digitalistic.com**
* Extract archive and edit **app.yaml**, changing **application:digitalisticcdn** to **application:<your app engine identifier>**
* Put all the images you want to upload in the **images** directory, etc.
* Download Digitalistic's batchfile uploader [here](http://digitalisticcdn.appspot.com/files/deploy_digitalistic_cdn.bat).  Edit it so it points to your Python install directory, your Google App Engine SDK and your digitalisticcdn / customapp directory.
* Double-click on this newly edited batch file to run it, the first time it'll ask for your username & password afterwhich your files will then be uploaded (hopefully) to your newly created appengine cdn.

So after all that, you should be able to access your images via,

    [application identifier].appspot.com/images/[myimage.gif]

Thanks go to **Andreas Krohn** of **digitalistic.com** for putting together the zip archive example, batch file and original tutorial.
