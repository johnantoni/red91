---
layout: post
title: How To Upgrade Ruby on OSX Leopard
category: ruby
---

Just tested this and works ok.  Leopard comes with 1.8.6, my box has 1.8.7 so best to keep them uniform for better code reliance.

What this'll do is replace your current version of Ruby without replacing the one supplied by Apple.  Their's is stored in **/usr/bin/ruby**, your's will be stored in **/usr/local/bin/ruby** then hooked up with the PATH directive.

So in Terminal

    sudo port install wget

    wget ftp://ftp.ruby-lang.org/pub/ruby/stable-snapshot.tar.gz
    tar -xzvf stable*.tar.gz
    cd ruby

Configure & Build Ruby for Leopard

    ./configure --prefix=/usr/local --enable-pthread
    sudo make
    sudo make install

Add the files to your Terminal's path

    mate ~/.bash_profile

Add and Save this line

    export PATH=/usr/local/bin:$PATH

Refresh Terminal, 

    ruby -v
    => ruby 1.8.7 (2009-01-23 revision 0) [i386-darwin9.6.0]

##### Gems

Because this'll effectively give you another version of Ruby taking over from the supplied one, you'll have to re-install RubyGems, sorry....

    wget http://rubyforge.org/frs/download.php/45905/rubygems-1.3.1.tgz
    tar -xzvf rubygems*.tgz
    cd rubygems*
    
    sudo ruby setup.rb

Here's some install commands to get you started from my last setup

    sudo gem install rails rake mysql mongrel mongrel_cluster thin capistrano termios sqlite3-ruby mini_magick ZenTest liquid rcov RubyInline image_science

MySQL is a pig on Leopard so this will get that gem working again

    sudo env ARCHFLAGS="-arch i386" gem install mysql -- \  --with-mysql-dir=/usr/local/mysql --with-mysql-lib=/usr/local/mysql/lib \  --with-mysql-include=/usr/local/mysql/include

Then some of my favourites...

    gem sources -a http://gems.github.com
    sudo gem install ultrasphinx rdiscount RedCloth twitter4r mislav-will_paginate fastercsv

...gotta dash, still on season 2 of 24, girlfriend won't let me watch day 7 until i've seen the rest ;-)
