---
layout: post
title: Ruby on Windows
category: ruby
---

<img src="/assets/233285291_787856227f.jpg" alt="Ruby on XP" />
<div class="img_author">... photo by <a href="http://www.flickr.com/photos/alexmuse/">alexmuse &copy;</a></div>

Took a little bit more work, but not much.  Here's a guide to help you get Ruby on Rails running on your Windows XP machine (shouldn't be to different to Vista).

First download a copy on <a href="http://instantrails.rubyforge.org/wiki/wiki.pl">IntantRails</a>, unzip it and move the 'InstantRails' dir and all it's contents to your C:\ root dir.  InstantRails will give you the ability to run Ruby + MySQL + Apache all in one hit (no fiddling with separate installs).

Next, navigate into 'C:\instantrails' directory, and double-click 'instantrails.exe'.  The application will realise it's running in a different directory so will just take a bit to set itself up then it'll be running fine.... However you may get an 'apache error - port 80 used by inetinfo'.

To solve this error, while still in InstantRails, click the 'I' button and goto 'Configure/Apache'.  This will open Apache's web server config file in notepad. Scroll down till you see 'Listen 80' and change it to 'Listen 3000', do the same for 'Port 80' further down the file changing that to 'Port 3000'.

Save the file and close it, now click 'I' again and navigate to 'Configure\Windows Hosts File', this will open Windows host's routing file (nothing serious), just add...

127.0.0.1   www.mycookbook.com

At the end of the file, save it and close the file.

Now to test out your Ruby on Rails setup!

Click the 'I' button, then 'Rails Applications\Manage Rails Applications", check 'cookbook' and click 'start with mongrel'.  A console window will open showing Ruby starting up for that RoR app, when it says 'Mongrel available at....' your rockin!

Now open your favourite web browser and navigate to...

http://127.0.0.1:3001/

You should now see the CookBook example Ruby app running, mess around with it and have fun!.

To build your own, click 'I', 'Rails Applications\Manage Rails Applications' then click 'Create New Rails App'.

A console window will open, type RAILS [MY APPS NAME] and hit return, your new app will be setup in it's dir (replace [MY APPS NAME] with the name of your desired app, e.g. test).

More tutorials at...

<a href="http://www.onlamp.com/pub/a/onlamp/2006/12/14/revisiting-ruby-on-rails-revisited.html?page=1">O'Reilly Guide</a>

<a href="http://instantrails.rubyforge.org/wiki/wiki.pl?Getting_Started">InstantRails Install Guide</a>

 
