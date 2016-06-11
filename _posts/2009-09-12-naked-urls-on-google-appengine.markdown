---
layout: post
title: naked urls on Google AppEngine
category: tutorial
---

With the last post you've hopefully managed to get your App on AppEngine, next up getting http://www.myapp.com and http://myapp.com going to your AppEngine App

So while still in you Google AppEngine Control panel, goto **Versions** and click **Add Domain**

Here enter the domain name you've registered with Google Apps (e.g. myapp.com, without the www)

This will take you to your Google Apps login panel, login as normal and accept the Terms of Service for your AppEngine App to be integrated into your Google Apps account.

Next the url,

While in Google Apps, click on your new AppEngine area, and on **Settings** click **Add New URL**, enter **www** and click **add**

What about http://myapp.com naked links?

Well Google AppEngine have revised their policy on this so you can no longer point myapp.com to your app, you have to do this by creating a **HTTP Redirection** record with your DNS Registrar.

So, via **DNSMadeEasy** (my personal choice), login and on your domain records:

* Add a CNAME for **www** pointing to **ghs.google.com.**
* Add a HTTP Redirection record (permanent redirect 301) pointing to **http://www.myapp.com** with the host part blank

Wait an hour for your DNS registrar to update thru the web and www.myapp.com and myapp.com should now be pointing to the same place

Enjoy!
