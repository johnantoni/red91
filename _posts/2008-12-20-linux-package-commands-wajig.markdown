---
layout: post
title: Linux Package Commands and Wajig
category: linux
---

##### Aptitude or Apt-Get

Was asked this recently, as far as I know the only core difference is Aptitude has a better way of handling dependencies when you remove a package; cleans up better.  In all you should try to switch to Aptitude where possible, if you've installed a package with Aptitude then when you remove it via Aptitude it'll know about any dependencies it has to check for or orphaned packages.

##### Update and Upgrade

    apt-get update
    apt-get -u upgrade
    
    aptitude update
    aptitude safe-upgrade

##### Install Package

    apt-get install gedit
    aptitude install gedit

##### Remove Package (keep config files)

    apt-get remove gedit
    aptitude remove gedit

##### Remove Package Completely

    apt-get --purge remove gedit
    aptitude purge gedit

##### Upgrade Package

    apt-get install gedit
    
##### List Possible Upgrades

    apt-get upgrade gedit

##### Show Package Info

    dpkg --info gedit*.deb | less

##### List All Packages

    dpkg -l

##### Check if Package install plus Info

    dpkg -l | grep -i 'gedit'

##### List files owned by package

    dpkg -L gedit

##### List files inside Package

    dpkg --contents gedit*.deb

##### Find out who owns this Package

    dpkg -S /bin/netstat

##### Check if Package installed and it's Status

    dpkg -s gedit| grep Status

##### Show Dependencies for a Package

    apt-cache depends mysql-server

##### Wajig

Wajig is a Linux tool that combines a lot of the abilities within apt-*, aptitude and dpkg into one command.  Written in Python it handles normal users and super-user privileges & can be installed with...

    apt-get install wajig
    aptitude install wajig

More info [here](http://www.togaware.com/linux/survivor/Wajig_Overview.html)

