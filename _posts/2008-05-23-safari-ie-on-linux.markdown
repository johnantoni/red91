---
layout: post
title: IE6 on Linux with Safari and WebKit
category: browser
---

![webkit](http://farm3.static.flickr.com/2030/2538993073_7a6ef3178e.jpg)

##### IE 4 Linux

For cross-browser testing you can thankfully run IE6 (and 5/4) on Linux with the handy IE4Linux package.

* [IE 4 Linux](http://www.tatanka.com.br/ies4linux/page/Installation:Ubuntu)

Assuming you've got WINE you'll also need **cabextract**, so add a repository to your distro,

    sudo gedit /etc/apt/sources.list
    deb http://wine.budgetdedicated.com/apt hardy main

    sudo aptitude update && sudo aptitude install cabextract

Installing IE6 on Linux is a little tricky, the best way i've found to get it working is doing;

    su root
    wget http://www.tatanka.com.br/ies4linux/downloads/ies4linux-latest.tar.gz
    tar zxvf ies4linux-latest.tar.gz
    cd ies4linux-*
    ./ies4linux

Click to create icon on Desktop, it'll run thru downloading packages and prefixes for Wine after which you should have IE on your Linux distro, which will be accessible (if you lose the desktop shortcut) from,

    /root/bin/ie6

##### Safari / WebKit

Apple's Safari browser is powered by the WebKit rendering engine, which thankfully is an opensource project and can be installed and tested against on your Linux machine via a few steps (yep, i've run thru this and it does work).

First get the dependencies,

    sudo aptitude install autoconf automake libtool bison flex 
    gperf libicu-dev build-essential libxt-dev libsqlite3-dev 
    libjpeg62-dev libpng12-dev libglibmm-2.4-dev libgtk2.0-dev 
    libcurl4-openssl-dev libxslt1-dev

Now goto [http://nightly.webkit.org/](http://nightly.webkit.org/) and grab the latest nightly build.

Unzip and Terminal into the archive dir and build the source,

    ./autogen.sh
    ./configure --enable-svg-experimental
    make

Once that's all done (which will take a while) you should now have a mini-WebKit browser in which to test against via...

    ./Programs/GtkLauncher

Navigate to the ACID3 website to test for standards compliance here [http://acid3.acidtests.org/](http://acid3.acidtests.org/).

You should get 100/100, WebKit is pretty on when it comes to standards.

![acid test](http://farm4.static.flickr.com/3085/2539897804_d3843e6846.jpg)
