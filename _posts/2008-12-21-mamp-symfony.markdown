---
layout: post
title: MAMP and Symfony
category: php
---

![IronMan](http://farm3.static.flickr.com/2352/1533243975_e65efd4b8d.jpg)

Playing around with the Symfony framework for an interesting idea I have, sort of a Google Maps mashup.

Anyway, on OSX Leopard I'm using MAMP to handle the lamp environment and so need to supplement it's support with Symfony; which isn't too big a challenge to add.

##### Install MAMP on Leopard

First off download MAMP free [here](http://www.mamp.info/en/download.html) it's a 130mb download so you'll have to wait a while on a slow connection (we've got fibre so it's super quick).  Once downloaded open & drag the MAMP folder into your Applications directory.

Next run up the MAMP application from within your /Applications/MAMP dir, this should give you MySQL running with these settings,

    ...location
    Host: localhost
    [Port: 8889]
    User: root
    Password: root
    
    ...via php
    $link = mysql_connect('localhost', 'root', 'root');
    
    ...via sockets
    Socket: /Applications/MAMP/tmp/mysql/mysql.sock
    User: root
    Password: root
    
    ...via php + sockets
    $link = mysql_connect(':/Applications/MAMP/tmp/mysql/mysql.sock', 'root', 'root');


##### Add to PATH

Next using Terminal, add your PHP directory to your path by adding it to your **.bash_profile** file (need to reopen Terminal to read the new variable)

    mate .bash_profile

Add this to the end of the file & save it,

    export PATH=$PATH:/Applications/MAMP/bin/php5/bin

Check you've got PHP5 up and running by typing this at the Terminal, you should see PHP 5.2,

    php -v

##### Install Symfony

Run these commands thru Terminal to install the Symfony framework into your PHP install,

    /Applications/MAMP/bin/php5/bin/peardev channel-discover pear.symfony-project.com
    /Applications/MAMP/bin/php5/bin/peardev install symfony/symfony

Now check you've got Symfony installed by typing this into the Terminal,

    symfony -V

Next grab the Sandbox application to start with via [here](http://www.symfony-project.org/get/sf_sandbox.tgz) and extract it into the default root dir of your PHP install; being MAMP this will be:

    /Applications/MAMP/htdocs

Afterwhich via your web browser you should be able to test the sandbox app at:

    http://localhost:8888/sf_sandbox/web/frontend_dev.php/

##### Create your First Project

The Symfony framework provides an excellent starter for your application, with the data, app code, cache and logs all stored within a design much like Rails and it's MVC pattern so you can get up & running fast.

So to create your application do,

    mkdir ~/myproject
    cd ~/myproject
    symfony init-project myproject

Note the **symfony** command must be run within the directory you want your app put together so create a directory for it first, move into it then run the line above.

And within MAMP,

    mkdir /Applications/MAMP/htdocs/myproject
    cd /Applications/MAMP/htdocs/myproject
    symfony init-project myproject

##### Add your Application

Now you won't able to see anything until you've created your first app within **myproject** via,

    symfony init-app myapp

This will create some files to get you up & started along with a simple **index.php** file within the /web dir to show things went ok,

    http://localhost:8888/myproject/web/index.php

You'll probably get a message saying it can't find your application's web/sf directory for the images, as you've already got the sandbox app installed, copy it from there.

    cp -R /Applications/MAMP/htdocs/sf_sandbox/web/sf /Applications/MAMP/htdocs/myproject/web/sf

Or from your original PEAR install,

    cp -R /Applications/MAMP/bin/php5/lib/php/data/symfony/web/sf /Applications/MAMP/htdocs/myproject/web/sf

Your project should be much happier now.

Obviously you shouldn't be sticking your projects entire framework inside your /htdocs directory for production as it'll make the whole thing visible to the outside world but for this simple example it'll do for now.

But if you really want to you can edit your Apache's document root directory via the Apache config file:

    mate /Applications/MAMP/conf/apache/httpd.conf

And change,

    DocumentRoot "/Applications/MAMP/htdocs"
    ...to
    DocumentRoot "/Applications/MAMP/htdocs/myproject/web"

Simple for now but you can expand on it later with virtual server configs and the like later.

More on this via Symfony's official documentation [here](http://www.symfony-project.org/book/1_0/03-Running-Symfony)

##### MATE ?

...please note i've got TextMate installed along with the path integration so I can access it via Terminal with **mate** so if you don't have TextMate, substitute **mate** for **nano** or **vi** if you're old-school ;-)
