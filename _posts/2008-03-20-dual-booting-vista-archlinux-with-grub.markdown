---
layout: post
title: Multi-Boot Vista and ArchLinux with GRUB
category: linux
keywords: "dual booting, grub installer, windows vista, linux, archlinux, tutorial, howto"
---

After setting up my new HP laptop with Vista and ArchLinux I thought I'd post how to replicate the same setup to help anyone else wanting to do the same, so here's a guide to do this with the latest Windows Vista and Arch Linux; enjoy!

#### Install Windows Vista

![Vista](http://static.howstuffworks.com/gif/windows-vista-7.jpg)

First off install Vista.  Now when it gets to asking you about how much disk space to use, say half (250gb drive => 128gb approx), this will mean the other half will be unused space (perfect for your linux build).

Install Vista and set it up, when you're happy and it's running ok continue to the next step.

#### Get ArchLinux

By now you should have two hard-drive partitions, one with Vista (NTFS) and one blank; now we're going to sort that second one out.

First download the relevant ISO disc image,

* [ArchLinux ISO](http://www.archlinux.org/download/)

Download it and burn it to CD, it's only 120mb so shouldn't take too long.  Once done insert it into your laptop and re-boot with it so it starts up the installer on bootup.

#### Install ArchLinux

![ArchLinux](http://farm3.static.flickr.com/2135/2358934335_a16a079c51.jpg)

When the installer boots up and shows the blue install screen you'll see 6 options, let's go thru each one...

##### 1. Prepare Hard Drive

Don't choose Auto-Prepare, it'll wipe your hardrive and destroy Vista, select **Partition Hard Drives** which will put you in the disk partition tool.

You should see two entries, one will be...

    1. [boot] [primary] [ntfs]
    2. ...... [unknown] [unknown]

The first is setup as the boot partition (the one which will boot on startup) and you know it's Vista as the filesystem is marked as NTFS, the other is unknown; our target for the Linux install.

So select the unknown one and **create**, mark it as a **primary** partition, select **write** to write the change and then **quit** to continue.  Note the name of the new partition (e.g. hd0/sda2) and goto step 2.

Note: SDA = SATA, the machine i'm using has SATA drives, if you've got older IDE drives it'll be HDA0.

##### 2. Set Filesystem Mountpoints

With this we'll want to set which partition we want to use as a swap disc, but as we didn't create one, select **none**.

Next you'll be asked which partition will be used as the root one for this install, select **hd0/sda2** (or whichever name you wrote down in step 1).  Continue to step 3.

##### 3. Select Packages

Here we select which packages we want to install, ArchLinux is broken up into 4 separate blocks; **base** being the core o/s.  Select all four as we'll be wanting all the tools to practice (otherwise you can choose 'base' and customise later).  Step 4...

##### 4. Install Packages

This will install ArchLinux to your target FileSystem, shouldn't take long; once done goto 5...

##### 5. Configure System

Now configure your system, with most options choose the defaulty chosen options; afterwards your configuration will be written to the new system.  Now onto the important step 6.

##### 6. Install Bootloader

Now we'll install the bootloader to allow you to select on-bootup which O/S to start.  Choose GRUB as your bootloader, you'll then be taken to the bootloader's config file.

Scroll down to the bottom of the file and uncomment the bottom entry until it resembles...

    # (2) Windows Vista
    title Windows Vista
    rootnoverify (hd0,0)
    makeactive
    chainloader +1

This will add to your selection list an entry pointing to your first partition so you can select to boot Vista.  Scroll up to the top of the file and check these lines, adjust as appropriately...

* **timeout 5** ...this sets the seconds to wait until booting the default entry

* **default 1** ...once the timeout expires GRUB will boot the option 1, ArchLinux, if you want to boot Vista instead, change it to 2.

* **fallback 0** ...if the default can't be booted, the fallback will be started, in this case the ArchLinux FallBack system created when we just installed ArchLinux (think of it as it's Linux's safe-mode, only much more powerful).

If you're happy with the setup, press CTRL+X to save the file and continue.

You'll next be asked where to place the Bootloader, we want to place it inside the MBR of the Drive so it will be launched when the disc spins up.  The MBR is the first sector of the Hard Drive and commonly called the Master Boot Record.

You'll be presented with probably 3 options...

    /SDA
    /SDA1
    /SDA2

Choose the first, this will be where the MBR is located.

Now you're finished, exit the Installer by selecting **Exit Install**, then type **REBOOT** to reboot.

The computer should restart and present you with the GRUB bootloader menu, where you'll now be able to select which O/S to start; job done.

* [ArchLinux](http://wiki.archlinux.org/index.php/Official_Arch_Linux_Install_Guide#Common_Installation_Procedure)
* [ArchLinux GRUB](http://wiki.archlinux.org/index.php/GRUB)

#### Setting ROOT Password

Please note that with this initial install your ROOT account won't have a password assigned to it, posing a poblem later on down the line.

So when you've booted into ArchLinux, and typed 'root' as the username and hit ENTER to login, type...

    passwd

To set the 'root' account's password.

#### Changing The Config

To edit the GRUB config later on, do...

    nano /boot/grub/menu.lst

#### Settings

So as you know, the system config files are located in...

* /etc/rc.conf (main system config)
* /boot/grub/menu.lst (grub boot menu)
* /etc/lilo.conf (lilo boot menu)
* /etc/mkinitrd.conf
* /etc/hosts
* /etc/fstab
* /etc/modprobe.conf
* /etc/modules.conf
* /etc/resolv.conf
* /etc/conf.d/*
* /etc/profile
