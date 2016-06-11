---
layout: post
title: Accessing the Slingbox Remotely
category: thoughts
keywords: "slingbox, remote access, howto, router settings"
---

![setup](http://farm3.static.flickr.com/2323/2275353209_f58de3fdc5.jpg)

One of the beauty's about the Slingbox is it's ability to stream video around your WIFI network, and more potentially accessing it remotely via some router changes.

#### Router Settings

So, first off log into your router with your internet browser...

    http://192.168.1.1

Enter your admin username + password and get into the system.

Now first off you need to put the Slingbox into the DMZ (demilitarized zone), basically in front of the firewall so that you can connect to it remotely in cyberspace.

So with a belkin router, click [firewall], then [dmz]

Now add a static ip entry for your slingbox, like...

    public ip : 82.23.44.92
    static ip : 192.168.1.237

So in the first line of the DMZ screen it will show your router's currently assigned IP address, on the right it will list static ip's assigned to devices within your network that you want out in the open.

Because the Slingbox uses the default IP of 192.168.1.237, we set the first line to : 192.168.1.237 or 237

Hit save, now you need to setup a port for the slingbox.

So click [firewall], then [virtual servers]

Now add an entry for your slingbox's internal port.

    lan ip address: 192.168.1.237
    protocol type: TCP
    lan port: 5001
    public port: 5001
    enable: tick this

make sure the entries are correct and you've ticked [enable], click [set] and you're done!

Your Slingbox is now available online.

So open your slingbox software, click [get info] and tick [access remotely], enter your router's ip address (from the DMZ screen, public ip or in this case 82.23.44.92) and the port 5001, click [save] and sit back and watch TV from your slingbox anywhere in the world.

#### Further Note

You can also apply this to other devices such as if you are like me and buy an ICYBOX NAS enclosure with a BitTorrent tool in it, by putting it in the DMZ it then has free access to the internet and you can load up torrent files into it and leave it to download them for you.

Nothing illegal mind, for me it's Fedora 9.

;-)

Take care,
