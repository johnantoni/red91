---
layout: post
title: Accessing a Network Share with Leopard
category: apple
---

#### Leopard HowTo

First in [Finder], press [command] + K to open the [Connect to Server] box.

Then type your network share's ip address, e.g.

    smb://192.168.1.99

Now click [Connect], and you're off.

#### Belkin Router Problems + Finding the Box

Now recently I got a new ICYBOX IB-N4220-B NAS Enclosure which I now have running as a RAID 1 Array for my own networked WIFI storage, was a bit of a pain with my Belkin router.

Reason being when hooked up there's no real way of testing to see which IP address it's set to on bootup, the supplied CD comes with a tool the find it but that only works on Windows, and didn't work on Vista.

So I hunted around, apparently when it starts up it chooses any IP address in the network starting at 192.168.1.1, and because my Belkin Router had a default setup set to 192.168.2.1 it couldn't find itself.

So setting the Router to 192.168.1.1 meant the NAS drive could then work more happily with the router, picking the next obvious IP down the line, being 192.168.1.2

Finding it's IP then was dead easy, accessed the Router by typing...

    http://192.168.1.1

Then logging in, navigating in the menubar, clicking 'DHCP Client List'.  From there it listed all the devices currently connected to the Router, one was my MacBook, the other the NAS drive.

So using that I accessed the NAS drive with...

    http://192.168.1.2

Logged in and then set it to use a particular IP all the time so I could always find it.

Then used the above commands in Finder to hookup the drive to my MacBook.

Job Done!
