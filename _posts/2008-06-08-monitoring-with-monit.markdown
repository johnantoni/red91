---
layout: post
title: Keeping track of resources with Monit
category: linux
---

Another handy tool i've grown to like is Monit, which makes keeping tabs on memory-hungry processes much easier.  

Basically once configured it helps keep an eye on particular process (e.g PostFix, PostGreSQL, Apache or your disk space).  If one is starting to use too much memory, your running low on disk space or it's just no longer responding it can automatically restart it for you and alert you in the process; making system administration that little bit easier.

#### Installing

Install with Aptitude using,

    sudo aptitude install Monit

After which it will tell you it's won't start until it's been configured,

    Starting daemon monitor: -e monit won't be started/stopped
      unless it it's configured
      -e  please configure monit and then edit /etc/default/monit
      -e  and set the "startup" variable to 1 in order to allow
      -e  monit to start

#### Configuring

First make a backup copy of it's initial config, in case you need to rollback:

    sudo cp /etc/monit/monitrc /etc/monit/monitrc.orig

Now edit it with:

    sudo nano /etc/monit/monitrc

* uncomment **set daemon 120**, so monit will run every two minutes.
* uncomment **set alert** and enter the email address you want to use for email alerts.
* uncomment **include /etc/monit.d/*** so it will read in all config files within that directory.
* save and create the monit.d directory,

    sudo mkdir /etc/monit.d

By using a wildcard for that last config change you can build up separate .monitrc files for each service you want to monitor, making future modifications easier.

For example, monitor disk usage using:

    sudo nano /etc/monit.d/system.monitrc

    check system mysite.com
      if loadavg (1min) > 4 then alert
      if loadavg (5min) > 2 then alert
      if memory usage > 85% then alert

    check device rootfs with path /dev/sda1
      if space usage > 85% then alert

#### Starting

After making your changes, check the syntax you used is correct with,

    sudo monit -t

...if you uncommented the last line **include /etc/monit.d/*** and you've got no config files in there you'll get an error stating it can't find any config files there.  don't worry too much about that, no need running it if you haven't got anything for it to do.

Now edit,

    sudo nano /etc/default/monit

And change **startup=0** to 1 to enable it, save the file and run,

    sudo /etc/init.d/monit start

To start the service, stop it with,

    sudo /etc/init.d/monit stop


...based partly on an example from [Monit for Peace of Mind](http://www.mslater.com/2007/4/11/installing-monit-for-server-peace-of-mind) & [Monitoring Ubuntu Services with Monit](http://www.ubuntugeek.com/monitoring-ubuntu-services-using-monit.html).  More info at the official [Monit](http://www.tildeslash.com/monit/) site.

Plus a good example pastie here,

* [http://pastie.org/13355](http://pastie.org/13355)
