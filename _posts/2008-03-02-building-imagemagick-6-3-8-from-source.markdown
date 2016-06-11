---
layout: post
title: Building ImageMagick 6.3.8 from source
category: linux
---

Because Ubuntu 7.10 repositories don't have the latest version of ImageMagick, stopping you install the latest RMagick Ruby Gem; here's a guide to help you build it from source.

#### What had Gone Before

Before all this, I had installed the old version of ImageMagick by,

    sudo apt-get install imagemagick
    sudo apt-get install libmagick9-dev

So as you know before you start.

#### Remove ImageMagick

First off you're gonna have to remove your old copy of ImageMagick...

    sudo apt-get remove imagemagick

#### Building & Installing ImageMagick 6.3.8

Now we're going to get the latest source files for ImageMagick and configure them correctly.

    wget ftp://ftp.imagemagick.org/pub/ImageMagick/ImageMagick-6.3.8-11.tar.gz
    tar xvvzf ImageMagick-6.3.8-11.tar.gz
    cd ImageMagick-6.3.8-11

Now we're in the source directory, G

    ./configure --prefix=/usr

Excellent, let's build...

    sudo make

This will take a while, you may get a few warning pop up but hopefully no show-stoppers; afterwards lets install...

    sudo make install

#### Rmagick Gem

And finally the latest RMagick Gem..

    sudo gem install rmagick

If this still fails, you can install the old gem with..

    sudo gem install rmagick -v=1.15.12

But fingers crossed let hope the new one works

#### Did it work?

Yes it all installed, and I've now got the RMagick 2.2.2 gem running on Ubuntu 7.10

#### So, What does it support?

Simple to find out, run the command below to see what version of ImageMagick you've got and what it can support.

    identify -list format
