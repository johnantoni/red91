---
layout: page
title: Notes: Debian
---

# Setup Debian Linux Server

##### Sources

    sudo nano /etc/apt/sources.list

    deb http://ftp.debian.org/debian/ etch main
    deb-src http://ftp.debian.org/debian/ etch main
    
    deb http://security.debian.org/ etch/updates main contrib
    deb-src http://security.debian.org/ etch/updates main contrib
    
    deb http://www.backports.org/debian etch-backports main contrib non-free
    
    wget -O - http://backports.org/debian/archive.key | apt-key add -

    apt-get install ssh gcc

* [Software RAID SATA DISKS](http://andreas.scherbaum.la/blog/archives/54-Install-Debian-Etch-on-a-Software-Raid-1-with-S-ATA-disks.html)

    aptitude install sudo

    visudo

    cat /etc/issue
    free -m
    nano ~/.bash_profile

    sudo aptitude install screen
    sudo aptitude install build-essential

    sudo aptitude install mysql-server mysql-client libmysqlclient15-dev libmysql-ruby -y
    
    mysqladmin -u root password YOURMYSQLPASSWORD

    sudo nano /etc/mysql/my.cnf

    sudo aptitude -t etch-backports install ruby1.8-dev ruby1.8 ri1.8 rdoc1.8 irb1.8 libreadline-ruby1.8 libruby1.8 libopenssl-ruby -y
    
    sudo ln -s /usr/bin/ruby1.8 /usr/local/bin/ruby
    sudo ln -s /usr/bin/ri1.8 /usr/local/bin/ri
    sudo ln -s /usr/bin/rdoc1.8 /usr/local/bin/rdoc
    sudo ln -s /usr/bin/irb1.8 /usr/local/bin/irb
    
    mkdir ~/sources
    cd ~/sources
    wget http://rubyforge.org/frs/download.php/38646/rubygems-1.2.0.tgz
    
    tar xzvf rubygems-1.2.0.tgz
    cd  rubygems-1.2.0
    
    sudo ruby setup.rb
    sudo ln -s /usr/bin/gem1.8 /usr/bin/gem
    
    sudo gem update
    sudo gem update --system
    
    sudo gem install rails
    
    sudo aptitude install imagemagick librmagick-ruby1.8 librmagick-ruby-doc libfreetype6-dev xml-core -y
    
    sudo aptitude install postfix subversion -y

    Postfix is now set up with a default configuration.  If you need to make 
changes, edit /etc/postfix/main.cf (and others) as needed.  To view Postfix configuration values, see postconf(1).
    
    After modifying main.cf, be sure to run '/etc/init.d/postfix reload'.
    
    sudo gem install rails -v 2.0.2
    
    sudo aptitude install sqlite3
    
    sudo aptitude -t etch-backports install ruby1.8-dev libsqlite3-dev

* [fix](http://code.whytheluckystiff.net/camping/wiki/BeAlertWhenOnSqlite3)

    sudo gem install rails rake mongrel mongrel_cluster thin capistrano mysql termios sqlite3-ruby mini_magick will_paginate ZenTest liquid rcov
    
    sudo gem install mongrel_cluster --include-dependencies
    
    sudo aptitude install libpcre3 libpcre3-dev libpcrecpp0 libssl-dev zlib1g-dev
    
    cd ~/sources/
    wget http://sysoev.ru/nginx/nginx-0.6.32.tar.gz
    tar -zxvf nginx-0.6.32.tar.gz
    cd nginx-0.6.32/
    ./configure --sbin-path=/usr/local/sbin --with-http_ssl_module
    make 
    sudo make install

    don't need to setup autostart, starts automatically with new version

    now..

    sudo /etc/init.d/nginx start
    sudo /etc/init.d/nginx stop
    sudo /etc/init.d/nginx restart

##### php

    sudo aptitude install php5-cli php5-cgi

* [more](http://www.johnyerhot.com/2008/02/12/how-to-nginx-fcgi-php-mysql-ruby-on-rails-rewrite-vhosts/)

##### extras

    sudo monit fail2ban

    sudo aptitude -t etch-backports install puppet facter

don't need logrotate, already installed

    sudo aptitude install logrotate
    sudo aptitude search php

##### network configuration

* [debian network administration](http://www.debian-administration.org/articles/254)

current network configuration

    netstat -nr

or

    route
    ifconfig

nameservers....

    sudo nano /etc/resolv.conf

    nameserver 192.168.1.1

network...

    sudo nano /etc/network/interfaces

was...

    # This file describes the network interfaces available on your system
    # and how to activate them. For more information, see interfaces(5).
    # The loopback network interface
    auto lo
    iface lo inet loopback
    pre-up iptables-restore < /etc/iptables.up.rules
    
    # The primary network interface
    allow-hotplug eth0
    iface eth0 inet static
        address 192.168.1.5 #machine's static ip
        netmask 255.255.255.0
        network 192.168.1.0
        broadcast 192.168.1.255
        gateway 192.168.1.1
        # dns-* options are implemented by the resolvconf package, if installed
        dns-nameservers 192.168.1.1
        dns-search localhost

* [more](http://wiki.debian.org/NetworkConfiguration)
