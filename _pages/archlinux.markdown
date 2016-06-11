---
layout: page
title: Notes: ArchLinux
---

# Setup ArchLinux Linux

##### Links

* Main [Website](http://www.archlinux.org/)
* [Wiki Site](http://wiki.archlinux.org/index.php/Main_Page)
* RAID [Setup](http://wiki.archlinux.org/index.php/Installing_with_Software_RAID_or_LVM)

##### BASH Script

...Create with

    nano ~/.bashrc

...Copy + Paste

    export PS1='\[\033[0;35m\]\h\[\033[0;33m\] \w\[\033[00m\]: '    
    alias free="free -m"
    alias update="sudo pacman -Su"
    alias install="sudo pacman -S"
    alias upgrade="sudo pacman -Syu"
    alias remove="sudo pacman -R"
    alias search="sudo pacman -Q"
    alias clean="sudo pacman -Scc"

...Activate with

    source ~/.bashrc

##### IPTables

    nano /etc/iptables/iptables.new.rules

Copy & Paste [this](/page/firewall)

    nano /etc/conf.d/iptables

    # Configuration for iptables rules
    
    IPTABLES=/usr/sbin/iptables
    
    IPTABLES_CONF=/etc/iptables/iptables.new.rules
    IPTABLES_FORWARD=0  # disable IP forwarding!!

Save

    /etc/rc.d/iptables save

Add to DAEMONS

    nano /etc/rc.conf

    DAEMONS=(... iptables network ...)

##### RAID 

* [raid setup with 3 disks](http://wiki.archlinux.org/index.php/Installing_with_Software_RAID_or_LVM)

   cfdisk /dev/sdb   ..2st disk
   cfdisk /dev/sdc   ..3rd disk

mark as bootable (if doing this for first..2nd disc), type = fd, write = yes

now load raid1 module

   modprobe raid1

   mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1

   fdisk -l | grep raid

* [raid ext3](http://bbs.archlinux.org/viewtopic.php?id=50756)

   cat /proc/mdstat

   mdadm --misc --detail /dev/md0

   mkfs.ext3 -j /dev/md0 -L /storage

   mount /dev/md0 /storage

   mount -t ext3 /dev/md0 -L /storage

##### Static IP

addr: 192.168.1.66 (static ip we're gonna use)
bcast: 192.168.1.255
mask: 255.255.255.0
