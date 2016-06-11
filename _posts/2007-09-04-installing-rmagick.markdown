---
layout: post
title: Installing RMagick on Ubuntu
category: ruby
---

Isn't open-source just wonderful, I mean with very little cash and a bit of time you can build something incredible just so long as your not afraid to roll up your sleeve's and delve into the console prompt; isn't much to ask is it?

Anyway today we'll go about quickly installing the RMagick Ruby gem to do some cool image manipulation and thumbnail management.

All examples are done on a development Ubuntu Server running 6.06 LTS, be sure to try this somewhere safe before hitting production ;-)

### From start to end

#### Install imagemagick & Libs

First install imagemagick on Ubuntu...

    sudo apt-get install imagemagick

Check it's installed...

    dpkg -l | grep magick

Now install libmagick9-dev, making sure you choose the corresponding version for imagemagick IF asked (but you probably won't be)

    sudo apt-get install libmagick9-dev

#### Gem Install

Now the easy bit (and most stressful), installing the Ruby Gem...

    sudo gem install rmagick

After which you should see, 

    Building native extensions.
    This could take a while...
    Successfully installed rmagick-1.15.9 

#### Doesn't Install !!!

Ok, for RMagick 2 it will only work for Imagemagick 6.3 and above, so to install the older version, do...

    sudo gem install rmagick -v=1.15.10

#### Including it in your Ruby App

Now let's use it, by adding it to our controller/application_controller.rb

    require 'RMagick'

Cool, your set to rock!

### Useful Links

* [Ruby Forum](http://www.ruby-forum.com/)
* [Rails Forum](http://www.railsforum.com/)

* [Ruby How-To's](http://wiki.rubyonrails.com/rails/pages/Howtos)

