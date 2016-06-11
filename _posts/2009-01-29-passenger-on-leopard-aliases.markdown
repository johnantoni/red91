---
layout: post
title: Passenger On Leopard
category: ruby
---

##### More BASH Aliases

First off here are some helpful aliases I've got hooked up in my **.bash_profile** file

    alias ss='script/server'
    alias flush='dscacheutil -flushcache'
    alias hosts='sudo nano /etc/hosts'
    alias apache_restart='sudo apachectl restart'

##### Simple Passenger 403 Forbidden Fix

Following on from Ryan's [RailsCast](http://railscasts.com/episodes/122-passenger-in-development) on Passenger I've got the [PrefPane](http://www.fngtps.com/2008/06/putting-the-pane-back-into-deployment) and Passenger installed on Leopard using OSX's supplied copy of Apache2.

However, I kept getting **403 Forbidden** everytime I tried to access the local sites.

Fix was simple though, think it was caused by me porting the code off my Linux box (hence the permissions error as I don't have an **indiehead** user on my box).  

Open up a Finder window, navigate to the directories your Rails apps are located in, **Command+I** to popup the details of that directory.  Look down the list till you get to permissions.  Unlock the padlock for permissions, hit the **cog** and re-apply your machine's permissions to all the enclosed items.

I could've done this simpler I suppose with a chmod or chown command but then what's the point having a shiny graphical interface if you don't use it ;-)

Suppose I have to fix Michelle's Apache problem now, oh joy ;-)

##### List Users

This can be done on your Linux / OSX system via,

    cat /etc/passwd | cut -d":" -f1

Which will show a nice long list of all the users available on your box
