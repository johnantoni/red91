---
layout: post
title: Flash 9 and Quicktime on Fedora 8
category: linux
keywords: "flash install, fedora, linux, quicktime plugin, opensource, tutorial"
---

#### Flash 9

    sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
    sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
    mkdir -p /usr/lib/mozilla/plugins
    sudo yum install nspluginwrapper.{i386,x86_64} pulseaudio-lib.i386
    sudo yum install flash-plugin
    mozilla-plugin-config -i -g -v

After that you should have the 64-bit edition of Flash 9 running in Firefox, the 32-bit edition is much easier.

#### Quicktime

    sudo yum install mplayer mplayer-gui mplayer-skins mplayer-fonts mplayerplug-in mencoder
    sudo /usr/bin/mozilla-plugin-config -i -f

Re-open Firefox and you should get some new video plugins enabled.

* [Fedora 8 media links](http://www.mjmwired.net/resources/mjm-fedora-f8.html#mediaplayers)
