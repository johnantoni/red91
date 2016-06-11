---
layout: post
title: QuickPwn, SaiSuke and iTunes Contacts
category: apple
---

Last year my nice boss bought us all iPhones for doing a great job on the [site](http://www.moveme.com), and being geeks most had to mess with the internals.  Now the iPhone as you knows comes locked, but opening it has got real easier over time.  QuickPwn's the best and real simple to do, works on Windows or Mac.

* Go [here](http://www.quickpwn.com/)
* Then grab the version of QuickPwn that's best for you
* And the right official firmware for your iPhone
* Now use iTunes to upgrade your iPhone's firmware (it'll lock your iPhone but the next stage will solve that)
* Next fire up QuickPwn

QuickPwn reverse engineer's you're downloaded firmware file, creating a new file that'll give you the ability to use whatever network you want and install opensource software with the Cydia and Installer app, not just from the App Store.

Once it's built the file, it'll ask you to hit the home & power button on the iPhone in a specific sequence to boot the phone into DFU mode and allow it to flash it, basically this makes the iPhone into a normal flash drive without the internals knowing what's going on.

Process should take 10-15 minutes, after which you should have a working and more open iPhone.  Make sure you're iPhone's more than half charged before-hand just to be on the safe side.

DFU = Device Firmware Upgrade

#### Apple OSX 10.5.6 + DFU

Unfortunately there's a bug with the latest Leopard build (10.5.6) which stops you're ability to drop the iPhone into DFU mode.  This can be re-enabled by downloading an installer which will replace the IOUSB family extension with the 10.5.5 build.

Most reliable version found [here](http://www.hackint0sh.org/forum/f146/60657.htm)

This will replace the extension and put a backup of the original on your desktop in case you need to rollback.

##### SaiSuke

Next I needed my Google Calendar hooked up to my iPhone, this seemed the best [SaiSuke](http://www.saysoftware.net/saisuke_i/SaiSukeTop_E.html)

Simple, quick and easy to setup.  They've got two versions available from the Apple App Store.  The free version allows you to sync one Google Calendar, the paid-for will allow any number for £5.99

##### Google Contacts

Finally I attempted to sync my Google Contacts with the iPhone, but got a problem.  When you use iTunes to do this, it works ok the first time but because it can't distinguish what contact's it's got and what it hasn't you'll end up with tons of duplicates the next and succeeding times (i ended up with hundreds); so i'd use this sparingly if I were you.
