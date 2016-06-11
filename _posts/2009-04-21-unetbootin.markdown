---
layout: post
title: unetbootin + corsair survivor
category: linux
---

<a href="http://www.flickr.com/photos/indieflickr/3463481869/" title="Corsair Survivor by John Griffiths, on Flickr"><img src="http://farm4.static.flickr.com/3602/3463481869_fab2b04f21.jpg" width="500" height="203" alt="Corsair Survivor" /></a>

##### Portable Linux Distro Notes

Googling and found a tool called **[unetbootin](http://unetbootin.sourceforge.net/)** that allows you to install your favourite distro into a spare partition without requiring the .iso file.

On 64-bit Ubuntu you need the 32-bit headers to get it to work, along with the 7zip libraries

    sudo apt-get install ia32-libs p7zip-full

Then you can get the linux copy working by making executable & running it,

    ...make executable
    chmod +x ./unetbootin-linux-319
    
    ...run
    ./unetbootin-linux-319

Gonna give it a go now i've got my Corsair Survivor memory stick, 32GB is a lot to fill up & having a portable version of Linux would be very useful when people need their pc's fixed or I haven't got my laptop & need to do something.

...tried unetbootin, not exactly what I wanted, going to try [PortableLinux](http://rudd-o.com/new-projects/portablelinux) the writeup sounds spot on for my requirements.

...nope, [slax](http://www.slax.org/) looks better, boy there are a lot of these!

##### Corsair Survivor

...so far the Corsair Survivor is awesome, I had a Flash Voyager for a while but got a little unhappy when the rubber jacket came away & exposed the internal circuitry everytime I pulled the stick out of my machine.  Don't think I'll have any problem with this one, sure is heavy though
