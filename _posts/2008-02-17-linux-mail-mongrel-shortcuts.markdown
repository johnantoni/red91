---
layout: post
title: Linux mail
category: linux
---

#### Software Install Commands

    sudo aptitude install postfix
    sudo aptitude install sendmail

    sudo aptitude remove postfix
    sudo aptitude remove sendmail

install telnet (not installed by default)

    sudo aptitude install telnet

#### Mail Commands

show pending mail in queue

    mailq

access mail system

    mail

pending mails stored in /var/spool

#### Sending Mail Manually with Telnet

    telnet localhost 25

    ehlo localhost
    mail from: root@localhost
    rcpt to: fmaster@localhost
    data
    Subject: hello
    some content
    .
    quit

...the dot marks the end of the email

#### SendMail Commands

    sudo /etc/init.d/sendmail start
    sudo /etc/init.d/sendmail stop
    sudo /etc/init.d/sendmail restart

config files saved in /etc/mail/config.cf

#### Mongrel Cluster Commands

    mongrel_rails cluster::start
    mongrel_rails cluster::stop
    mongrel_rails cluster::restart

#### MySQL login

login to server

    mysql -u root -p

#### Shutdown Server Gracefully

shutdown now and reboot

    shutdown -r now

#### Login as Another

    su anotheruser

#### Show Pending Jobs

    jobs

#### Mongrel Cluster Restart

    mongrel_rails cluster::restart -C /var/www/apps/[myapp]/config/mongrel_cluster.yml

replace [myapp] with your apps dir

#### CRONTAB + Mongrel - fire on restart

add above line to /home/deploy/start.sh

    crontab -e

then add...

    @reboot (sh /home/deploy/start.sh) > /dev/null 2>&1

save and should fire + restart on reboot

#### Kill Processes

find if firefox is running...

    ps aux | grep firefox

kill firefox...

    killall firefox

or specifically...

    kill 19919  <- processid

#### NGINX

    sudo /etc/init.d/nginx start
    sudo /etc/init.d/nginx stop
    sudo /etc/init.d/nginx restart
