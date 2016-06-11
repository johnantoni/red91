---
layout: post
title: Installing RMagick via MacPorts
category: ruby
---

Here's one especially for you Apple Mac lovers, how to easily install RMagick and all it's dependent libraries natively onto your Tiger OSX desktop.

Now if you begin to surf google you will notice at once people's glaring annoyance at how something so simple on Ubuntu is so difficult to get on OSX's Darwin O/S.

Thankfully with the help of "MacPorts":http://www.macports.org/ you can cut down the heartache and get back to developing apps.

#### Setting Up

So let's begin,

Before you do anything your going to have to setup your shell environment, so open up the Terminal and type:

    ls -as

This lists all .dot files in your current directory, with this you should be able to see two system files called .bash_login and .bash_profile, your going to need to edit these...

    mate .bash_login
    mate .bash_profile

Once you open these files (i use textmate to edit all my stuff and it offers a command-line addin so you can use it from the prompt, so it'll probably not work without this, just substitute 'mate' for vi, nano or whatever texteditor you have to hand).

Add these to the files...

    export PATH=/opt/local/bin:/opt/local/sbin:$PATH
    export DISPLAY=:0.0

Save your changes and close the files, now in the Terminal prompt type:

    env

This will display what's in the mac's environment settings, your new additions should be in there.

#### Install MacPorts

Hard part over, all down-hill from here on in.  Let's get started shall we,

Goto this link and download the latest mac binary .dmg file (install it like any other .dmg package, double-click it once downloaded to open it and then double-click the installer to install)

* [MacPorts 1.5.0 download](http://svn.macports.org/repository/macports/downloads/MacPorts-1.5.0/)

Afterwards you'll want to make sure you have the latest version, so open Terminal and type:

    sudo port -d selfupdate

Yay!

#### Installing ImageMagick via MacPorts

This is brilliant, with MacPorts it allows you to automate the task of downloading, unpacking, configuring, making then finally installing each package's software so you can just get coding; major bonus!

So at the Terminal prompt run each of these one at a time...

    sudo port install jpeg
    sudo port install libpng
    sudo port install libwmf
    sudo port install freetype
    sudo port install ghostscript

It'll take a while but afterwards you should have all of ImageMagick's dependencies built and installed (and more importantly all the latest ones!).

Next let's install ImageMagick,

    sudo port install imagemagick

#### And Finally...

And finally lets install the RMagick gem,

    sudo gem install rmagick

Excellent, you should now see in the prompt 'successfully install RMagick'

Now it's just up to you to use it, enjoy!

p.s. here's some links to some references if you get stuck...

* [http://rmagick.rubyforge.org/install-osx.html](http://rmagick.rubyforge.org/install-osx.html)
* [http://rubyforge.org/projects/rmagick/](http://rubyforge.org/projects/rmagick/)
