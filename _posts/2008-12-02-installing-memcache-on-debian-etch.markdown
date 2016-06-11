---
layout: post
title: Installing Memcached on Debian Etch
category: database
---

Unfortunately this takes a bit of work, the one in the **etch** repositiories is too old so you're going to have to build you're own sources and install manually.

##### Add Repository / Increase Cache Limit

So first off add the testing repository to your list of sources

    cd /etc/apt
    sudo nano sources.list

Then add the testing repository (here for the UK) and save the file

    deb-src http://ftp.uk.debian.org/debian/ testing main

Now before you update your sources list increase the size of the package cache by,

    nano /etc/apt/apt.conf

And add,

    APT::Cache-Limit "16777216";

...now when you update your packages cache you shouldn't get an out-of-space error, finally update

    sudo apt-get update

##### Build Packages

First create & move to your sources dir

    mkdir /sources
    cd /sources

Next grab the tools needed to compile the sources

    sudo aptitude install devscripts

Next we'll check if we need anything extra for libevent

    sudo apt-get build-dep libevent

And grab & build the **libevent** source

    sudo apt-get source libevent
    cd libevent-1.3e
    sudo debuild -us -uc
    cd ..

Then install **libevent** and it's development package

    sudo dpkg -i libevent1_1.3e-3_amd64.deb
    sudo dpkg -i libevent-dev_1.3e-3_amd64.deb

Next we'll test if there are any build dependencies for memcached

    sudo apt-get build-dep memcached

Then grab & build the **memcached** source

    sudo apt-get source memcached
    cd memcached-1.2.2
    sudo debuild -us -uc
    cd ..

Finally install memcached

    sudo dpkg -i memcached_1.2.2-1_amd64.deb

You should now have a working install of Memcached 1.2.2 on Debian Etch.
