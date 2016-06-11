---
layout: post
title: MySQL and Apache Tuning
category: database
---

Thanks to [PickledOnion](http://articles.slicehost.com/2007/11/23/ubuntu-gutsy-mysql-and-ror) and SliceHost for posting this on their tutorials site, here's a quick example to improve your MySQL speed.

#### Tuning your Install

Remote onto your box via SSH, and...

    sudo nano /etc/mysql/my.cnf

Go down till you see a section for the **[mysqld]** settings, then add...

    default-storage-engine = MyISAM

This will set MySQL to use the MyISAM storage engine (lighter than InnoDB) for all newly created databases.

Now look for anything called...

    #skip-innodb

delete the # to make skip loading the InnoDB engine, if you're not using it, changing it to...

    skip-innodb

**NOTE:** Ubuntu Gutsy MySQL 5 uses InnoDB by default (i've found) , so if you haven't set the type and your on Ubuntu Gutsy with a database already on there; then chances are it's under InnoDB.  so skip this one for now (see bottom).

Now navigate to the **Fine Tuning** section and change the values to:

    # * Fine Tuning
    #
    key_buffer = 16K
    max_allowed_packet = 1M
    thread_stack = 64K
    thread_cache_size = 4

Add these also,

    sort_buffer = 64K
    net_buffer_length = 2K

Save the file and restart MySQL with...

    sudo /etc/init.d/mysql restart

Job done, you can run:

    top

To see your memory usage (exit with 'q')

#### Convert Tables to MyISAM

Log into your MySQL server via...

    mysql -u root

Now type,

    show databases;

Choose your database,

    use my_db;

Now see what tables are around,

    show tables;

Now you can run a command to convert your tables over to the MyISAM format,

    ALTER TABLE my_table ENGINE = MyISAM;

More here...

* [convert Typo to MyISAM](http://www.red91.com/articles/2007/12/28/convert-typo-innodb-myisam)

#### Restart MySQL

Easily done via,

    sudo /etc/init.d/mysql restart

#### And If All Fails

Now for me those settings weren't completely ideal for Typo5's performance so I switched them back to the default settings, with my other apps they were fine (think they're good for memory-starved situations).

The default settings are...

    # * Fine Tuning
    #
    key_buffer		= 16M
    max_allowed_packet	= 16M
    thread_stack		= 128K
    thread_cache_size	= 8
    #sort_buffer = 64K
    #net_buffer_length = 2K
    #max_connections        = 100
    #table_cache            = 64
    #thread_concurrency     = 10
    #
    # * Query Cache Configuration
    #
    query_cache_limit       = 1M
    query_cache_size        = 16M

##### Tuning Options from RimuHosting

    # if your are not using the innodb table manager, then just skip it to save some memory
    #skip-innodb
    innodb_buffer_pool_size = 16k
    key_buffer_size = 16k
    myisam_sort_buffer_size = 16k
    query_cache_size = 1M

Courtesy of [RimuHosting](http://rimuhosting.com/howto/memory.jsp)

### Apache Tuning

Open your Apache Config

    sudo nano /etc/apache2/apache2.conf

Suggested by [Emergent Properties](http://emergent.urbanpug.com/?p=60), this may lower the amount of memory Apache consumes,

    StartServers 1
    MinSpareServers 1
    MaxSpareServers 5
    MaxClients 5
    MaxRequestsPerChild 300

And original settings...

    StartServers 5
    MinSpareServers 5
    MaxSpareServers 10
    MaxClients 20
    MaxRequestsPerChild 0

##### Apache Finer Tuning

Best to turn off Hostname Lookups,

    HostnameLookups Off

Lower your timeouts from 300 to 45

    Timeout 45

Increase your MaxKeepAlives for High-Loads from 100 to 200

    MaxKeepAliveRequests 200

Lower your KeepAliveTimouts from 45 to 2-3

    KeepAliveTimeout 2

Source [here](http://articles.slicehost.com/2008/12/11/ubuntu-intrepid-apache-configuration-1)

##### Restart Apache

    sudo apache2ctl graceful

