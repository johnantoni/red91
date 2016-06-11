---
layout: post
title: Ubuntu Setup
category: linux
---

After grabbing and installing Ubuntu 8.04 I then had to put together and setup the baby, luckily I wrote down most of everything I did in case I'd have to do it again and to help out you guys.

What follows are my findings and what I did to fix them.  The machine I used is an HP Pavillion dv2000 model dv2742 special edition.  It's got a built-in intel graphics card, 3gb memory, sata 250gb drive, wifi, bluetooth and an intel dual core 2 processor.

I installed the o/s using the 64-bit edition of Ubuntu 8.04 Hardy Heron, all what you see below are workable settings which provided the right setup; hope they help your situation if you go down this route.

#### Update System

First port of call, check for any new updates post-install,

    sudo aptitude update
    sudo aptitude upgrade

#### Dependencies / Software / Setup

Next, install Ruby, FlashPlayer, GCC Compiler, MySQL, JAVA, SqlLite,

    sudo aptitude install mysql-server flashplugin-nonfree ruby-full libsqlite3-dev build-essential libmysqlclient15-dev sun-java6-jdk

Volume Mixer,

    sudo aptitude install gnome-alsamixer

ImageMagick,

    sudo aptitude install imagemagick

#### Ruby Gem Handler

I could get GEM from the repositories but because with each new update it breaks away from the in-built Linux installer it's best to install it from source,

    wget http://rubyforge.org/frs/download.php/34638/rubygems-1.1.0.tgz 
    tar xzvf rubygems-1.1.0.tgz
    cd rubygems-1.1.0
    sudo ruby setup.rb
    sudo ln -s /usr/bin/gem1.8 /usr/bin/gem

Had problems updating the GEM system initally, so logged in as **root** to finish it off,

    su root 
    sudo gem update --system

Now when you type **gem --version** you should see GEM ready to roll,

#### Gem Libraries

The slow bit, ran this as **root** just to make sure it worked,

    sudo gem install rails rake mongrel mongrel_cluster thin capistrano mysql termios sqlite3-ruby mini_magick will_paginate ZenTest liquid rcov

#### How to update RubyGem's later

Later on you'll want to update the gem system, which by going this way won't be possible with the usual 'sudo gem update --system', but this:

    sudo gem install rubygems-update
    sudo update_rubygems

#### VLC + GIT

Next VLC to play videos,

    sudo aptitude install vlc

Transmission for torrents, most important bit,

    sudo aptitude install transmission

And GIT to handle code versioning,

    sudo aptitude install git-core

#### Firefox + MS Fonts

Next I need Firebug for Firefox 3.  Ubuntu 8.04 comes with Firefox 3 beta 5, the one available thru Tools / Add-ons won't work with it; but thankfully it's in the repositories

    sudo aptitude install firebug

And you'll probably need Microsoft Fonts later down the line,

    sudo aptitude install msttcorefonts

#### Pimp GEDIT

The default Gnome Text Editor Isn't bad but let's add some extra's to really kick it in gear,

    sudo aptitude install gedit-plugins

And tweak it,

    wget http://robzon.kapati.net/rails/rhtml.lang && sudo mv rhtml.lang /usr/share/gtksourceview-2.0/language-specs/
    wget http://robzon.kapati.net/rails/rails.xml && sudo mv rails.xml /usr/share/mime/packages
    sudo update-mime-database /usr/share/mime

Follow the guide here to get the TextMate look,

* [Pimp GEDIT](http://grigio.org/pimp_my_gedit_was_textmate_linux)

Now when you open rails source files they'll actually look right, thanks Grigio.

* [More GEDIT Themes](http://github.com/mig/gedit-themes/tree/master), including **Vibrant Ink** variants.

#### PostGreSql + Thunderbird

Pretty easy to install the most powerful db system, and the better email handler

    sudo aptitude install postgresql thunderbird

#### Wine for Windows

Thanks to Google for their support the Wine project is going great, to get Windows software running natively on your machine,

First add the key,

    wget -q http://wine.budgetdedicated.com/apt/387EE263.gpg -O- | sudo apt-key add -
    
Then add the repository to your default repository list,

    sudo wget http://wine.budgetdedicated.com/apt/sources.list.d/hardy.list -O /etc/apt/sources.list.d/winehq.list

And finally install it,

    sudo apt-get install wine

#### Effects

To enable compiz effects make sure Appearance / Visual Effects is set to 'Extra', then install the Advanced Effects Manager,

    sudo aptitude install compizconfig-settings-manager

This will give you access to the 3d cube, [skydome](http://www.linuxquestions.org/questions/linux-software-2/help-with-compiz-fusion-3d-cube-on-ubuntu-gutsy-gibbon-594073/page2.html) effect and a host of other cool addons.

My desktop dpi is set to 100dpi, fonts set to 'Bitstream Vera Sans Roman 8pt', with 'Bitstream Vera Sans Bold 8pt' for Windows Title; and 'Liberation Mono 8pt' for fixed width font.  Using subpixel smoothing for LCD.

#### Sound

For my laptop (hp pavillion dv2000 / dv2742se model), i had to use a different sound mixer to make sure the quickplay volume and mute buttons talked to the sound system.

So from the top menu bar, System / Preferences / Sounds, then set the Default Mixer Tracks hander device to: Conexant CX20561 (hermosa) (oss mixer).

#### Cleanup

To get any temp files carried on from the install, clean with,

    sudo aptitude clean

Job done, however I had a problem with Hibernate & Suspend which was lucky fixed with some advice from [here](http://jkyamog.blogspot.com/2007/12/linux-install-on-hp-6910p-using-ubuntu.html)
