---
layout: post
title: Automation with CRONTAB
category: linux
---

One of the beauty's of Linux is that it provides you with a really decent task automater called Cron, and today's little article will put you thru the paces of getting your server to run a script on restart (very worthwhile for 24/7 functionality).

#### Quick and Dirty

First log into your box via SSH.

Now type:

    sudo crontab -e

...this will get you into Cron's task script, from here you can add tasks for various things, do this on startup, do this every friday, every 2 hours, tons of options.

To exit hit *CTRL + X* which will give you the option of saving your changes if you made any.

Now the juicy bit,

* Navigate to your root dir by typing *cd /home*
* Type *nano start_script.sh*
* Now your in Nano, the easier linux text editor type...

    /var/www/apps/[appdir]/current/mongrel_rails start -e production -p 8000 -d

..assuming port 8000 is the one your using for your rails app, the -d option tells rails to run mongrel in the background; and replacing [appdir] with the directory of your rails app.

Save your file & exit nano with *CTRL + X*

Now type *crontab -e* to get back into your cron jobs and type...

    @reboot (sh /home/deploy/start_script.sh)

...the *@reboot* is a magic keyword that tells linux/cron to run this command at every system startup, *sh* is the linux script runner.

Save & exit crontab with *CTRL + X* and your away.

Next time you reboot your server your mongrel server will fire up immediately.

#### More Professional

Now this is by no means a perfect solution, as your firing mini-mongrel instances which your Capistrano cluster jobs won't be able to access, so chances are you'll end up with cached versions of your web sites.

Now to do this more gracefully and using your Capistrano .YML configurations with Mongrel Clusters; do this.

ssh onto your box as the user deploy...

    ssh deploy@mybox.com
    nano start_script.sh

Add this...

    sudo mongrel_rails cluster::restart -C /etc/mongrel_cluster/[yourapp].yml

Replacing [yourapp] with the name of your Mongrel Cluster's config .YML file.

Now when this script it run it'll restart the Clusters exactly to your liking and your CAP DEPLOY actions will work correctly.

Run a script like,

    sh start_script.sh

Beauty!

#### Nightly & On-Reboot Jobs (without mail alerts)

To set something in crontab to run at midnight every day do...

    0 0 * * * (my command) > /dev/null 2>&1

E.g.

    0 0 * * * (sh /home/deploy/backup.sh) > /dev/null 2>&1

Or on reboot

    @reboot (sh /home/deploy/start_script.sh) > /dev/null 2>&1

The **> /dev/null 2>&1**, by default whenever CRON fires an automated task it sends off an email, by adding this to the end of your commands that email will go to trash and never get sent.
