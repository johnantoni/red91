---
layout: post
title: Installing MySQL on Leopard
category: database
---

![Yorkshire Sunset](http://farm3.static.flickr.com/2015/2048813240_75a01fb919.jpg)

Bit complex, but here's how...

#### Downloads

* download the x86 package from [link](http://dev.mysql.com/downloads/)

* grab CocoaMySQL to act as the GUI [link](http://cocoamysql.sourceforge.net/)

#### Terminal Work

Now the hard bit...

Open the mysql .dmg and install & run the mysql package (the startup one won't work, or the preference pane addon, so skip those).

So far you can only startup MySQL from the Terminal, so open a Terminal window...

    sudo /usr/local/mysql/bin/safe_mysqld

Now open another Terminal window and do...

    sudo mkdir /var/mysql/

Creating a symbolic link to your ports file, by running...

    sudo ln -s /tmp/mysql.sock /var/mysql/mysql.sock

All done...

#### Start with...

Now you can start MySQL by running...

    sudo /usr/local/mysql/bin/safe_mysqld

When you need to,

#### CocoaMySQL Settings

When opening CocoaMySQL, specify your settings as...

    host = localhost
    user = root
    password = blank

#### Funky Autostarts with Launchctl

To handle Startup jobs, like cron, OSX and Leopard come with a new tool called Lauchctl which makes setting up startup tasks better.

First off you'll need this config file...

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
    	<key>KeepAlive</key>
    	<true/>
    	<key>Label</key>
    	<string>com.mysql.mysqld</string>
    	<key>Program</key>
    	<string>/usr/local/mysql/bin/mysqld_safe</string>
    	<key>RunAtLoad</key>
    	<true/>
    </dict>
    </plist>

Save this into a text file, but give it the name & extension...

    com.mysql.mysqld.plist

Now drag / copy it into your HardDrive's /Library/LaunchDaemons folder

Now you need to set it's owner as root, so in Terminal run...

    sudo chown root /Library/LaunchDaemons/com.mysql.mysqld.plist

Now make it autoload by running...

    sudo launchctl load /Library/LaunchDaemons/com.mysql.mysqld.plist

Job done, next time you boot your MacBook running Leopard it'll autostart MySQL Server.

Thanks to...

* [TomatoCheese](http://blog.tomatocheese.com/archives/2007/11/1/migrating_mysql_to_mac_os_x_leopard/)
* [DevelopingChris](http://www.developingchris.com/2007/10/26/mysql-and-os-x-105-leopard/)

