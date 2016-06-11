---
layout: post
title: Passenger Makes It Simple
category: ruby
---

![24](http://farm4.static.flickr.com/3393/3230360506_a4b80b670b_o.jpg)

Ok, I don't know how long this thing will cope with my big ole blog but so far it's handling things quite quickly.

So as with all, here's what I did to make my rails blog run under [Phusion Passenger](http://www.modrails.com/install.html)

    sudo gem install passenger
    passenger-install-apache2-module

Follow the on-screen instructions then when it gives you the paths for the Apache modules, place those in a file called **passenger.load** in your **/etc/apache2/mods-available** directory

For me this was...

    nano /etc/apache2/mods-available/passenger.load

    LoadModule passenger_module /usr/local/lib/ruby/gems/1.8/gems/passenger-2.0.6/ext/apache2/mod_passenger.so
    PassengerRoot /usr/local/lib/ruby/gems/1.8/gems/passenger-2.0.6
    PassengerRuby /usr/local/bin/ruby

Save & close the file, then load in the Passenger module

    sudo a2enmod passenger

Now create your new Rails site's Virtual host file

    nano /etc/apache2/sites-available/myblog.com

Use this for an example,

    # domain: myblog.com
    # public: /apps/myblog.com/

    <VirtualHost *:80>
      # Admin email, Server Name (domain name) and any aliases
      ServerAdmin contact@myblog.com
      ServerName  myblog.com
      ServerAlias www.myblog.com

      # Document Root (where the public files are located)
      DocumentRoot /apps/myblog.com/public

      <Directory /apps/myblog.com/public>
        Options FollowSymLinks
        AllowOverride None
        Order allow,deny
        Allow from all
      </Directory>

      # Very Important - forces Apache to realise this is a Rails Site
      RailsBaseURI /

      # Custom log file locations
      LogLevel warn
      ErrorLog  /apps/myblog.com/log/error.log
      CustomLog /apps/myblog.com/log/access.log combined

    </VirtualHost>

Save the file and enable your site

    sudo a2ensite myblog.com

This will enable the site and copy the virtual host file to **/etc/apache2/sites-enabled** signifying it's live.

Next up restart Apache

    sudo /etc/init.d/apache2 reload

In whatever way you see fit,

    sudo apache2ctl graceful
    sudo /etc/init.d/apache2 restart

Enjoy,

By the way whenever you change the code on the server and want Passenger to do a refresh either restart Apache or touch this file, Passenger should get the idea,

    touch /apps/myblog/tmp/restart.txt


This was done on Ubuntu Intrepid, using Apache 2.2, Rails 2.2 and Ruby 1.8.7 (latest stable).

##### Bug in RubyGems 1.3

Just got an email from **Hongli Lai** over at the Passenger team, haven't noticed this one but there's a bug with RubyGems 1.3 in which Passenger will fall over unless the Ruby apps **environment.rb** is owned by someone with a **home** directory.

This should do it

    chown john /apps/myblog/config/environment.rb

More [here](http://groups.google.com/group/phusion-passenger/browse_thread/thread/dbb6711f24471527?pli=1)
