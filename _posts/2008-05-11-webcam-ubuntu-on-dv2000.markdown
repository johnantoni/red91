---
layout: post
title: Webcam on Ubuntu on DV2000
category: linux
keywords: "webcam install, ubuntu linux, build driver, check hardware, howto, dv2000, hewlett packard"
---

Setting up the built-in webcam on the HP DV2000 laptop isn't that hard, here's a quick run thru...

#### Dependencies

First install all the dependencies your going to need to build the drivers from source,

    sudo aptitude install linux-headers-`uname -r`
    sudo aptitude install build-essential subversion

This will install the GCC compiler, linux headers, etc.

#### Build Driver

Now in Terminal,

    svn checkout svn://svn.berlios.de/linux-uvc/linux-uvc/trunk
    cd trunk
    sudo make
    sudo make install

First you pull the Linux-UVC source from Subversion, move to that directory, compile the source the install the binaries.

#### Check for Webcam

Now check to see if you have any USB video devices (your webcam usually)

    sudo lsusb -v

Scroll thru all the entries, one should be the webcam.

#### Use it

Next up we'll need some tools to use it, 

    sudo aptitude install ekiga cheese

Cheese is a simple webcam recorder, much like Apple's, allowing you to take a photo from your webcam and apply some neat effects to it real-time, the other is a more convential tool to use it.

Tested & Working on Ubuntu 8.04
