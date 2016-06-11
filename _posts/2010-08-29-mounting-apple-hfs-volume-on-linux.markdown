---
layout: post
title: Mounting Apple HFS volume on Linux
category: linux
---

<a href="http://www.flickr.com/photos/fluffels/2558496426/" title="penguins by Fluffels, on Flickr"><img src="http://farm4.static.flickr.com/3104/2558496426_45fc07a695.jpg" width="100%" alt="penguins" /></a>

_by Mariska Vos-Bolman_

__Outcome:__ **STABLE** provides **Read-Only** Access on Linux

First take your portable drive, format it on your macbook using the HFS+ filesystem, complete, unmount and disconnect.

Next go to your Linux machine, in my case Ubuntu 10.4, and install hfsplus

    sudo aptitude install hfsplus

Connect your portable drive and voila, it's automatically mounted on your linux desktop.