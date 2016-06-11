---
layout: post
title: Ubuntu Beep
category: linux
---

When upgrading to Ubuntu Ibex 8.10 i've begun to notice that on shutdown the pc speaker beeps really loudly.  Going into System / Preferences / Sound didn't stop this so i've found another way which is to add it to the modprobe blacklist file (which although in no way perfect does kill it).

    sudo gedit /etc/modprobe.d/blacklist

Then add this at the end of the file,

    blacklist pcspkr

Save the file, close gedit then for good measure kill it once and for all,

    sudo rmmod pcspkr

Harsh but should do the trick
