---
layout: post
title: Linux Better Screen Fonts
category: linux
---

If you've just switched over to Linux, you're probably hating the default monospaced font; thankfully I've found some better ones...

#### Liberation

*On May 9, 2007, Red Hat announced the public release of these fonts under the trademark LIBERATION at the Red Hat Summit.  You are free to use these fonts on any system you would like. You are free to redistribute them under the GPL+exception license found in the download.*

[Liberation Fonts](https://www.redhat.com/promo/fonts/)

,,,this is now obtainable in the package repository,

    sudo aptitude install ttf-liberation

#### Lucidia Grande

*AppleGaramond, Aquabase, LITHOGRL, Lucida Grande, Lucida Mac, lucon, MacGrand*

*Thanks to Nylock for sharing this fonts with us*

[Mac Fonts](http://www.osx-e.com/downloads/misc/macfonts.html)

#### Installing

Once downloaded, usually to your desktop, you're going to need to install them into your system to use.  They need to be copied to the **/usr/share/fonts** directory.

First unzip the files, then open Terminal and...

    cd /usr/share/fonts/truetype
    sudo mkdir liberation
    sudo mkdir apple-fonts

Here, you've moved into the location where the System's fonts are stored, then created one directory for the liberation fonts (worth having), and the apple fonts.

Now copy the files to each directory from the desktop to liberation & apple-fonts,

    sudo cp /home/[user]/Desktop/liberation-fonts/* /usr/share/fonts/truetype/liberation
    sudo cp /home/[user]/Desktop/fonts/* /usr/share/fonts/truetype/apple-fonts

Final bit, refresh the font cache...

    sudo fc-cache -vf

Logout, login and your ready to use them.
