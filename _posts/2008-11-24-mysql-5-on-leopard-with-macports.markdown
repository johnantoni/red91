---
layout: post
title: MySQL 5 on Leopard with MacPorts
category: database
---

##### Setup Notes

Install MySQL5 via MacPorts

    sudo port clean mysql5
    sudo port install mysql5 +server

If you've already got an existing installation via macports use this to remove it (it'll give you a list of specific versions installed, use that name)

    sudo port uninstall mysql5

After it's installed and activated, run this to add MySQL to your Daemons list so it'll auto-start on bootup

    sudo launchctl load -w /Library/LaunchDaemons/org.darwinports.mysql5.plist

Now build the user tables

    sudo mysql_install_db5 --user=mysql

Next move the MySQL config file so other services can find it easier,

    sudo mv /opt/local/share/mysql5/mysql/my-medium.cnf /opt/local/etc/mysql5/my.cnf

Now open it in NANO so we can set specifically which port, etc, it runs with (so you're other programs can access it)

    sudo nano /opt/local/etc/mysql5/my.cnf

Add this to the start of your MySQL config,

This'll be the start of your initial config file...

    #password       = your_password
    port            = 3306
    socket          = /opt/local/var/run/mysql5/mysqld.sock
    
    # Here follows entries for some specific programs
    
    # The MySQL server
    [mysqld]
    port            = 3306
    socket          = /opt/local/var/run/mysql5/mysqld.sock

Edit it to be similar to this...

    [mysqld_safe]
    socket          = /tmp/mysql.sock
    
    # The following options will be passed to all MySQL clients
    [client]
    #password       = your_password
    port            = 3306
    socket          = /tmp/mysql.sock
    
    # Here follows entries for some specific programs
    
    # The MySQL server
    [mysqld]
    port            = 3306
    socket          = /tmp/mysql.sock

Save & Close the file (CTRL+X choose Y and Enter)

Now re-start MySQL

Setup MySQL 5

    sudo /opt/local/lib/mysql5/bin/mysql_install_db --user=mysql


To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

sudo chown -R mysql /opt/local/var/db/mysql5

Set Password

/opt/local/lib/mysql5/bin/mysqladmin -u root password 'password'
/opt/local/lib/mysql5/bin/mysqladmin -u root -h john-griffithss-macbook.local password 'password'

Start MySQL5

    cd /opt/local ; /opt/local/lib/mysql5/bin/mysqld_safe &

Test Daemon

    cd mysql-test ; perl mysql-test-run.pl
