---
layout: post
title: 64-bit Flash Player for Linux
category: linux
---

A long time coming Adobe have finally released a 64-bit version of their Flash Player and it's for Linux.

It's in Alpha but reports suggest it's actually quite stable, so good news all around for us with 64-bit Ibex machines ;-)

* [Adobe Flash Player 10 - 64bit Linux](http://labs.adobe.com/downloads/flashplayer10.html)

You'll need to uninstall you're current Flash Player via either...

    sudo aptitude remove flashplugin-nonfree

Or going into your **~/.mozilla/plugins** directory and removing the old version.

To install simply download the tar file relevant to your distro, extract the plugin and drop it into your Firefox Plugins directory **~/.mozilla/plugins**

Restart Firefox and you should be good to go,
