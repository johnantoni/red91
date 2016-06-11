---
layout: post
title: Installing VMWare Server on Ubuntu
category: linux
---

First install the pre-requisites;

    sudo aptitude install linux-headers-`uname -r` build-essential
    sudo aptitude install xinetd

Download VMWare Server .tar.gz file from [here](http://www.vmware.com/download/server/).

Remember to signup for a Serial Number, you'll need that during the install

Download the latest **vmware-any-any-update** patch [here](http://knihovny.cvut.cz/ftp/pub/vmware/),

Now extract VMWare Server and terminal into it's directory, run,

    cd vmware-server-distrib
    sudo perl vmware-install.pl

When asked **Before running VMware Server for the first time, you need to configure it by invoking the following command: "/usr/bin/vmware-config.pl". Do you want this program to invoke the command for you now? [yes]** enter **NO** and patch VMWare with that file.

Extract the files within that patch and Terminal into it's directory,

    cd vmware-any-any-update115
    sudo ./runme.pl

It should prompt you to run **vmware-config.pl**, this time say YES and continue with the install.

Afterwards start vmware with,

   vmware

You might get a load of errors like this,If you get compile errors, do this;

    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_3.4' not found (required by /usr/lib32/libcairo.so.2)
    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_4.2.0' not found (required by /usr/lib32/libstdc++.so.6)
    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_3.4' not found (required by /usr/lib32/libcairo.so.2)
    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_4.2.0' not found (required by /usr/lib32/libstdc++.so.6)
    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_3.4' not found (required by /usr/lib32/libcairo.so.2)
    /usr/lib/vmware/bin/vmware: /usr/lib/vmware/lib/libgcc_s.so.1/libgcc_s.so.1: version `GCC_4.2.0' not found (required by /usr/lib32/libstdc++.so.6)

That's because one part of the vmware package was compiled with a different version of gcc than the one you're running now, to fix that do: 

    sudo cp /lib/libgcc_s.so.1 /usr/lib/vmware/lib/libgcc_s.so.1/
    sudo cp /usr/lib/libpng12.so.0 /usr/lib/vmware/lib/libpng12.so.0/ 

Now you should be able to start VMWare Server

(tested and working on Ubuntu Hardy 8.04 64-bit)
