---
layout: post
title: New Intel Graphics driver for Ubuntu - 2.7.0
category: linux
---

Fixed a few of my prob's with the GMA965 chipset, works well on Ubuntu 9.04, dvd playback's no longer choppy (thank god!); the thing roars ahead now, cheer's Intel.

To install, open your **sources.list** file

    sudo nano /etc/apt/sources.list

Then copy & paste these in and save & close

    deb http://ppa.launchpad.net/ubuntu-x-swat/x-updates/ubuntu jaunty main
    deb-src http://ppa.launchpad.net/ubuntu-x-swat/x-updates/ubuntu jaunty main

Then run

    sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com AF1CDFA9
    sudo apt-get update && sudo apt-get install xserver-xorg-video-intel

Log-out and back in and the new drivers should be running.

Check your chipset with:

    lspci -nn|grep VGA

More [here](http://intellinuxgraphics.org/)
