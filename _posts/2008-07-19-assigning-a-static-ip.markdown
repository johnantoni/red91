---
layout: post
title: Static IPs
category: linux
---

    /sbin/ifconfig eth0 192.168.1.101 netmask 255.255.255.0 broadcast 192.168.1.255
          
Network address by convention would be the lowest: 192.168.1.0
Broadcast address by convention would be the highest: 192.168.1.255
The gateway can be anything, but following convention: 192.168.1.1

Note: the highest and lowest addresses are based on the netmask. The previous example is based on a netmask of 255.255.255.0

also,

    /usr/bin/neat  ..gnome gui tool
    /usr/bin/netcfg  ..handles all network interfaces
    /usr/sbin/system-config-network-tui  ...text user interface
    /usr/sbin/netconfig  ..(Only seems to work for first network interface eth0 but not eth1,...)

The ifconfig command does NOT store changes permanently. On reboot changes are lost.  Manually add your commands to the end of the file **/etc/rc.d/rc.local** to execute them upon boot. 

Otherwise use the commands **netcfg** and **netconfig**, which make permanent changes to the system network configuration files located in **/etc/sysconfig/network-scripts/**
