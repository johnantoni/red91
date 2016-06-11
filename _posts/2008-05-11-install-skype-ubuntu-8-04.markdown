---
layout: post
title: Install Skype on Ubuntu 8.04
category: linux
keywords: "skype install, linux, howto, ia32-libs, skype debian, libqt4, 64bit, ubuntu linux"
---

To install Skype on an AMD-64 system, you'll need the 32-bit libraries (if you're distro is 32-bit, skip this bit),

    sudo apt-get install ia32-libs

Now grab the qt4 libraries,

    sudo apt-get install libqt4-gui libqt4-core

Download the appropriate Skype package from...

* [Skype Linux](http://skype.com/download/skype/linux/choose/)

Firefox should download it to your desktop so...

    cd Desktop
    sudo dpkg --install --force-architecture --force-depends skype-debian_2.0.0.72-1_i386.deb

And you're done, with the Webcam driver installed and enabled you should now be able to make video calls too.

* [Ubuntu Webcam Install](http://www.red91.com/articles/2008/05/11/webcam-ubuntu-on-dv2000)

##### Update 64-bit distro available

* [here](http://www.skype.com/go/getskype-linux-ubuntu-amd64)
