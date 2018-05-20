------------------------------------------------------------------------

layout: post\
title: Multiple Ruby Apps on the Same Box\
category: ruby\
----

So you've deployed your first app to your nice lil' Linux box via
Capistrano, wahey!!

Now presuming you don't really want to dedicate each server to one app
alone, how would you get more than one app on there?

Here's how,

#### Apache 2 .Conf

remote onto your server and edit the apache2 .conf file

**/usr/local/apache2/conf/httpd.conf**

-   look for a line saying ServerName
-   append the server's IP address to the end of this
-   un-comment it

now when you try restarting apache remotely it'll know where it is.

next check down the bottom of the file for:

-   Listen 80
-   Include conf/apps/
-   NameVirtualHost \* :80

this tells Apache which port to listen to for incoming http requests and
to load the config files in the conf/apps/ dir on startup.

#### Editing your Apps Deploy.rb

Now before you deploy your second app to the new server you must make
sure it'll use a different proxy port. Now by default your first app'l
have used 8000 and 8001 so the obvious choice is to use 9000 and 9001.

So, navigate to your second ruby apps /config/ dir and edit it's
deploy.rb file

**secondapp/config/deploy.rb**

-   first off, you can copy & paste bits from your first apps deploy.rb
    to make your second, just remember to change the svn repository
    location to default (as you'll make your own) and change your apps
    name.
-   look for =\> set :apache\_proxy\_port, 8000 and change it to 9000

#### deploy your 2nd app

in your second apps dir using the capistrano + deprec gems,

-   cap deprec\_setup
-   cap setup\_scm \<= this'll give you a new svn location for your app,
    add it to your deploy.rb file
-   cap deploy\_with\_migrations
-   cap restart\_apache

afterwards you should have 2 ruby apps running on the same server!

#### If you get problems...

Now life isn't perfect so chances are you're gonna run into problems, so
here's some common commands and gotcha's to help you,

Mongrel Complains .PID files already exist!

-   ...ssh in and goto /var/www/apps/secondapp/current/tmp/ and run: rm
    \*.pid

How Do I Re-Start Mongrel?

-   ...navigate to app root & run: cap restart\_mongrel\_cluster

Second App keeps pointing to first, ARGH!!!

-   ...ssh in and goto /usr/local/apache2/conf/apps/
-   ...run: nano secondapp.conf
-   ...make sure \<VirtualHost \*:80\> and it's balancemember is using
    9000 and 9001

Restart Server?

-   ...ssh in and run shutdown -r now

Restart Mongrel + Apache?

-   ...navigate to first app and run: cap restart\_mongrel\_cluster
-   ...goto second app my run: cap restart\_mongrel\_cluster
-   ...run: cap restart\_apache

If you still get problems drop me a line and i'll try to help,

Best of luck,

John.
