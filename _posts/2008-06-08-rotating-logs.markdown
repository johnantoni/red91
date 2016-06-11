---
layout: post
title: Rotating logs with Locate and Piping
category: linux
---

To manage your log files better, and to keep old ones available but compressed; Linux provides a tool called LogRotate which can be installed quickly via:

    sudo aptitude install logrotate

##### Linux: Using LOCATE

On a sidenote, you can also use the LOCATE command to find a lost file or whether it's already in the system.   LOCATE is much faster than 'FIND' as it pulls it's results off a file cache of the system which is built up over time; however if something is too new it may not find it so you'll have to resort to 'FIND' but that shouldn't happen to many times.

    locate app.conf

##### Linux: piping output

The result returned is whatever file matches the search criteria, so if there are many files on the system with the same name it will return all the matches; which you could then pipe into a file, like

    locate app.conf > finds.txt

Here, any matches returned will be piped and written into the file 'finds.txt' rather than being written to the screen.

#### Configuring LogRotate

Once installed, setup LogRotate by editing it's config file:

    sudo nano /etc/logrotate.conf

The example below will rotate 14 days worth of logs, compressing the older logfiles, and creating a new blank log writable by the web server;

    /var/www/apps/myapp/log/*.log {
      daily
      missingok
      rotate 14
      compress
      delaycompress
      notifempty
      copytruncate
      create 0666 www-data www-data
    }

Based on an example from [here](http://wiki.rubyonrails.org/rails/pages/DeploymentTips
), You'll find more info [here](http://www.telecom.otago.ac.nz/tele301/tele301hb_html/logrotate.html) too, enjoy.
