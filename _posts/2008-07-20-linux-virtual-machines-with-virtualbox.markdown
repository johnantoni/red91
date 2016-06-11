---
layout: post
title: Virtual Machines in Linux
category: linux
---

##### Download VirtualBox

Download [VirtualBox](http://www.virtualbox.org/wiki/Downloads), binary link will redirect you to Sun's [site](https://cds.sun.com/is-bin/INTERSHOP.enfinity/WFS/CDS-CDS_SMI-Site/en_US/-/USD/ViewProductDetail-Start?ProductRef=innotek-1.6-G-F@CDS-CDS_SMI).

##### Installing

For me, I needed to install libqt3-mt before I could successfully install the 64bit package,

    sudo aptitude install libqt3-mt

Now Install your download with...

    sudo dpkg -i virtualbox_1.6.2-31466_Ubuntu_hardy_amd64.deb

Further note, you may need to recompile the VirtualBox kernel module if a previous install failed or you didn't have the necessary dependencies first time; this is done by:

    sudo /etc/init.d/vboxdrv setup

##### Permissions

* Goto System / Administration / Users and Groups
* Click 'Unlock'
* Enter your password and click to 'Authenticate'
* Click 'Manage Groups'
* Find the 'vboxusers' group and click properties for it
* Make sure there's a checkbox next to your name within that group, so you are part of the 'vboxusers' group

You will have to reboot your machine for the change to take effect.

##### USB Support

By default USB support is disabled, to enable it;

    sudo nano /etc/init.d/mountdevsubfs.sh

Inside you'll find a block looking like;

    # Magic to make /proc/bus/usb work
    #
    #mkdir -p /dev/bus/usb/.usbfs
    #domount usbfs “” /dev/bus/usb/.usbfs -obusmode=0700,devmode=0600,listmode=0644
    #ln -s .usbfs/devices /dev/bus/usb/devices
    #mount --rbind /dev/bus/usb /proc/bus/usb

Edit it to look like;

    # Magic to make /proc/bus/usb work
    #
    mkdir -p /dev/bus/usb/.usbfs
    domount usbfs “” /dev/bus/usb/.usbfs -obusmode=0700,devmode=0600,listmode=0644
    ln -s .usbfs/devices /dev/bus/usb/devices
    mount --rbind /dev/bus/usb /proc/bus/usb

(basically uncomment the last four lines)

Save changes and close the file (CTRL+X and Y)

##### Create a VM

Applications / System Tools / Sun xVM VirtualBox

Scroll down and click 'I Agree' on the licence agreement, then fill in the registration information to use VirtualBox, first time.

The rest is pretty self-explanatory if you've used other VM packages like OSX Parallels or Microsoft Virtual Machine.

* Click 'New'
* Enter a name for your VM, choose the target platform you're going to use it for
* Choose Base Memory
* Create a new Virtual Disk Image, click 'New'
* Click 'Fixed Size' (for simplicity), 8GB should be enough for starters, you can choose 'Dynamic' which will grow or shrink the disk image based on usage
* Click 'OK' then 'Finish' to build the Virtual Disk Image
* Once the image has been created (may take 5+ minutes) it will show the new disk image in a listbox for selection, make sure it's selected and click 'Next' then 'Finish'

You now have a virtual machine ready for whichever ISO or CD-ROM install you wish to place on it.  You can hit Machine / Settings / CD-ROM to select an ISO image to boot from so you can install from a disk image.

Note: Even if you're running on a 64bit machine, the virtual machines will still operate under a 686 (32bit) platform.

All the best,

(originally based on a guide from [Ubuntu Geek](http://www.ubuntugeek.com/howto-install-virtualbox-16-in-ubuntu-804hardy-heron-including-usb-support.html))
