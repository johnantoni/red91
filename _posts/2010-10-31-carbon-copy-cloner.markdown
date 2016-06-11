---
layout: post
title: Clone your drive reliably
category: apple
description: "Clone your drive reliably ~ a for and against Apple Time Machine"
keywords: "clone, hdd, backup, restore, carbon copy cloner, time machine, time capsule, apple, connection failed"
---

Not too long ago I needed to restore my macbook to a new drive, things weren't exactly happy and I really wanted to try out my trusty Apple Time Capsule.

As you'll no doubt be aware Apple produce a product called the Time Capsule which when used in conjunction with Apple Time Machine allows you to wirelessly backup 1 or many OSX machines, this is actually an awesomely good tool and I've been trying this setup recently however my results weren't too happy.

There I was, after backup number 44 with Time Machine reporting another successful backup, I thought 'hey why dont I try putting in a blank drive and using the migration assistant to restore my macbook from the time capsule?', sounds straight forward alas not so.

So after placing a blank drive in the macbook I then put in Snow Leopard, installed it and ran Migration Assistant, typed in my Time Capsule access passwords and kapow! was greeted with a rather scary "Connection Failed!" message.  Tried again no dice, reset passwords, no go, checked system logs, sorry you're screwed, damn it I thought.

Then I thought "why not simply take the drive out of the Time Capsule and place it in a HDD Enclosure then access it as an external drive, should work?".  Pulled back the rubber backing of the Capsule, unscrewed and re-mounted the drive into a 3.5 enclosure and fired it up.  Result = no dice, seems that the Airport feature creates three partitions on the drive, one for the system, another for a cache or scratch disk and another for your files; however this one isn't mountable so again no dice.

Now I've restored from a Time Machine backup on an external drive ok but it seems via Time Capsule it isn't so cut-n-dry, so I began hunting for alternatives, best one I found was a tool called [Carbon Copy Cloner](http://www.bombich.com/).

<a href="http://www.flickr.com/photos/indieflickr/5133960014/" title="ccc by John Antoni Griffiths, on Flickr"><img src="http://farm2.static.flickr.com/1328/5133960014_0849411348.jpg" width="500" height="427" alt="ccc" /></a>

What CCC does is allow you to take a complete backup of your drive and clone it to an external drive, you can do a full copy or an incremental over time similar to Time Machine.

So I tried it out and can report it does exactly what it says and brilliantly, if you want to do a full clone then use the options I selected above as an example, it's quick and can be used without paying for it so you don't have to hand over readies quickly; but if you're as impressed as me by the results you probably will.

I cloned my entire system drive to an external drive, then placed the external inside the macbook and booted from that and absolutely no problems.

The worst I had to do was run [Cocktail](http://www.maintain.se/cocktail/index.php) to check for any drive permission errors which is pretty standard if you're swapping drives, super simple and reliable.

Sorry Apple, I'll be using CCC in the future.

Thumbs up.