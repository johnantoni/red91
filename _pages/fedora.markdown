---
layout: page
title: Notes: Fedora
---

# Setup Fedora Linux

##### Initial Stuff

    sudo yum -y install gedit-plugins git-core preload
    sudo yum -y install mysql mysql-devel gcc gcc-c++ vlc gftp

##### PHP

    sudo yum -y install httpd php php-mysql

Test by creating a file called **test.php** containing:

    <?php phpinfo(); ?> 

##### NGINX

    sudo yum -y install nginx

    sudo yum update nginx  (update installed package)

# - - extras - -

##### Fail2Ban

    sudo yum -y install Fail2ban

* [Fail2ban Implementation](http://debaday.debian.net/2007/04/29/fail2ban-an-enemy-of-script-kiddies/)

##### KeyGens

    mkdir .ssh
    cd .ssh
    ssh-keygen -f strong

##### Restore from StrongSpace

    sudo mkdir /var/www/apps
    sudo rsync -azvCL --progress -e "ssh -i /home/smith/.ssh/strong" smith@smith.strongspace.com:/home/smith/apps/ /var/www/apps/

##### Wine + IE6 (if needed)

    sudo yum -y install wine*
    sudo yum -y install cabextract

    wget http://www.tatanka.com.br/ies4linux/downloads/ies4linux-latest.tar.gz
    tar zxvf ies4linux-latest.tar.gz
    cd ies4linux-*
    su root
    sudo ./ies4linux

##### Network

configure network

    sudo system-config-network

start network

    sudo /etc/init.d/network start

more [info](http://thefinalzone.blogspot.com/2008/05/no-network-on-fedora-9-x8664.html)

more [setups](http://forums.fedoraforum.org/showthread.php?t=94257)
