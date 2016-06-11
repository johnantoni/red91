---
layout: post
title: Get Ubuntu to Boot Faster
category: linux
---

Found a couple of tips that really work,

##### Remove Delay on Boot Menu

    sudo gedit /boot/grub/menu.lst

Find **timeout** and change it to 1

Save the file and close your boot menu file

##### Use All Your Cores on Boot-Up

If you've got a dual or quad core processor,

    sudo gedit /etc/init.d/rc

Find the line with **CONCURRENCY** and change it to:

    CONCURRENCY=shell

Save and close the init file

##### Profile Boot-Up

Bootup normally and hit **e** to drop into the terminal, then add **profile** to the end of your kernel's startup line.  Don't save this file, just let it boot up once **b** to profile your machine.

When you bootup it'll be slow while it's profiling, all the rest will be much faster

##### Disabling Unused Program On Startup

Goto **System / Preferences / Sessions** and hunt for **Evolution Alarm Notifier** and un-check it, if you're never gonna use Evolutions Alarm feature; I don't.

##### Install Preload

Make Ubuntu more intelligently monitor the programs you usually use and keep them in memory on startup by installing the **preload** package

    sudo apt-get install preload

More [here](http://aldeby.org/blog/index.php/speed-up-your-ubuntu-linux-boot.html)
