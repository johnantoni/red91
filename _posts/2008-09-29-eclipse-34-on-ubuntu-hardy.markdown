---
layout: post
title: Eclipse 3.4 on Ubuntu Hardy
category: linux
---

Finally got a working install of Eclipse 3.4 on Ubuntu Hardy 64-bit, here's how...

    sudo apt-get install openjdk-6-jdk

Now update your **bashrc** file,

    nano ~/.bashrc

...adding this line at the end,

    export JAVA_HOME=/usr/lib/jvm/java-6-openjdk/

Then download Eclipse 3.4

    wget http://ftp.osuosl.org/pub/eclipse/technology/epp/downloads/release/ganymede/R/eclipse-java-ganymede-linux-gtk.tar.gz
    tar xzvf eclipse-java-ganymede-linux-gtk.tar.gz
    mv eclipse eclipse3.4

And start with...

    eclipse3.4/eclipse

Thanks goes to **jhcore.com** for this [one](http://jhcore.com/2008/06/26/eclipse-34-ganymede-on-ubuntu/)

##### Update

This didn't work for me but it might help someone in different circumstances, will keep hacking at it; eventually it'll work.
