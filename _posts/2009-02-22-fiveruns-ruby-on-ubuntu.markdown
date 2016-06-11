---
layout: post
title: Ubuntu 9.04 + Ruby + Gmate + DVD etc.
category: linux
---

Quick run-down of some things I had to do to make Ubuntu 9.04 a better dev environ; stable so far, fingers crossed ;-)

##### Ruby compiled from Source

Fixed my prob [here](http://blog.fiveruns.com/2008/3/3/compiling-ruby-rubygems-and-rails-on-ubuntu) with help from the FiveRuns crew.

##### MySQL gem on Ubuntu

Setting up the mysql gem on ruby required some tweaking

    sudo aptitude install libmysqlclient15-dev
    sudo gem install mysql    

##### Gmate

Plus **lexruby**'s got an awesome repository on github that pretty much turns GEDIT into TextMate [here](http://github.com/lexrupy/gmate/tree/master).

Simple to install, basically bolts on 20+ colour themes (vibrant ink, darkmate, etc.) and a load of snippets; a lot of work must have went into this one.

##### Flash Player 64-bit

Grab [here](http://labs.adobe.com/downloads/flashplayer10.html) and then extract & install via...

    mkdir ~/.mozilla/plugins
    mv libflashplayer.so ~/.mozilla/plugins

##### Java

Simple to install

    sudo apt-get install sun-java6-jre sun-java6-jdk sun-java6-plugin

##### .bashrc

And some neat directives in your .bashrc file

    nano ~/.bashrc

Add these to the bottom & save

    export PS1='\[\033[0;35m\]\h\[\033[0;33m\] \w\[\033[00m\]: '
    alias free="free -m"
    alias update="sudo aptitude update"
    alias install="sudo aptitude install"
    alias upgrade="sudo aptitude safe-upgrade"
    alias remove="sudo aptitude remove"
    alias clean="sudo aptitude clean"

Then refresh your console,

    source ~/.bashrc

##### DVD, QuickTime, WMV and RealPlayer

Obviously no computer is happy without DVD playback and support for QuickTime, WMV and RealPlayer files, which can be fixed with help from the [MediBuntu](https://help.ubuntu.com/community/Medibuntu) community.

    sudo wget http://www.medibuntu.org/sources.list.d/jaunty.list --output-document=/etc/apt/sources.list.d/medibuntu.list
    
    sudo apt-get update && sudo apt-get install medibuntu-keyring && sudo apt-get update
    
    sudo apt-get install libdvdcss2 w64codecs

##### Dust Theme

This is one of the best IMO, very professional [here](https://wiki.ubuntu.com/Artwork/Incoming/DustTheme)

You'll need the clearlooks addon,

    sudo aptitude install gtk2-engines-clearlooks

Looking at the new things with Ubuntu Jaunty 9.04, better boot screen, nicer installer, ext4 and easy encypted /home dirs I think this new release I certainly gonna be something.

I think the only one I'd like now is a more friendly FTP tool, gFTP just isn't Transmit.
