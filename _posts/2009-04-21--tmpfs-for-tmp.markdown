---
layout: post
title: /tmpfs for /tmp
category: linux
---

To use memory (ramdisk) for /tmp storage, edit

    sudo nano /etc/default/tmpfs

Set your default limit in bytes (here 548MB)

    shm=573741824

Then add to the startup routine

    sudo nano /etc/fstab

...add this line to the end of the file, save & reboot

    tmpfs /tmp tmpfs defaults,noexec,nosuid 0 0

On reboot, when you run **df -h** to see your disk allocations you'll see /tmp mounted into a ramdisk tmpfs partition.  More [here](http://209.85.229.132/search?q=cache:pQs8j5Ppmu4J:forums.debian.net/viewtopic.php%3Ft%3D16450+using+tmpfs+for+tmp&cd=1&hl=en&ct=clnk&gl=uk&client=firefox-a)

Or more comprehensively

    tmpfs /tmp tmpfs defaults,noatime,mode=1777 0 0
    tmpfs /var/tmp tmpfs defaults,noatime,mode=1777 0 0

<object width="560" height="340"><param name="movie" value="http://www.youtube.com/v/LcoPxyxpE9A&hl=en&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/LcoPxyxpE9A&hl=en&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="560" height="340"></embed></object>
