---
layout: post
title: Connecting thru Samba
category: linux
---

#####Setup Notes

Install

    sudo aptitude install samba smbfs

Check if you've got any connections to the desired box

    smbclient -L //192.168.1.xxx -U user

Connect

    smbclient //192.168.1.xxx/user -U user


