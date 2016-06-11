---
layout: post
title: Installing XEN on Debian Lenny
category: linux
---

Really needed to virtualize the server as I can't waste all those resources, so first tried vmware which was ok but I'm not that big a fan; I really wanted to go the XEN route.

So, after some experimenting with a dev machine I finally bit the bullet & installed it.

##### Check Support

The server processor is an AMD with an ASUS board, so first check you can support virtualization

    grep "vmx" /proc/cpuinfo

For AMD, look for SVM, for Intel look for VMX.

##### Install Xen

Next install xen, 'from here on in, it gets scary fast'

    aptitude install xen-linux-system-2.6.26-1-xen-amd64 xen-utils-3.2-1 xenstore-utils xenwatch xen-shell xen-tools

##### Setup

You're not out of the woods yet, edit **/etc/modules** if you're after image-based virtual machines; skip otherwise.

    nano /etc/modules
    
    ...change
    loop
    ...to
    loop max_loop=64

Save then edit **/etc/xen/xend-config.sxp**

    nano /etc/xen/xend-config.sxp

* Find **(network-script network-bridge)** and uncomment
* Make sure **(network-script network-dummy)** is commented
* Make sure **(vif-script vif-bridge)** is uncommented

e.g.

    (network-script network-bridge)
    #(network-script network-dummy)
    (vif-script vif-bridge)

##### Checking

Now reboot

    reboot

And check which o/s you've got

    uname -r

Mine returns...

    2.6.26-1-xen-amd64

more [here](http://www.howtoforge.com/virtualization-with-xen-on-debian-lenny-amd64)
