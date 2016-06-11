---
layout: post
title: Enabling Snow Leopard 64-bit Kernel
category: apple
---

Amit Singh recently posted how to patch your macbook with the 64-bit kernel enabled, here i'll try to explain why you'd want to do this and guide you thru the process of making this happen.

## Technicals

First off this article assumes you have a Snow Leopard installed on your macbook, and that it's one of the newer ones with the Intel Core 2 Duo processors.  Core Duo's only support 32-bit mode, Core 2 Duo's have a 64-bit instruction-set and so are capable of running the 64-bit Kernel & 64-bit EFI; think of the EFI as your system bios done much better.

## Why

Well the problem here is that when Snow Leopard came out, it heralded the age of a full 64-bit machine, efi, kernel, software, the works.  However there was a problem, a lot of original intel mac hardware was only capable of 32-bit mode, so they had to make a decision, enable 64-bit mode and annoy particular users or leave it in-active and gradually ramp up the ones that could; thankfully they opted to allow all intel mac's access and then ramp up support as things progress.

Now newer hardware should come with the 64-bit kernel enabled, giving you faster throughput, and as everythings going that way you'd probably want to be there.

Now with my macbook, an aluminium unibody 13" Intel Core 2 Duo 2.0ghz macbook, I couldn't get the 64-bit kernel enabled, only the 64-bit EFI; however by patching the BOOT.EFI file managed to enable it.

## How

To run the 64-bit kernel, you'll need:

* Snow Leopard
* Intel Core 2 Duo Mac
* a 64-bit efi
* and a patched [boot.efi](http://www.red91.com/files/boot64.efi) file

The patched file enables 64-bit kernel support for some macmini / macbook / imac / macbook-air models, which have the 64-bit efi bootrom.

Download the file to your desktop, open Terminal and:

    cd ~/Desktop
    sudo cp boot64.efi /System/Library/CoreServices/
    cd /System/Library/CoreServices/
    sudo chown root:wheel boot64.efi
    sudo chflags uchg boot64.efi
    sudo bless −−folder /System/Library/CoreServices/ \
    −−file /System/Library/CoreServices/boot64.efi

Commands starting with sudo will ask for your password.

Next, 

    nano /Library/Preferences/SystemConfiguration/com.apple.Boot.plist 
  
And add arch=x86_64 to the Kernels Flags section, e.g.

    <key>Kernel Flags</key>
    <string>arch=x86_64</string>

Now reboot, your mac should boot up with the 64-bit kernel, but some models missing 64-bit intel video drivers, for example macbook4,1 with gmax3100 may not.

If something does go wrong, boot with the Leopard / Snow Leopard DVD and run this command in terminal

    sudo bless –folder /Volumes/YOUVOLUMENAME/System/Library/CoreServices \
    –file /Volumes/YOUVOLUMENAME/System/Library/CoreServices/boot.efi

## How do I Tell ?

Open up System Profiler, click Software and you should see:

    64-bit Kernel and Extensions:	Yes

## Update - Problem with 10.6.1

Alas the recent OSX update 10.6.1 was sent out which looks to have made this whole process mute, even if you hard-wired the boot file.  Obviously they didn't want certain machines running 64-bit mode after all.  Thankfully as long as you aren't one of the lucky ones with more than 4GB RAM you won't notice it, 32-bit and 64-bit apps should run peachy regardless.

Enjoy, it was fun while it lasted.
