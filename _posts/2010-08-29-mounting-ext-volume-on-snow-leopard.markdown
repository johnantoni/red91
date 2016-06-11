---
layout: post
title: Mounting EXT volume on Snow Leopard
category: linux
description: "Mounting a Linux partition on osx snow leopard"
keywords: "linux, ext4, mount, osx, apple, macfuse"
---

<a href="http://www.flickr.com/photos/olaf_k/2073524517/" title="Schneeleopard schlafend  ...  sleeping snow leopard by omk1, on Flickr"><img src="http://farm3.static.flickr.com/2052/2073524517_8403bf26c0.jpg" width="100%" alt="Schneeleopard schlafend  ...  sleeping snow leopard" /></a>

_by olaf k_

__Outcome:__ **STABLE** provides **Read-Only** access on OSX Snow Leopard

First take your portable drive, format it on your linux machine (in my case Ubuntu 10.4) using the Disk Utility as an EXT3 filesystem, complete, unmount and disconnect.

Next go to your Snow Leopard machine, and install two things...

* Install [MacFUSE](http://code.google.com/p/macfuse/)
* Install [Fuse-EXT2](http://alperakcan.org/?open=projects&project=fuse-ext2)

Connect your portable drive and open Disk Utility to determine the device name to mount, in this case disk1s3, then open Terminal:

	mkdir Volumes/mnt
    sudo fuse-ext2 /dev/disk1s3 Volumes/mnt

You should now see the Linux partition mounted on your desktop.

__Works with EXT2, EXT3 and EXT4 volumes__