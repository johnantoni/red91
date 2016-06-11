---
layout: post
title: Fedora 9 wifi and flash on 64bit
category: linux
keywords: "fedora linux, wireless, adobe flash, 64bit, install, howto"
---

After getting back from vacation in Vegas I decided I needed to sort my laptop out once and for all.  So partitioned the drive in two, one with Vista Ultimate and one with Fedora 9.

On top of this I really wanted the Fedora partition to be encrypted and using LVM so I can resize later, glad I did that.

However in all I had two problems along the way,

##### Fedora 9 Wifi doesn't support TKIP

The first thing which I couldn't fix was the Wifi.  I was using WPA+TKIP which is available in the network configuration panel, all good but everytime I tried to connect it'd popup the password entry screen again; really annoying.

Thankfully I found the reason to this, **Fedora 9 does not support TKIP even though it's available in the control panel**; switching to **WPA+AES** clears that problem.

Just wish they documented that better ;-)

##### 32-bit Flash on a 64-bit build

Adobe released the Flash 9 libraries to the linux community but only as 32-bit binaries, I installed Fedora using the 64-bit build so with some tweaking managed to fix that too.

* [Adding Flash to Fedora](http://fedorasolved.org/browser-solutions/flash)

In Terminal do:

    su -c 'rpm -Uvh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm'
    su -c 'yum install flash-plugin'

Now specifically for 64-bit Fedora builds do:

    su -c "yum -y install nspluginwrapper.{i386,x86_64} pulseaudio-libs.i386 libflashsupport.i386"
    su -c 'mozilla-plugin-config -i -g -v'

Afterwards close & reopen Firefox and you should now have Flash 9 running on your Fedora 9 64-bit desktop.
