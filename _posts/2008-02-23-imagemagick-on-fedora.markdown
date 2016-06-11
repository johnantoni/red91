---
layout: post
title: ImageMagick and MySQL on Fedora
category: linux
---

#### ImageMagick

From the terminal...

    sudo yum install freetype freetype-devel libjpeg libjpeg-devel libpng libpng-devel libtiff libtiff-devel ImageMagick ImageMagick-devel ghostscript ghostscript-devel ghostscript-fonts libwmf libexif

This will install ImageMagick and all the development libraries to get it working.

And for the ruby gem...

    sudo gem install rmagick

#### MySQL

First MySQL...

    sudo yum install ruby-devel mysql mysql-devel mysql-server

Then the Ruby gem...

    sudo gem install mysql -- --with-mysql-config=/usr/bin/mysql_config

#### Starting MySQL

Now in Terminal do...

    /sbin/chkconfig mysqld on
    /sbin/service mysqld start

That should enable the mysql services on your Fedora machine.

#### Services Running on Startup?

Do this to see what is actually running when you power up...

    /usr/sbin/ntsysv

And finally to cleanup your System...

    sudo yum clean all
