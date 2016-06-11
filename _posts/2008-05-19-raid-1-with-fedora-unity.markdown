---
layout: post
title: RAID 1 with Fedora Unity
category: linux
---

Over the weekend I went thru the process of setting up and installing the O/S on my private  server preparing it for colocating.  During this I wanted to bind the twin 1TB drives together in a RAID 1 configuration.  Now the ASUS BIOS has the facility to do this at the hardware level but by doing so it ties you down to the physical setup you used to build it.  However Linux provides the facility to do this at the software level without the ties which both alleviates you from the reliance and provides you with a more manageable alternative.

However for the uninitiated it's nowhere as simple, what follows is a short guide to setup a simple twin drive software RAID solution; handle with care.

#### Fedora Unity

Before I start, get a copy of Fedora Unity.  It's basically Fedora 8 with more stable drivers and packages.  I was speaking with one of my friends last week and he suggested using it for this very same reason, and although Debian does the same it is nowhere near as up-to-date.

* [Fedora Unity](http://fedoraunity.org/)

Grab the latest distro and burn it to a blank DVD, it's about 4.3gb in size so if your downloading I'd leave it going for the night.

#### Software RAID with LINUX

Once you've burned it to DVD, boot your machine up and go thru the install process, this example obviously assumes you have 2 identical drives but there's no stopping you using this to build a more advanced RAID setup later on.

Fedora has a pretty good partition manager which'll help you out a lot, so when it prompts you to decide on your partition layout, choose 'manual' and we'll begin;

* On the first drive, 
* Create a software [raid] partition of 100mb (we'll use this for /boot).
* Create a second software [raid] partition using all the remaining space.

* Select [raid] again and clone the first drive layout to the second drive.

Now next time you select [raid] it'll give you the option to create a raid device, binding both discs together for each partition.

* So, create a [raid] device using the ext3 filesystem, mount point '/boot', raid level 1, with raid members of 100mb in size (the two small partitions we created at the start), specify it to use both 100mb members (sda1 & sdb1).
* For the second partition I'm creating a LVM partition for the rest of the filesystem and the swapfile,
* So create a second [raid] device, file type LVM, raid level 1, using the two large members (sda2 & sdb2).

* Afterwards select [LVM] in the options panel and define your LVM group.
* Make an LVM volume group, e.g. 'lvmgroup'.
* Next add a volume to the group, mount point '/', file system ext3, lvm name 'lvmroot', using all the space (- 10gb for the swap partition).
* Next add a second volume to the lvm group, file system 'swap', lvm name 'lvmswap', using the remaining 10gb.

Click [finish] and you're done.

Setup your network settings and go make a coffee, Fedora takes a while to build the partitions and install the packages but afterwards you should be left with a pretty stable setup.

I built two partitions (boot & lvm) because I was informed this provides a more stable setup, if one boot partition goes down the other should kick in, providing some degree of failover.

Also creating an LVM group makes your filesystem more manageable and not so hard-wired so if you do need to do changes down the line you can.

Beyond that I'm going to leave in a copy of the Fedora LiveCD so I can boot from that if things get really hairy, I'm going to run the system headless with SSH access so Gnome isn't a necessity but for now it'll help in the system build.

All the best,

#### Update

One thing to remember is to make sure /boot is marked as bootable on both discs otherwise if you remove one the other won't kick in.
