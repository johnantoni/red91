------------------------------------------------------------------------

layout: post\
title: Upgrading Ruby\
category: ruby\
----

Previously I wrote an article on how to upgrade your copy of Ruby +
install Readline, so glad I'm rewriting it because that really sucked.

So here's a real 'i did it and it works' guide, re-done, for upgrading
your copy of Ruby on Rails from 1.8.whatever to the latest 1.8.6 on your
Ubuntu Linux box on a server slice from Slicehost.com

#### Disable your website

First off, use Capistrano to inform people your server & site is down
for maintenance, by opening a terminal window and moving into your ruby
apps dir,

> cap disable\_web

#### Remote to your server + edit sources.list

Next remote into your server by using SSH at the prompt type,

> ssh root\@mybox.com

(change mybox.com to whatever your server's hooked to)

type in your root account password and hit enter. Now at the prompt,

> cd ..<br />ls

do ls to check your in the root of your machine, you should see a usr,
etc, var, directories. now,

> cd etc/apt<br />vi sources.list

now you should be in your ubuntu sources file, showing the network
places / paths your box will go to to find the latest server updates
etc.

make sure the two lines below are un-commented (remove the \# at the
start)

> deb http://us.archive.ubuntu.com/ubuntu dapper universe<br />\
> deb-src http://us.archive.ubuntu.com/ubuntu dapper universe

hit shift+i to goto edit mode in the VI editor, edit the file and hit
esc then type :wq and hit enter to save the file. now navigate to the
root again,

> cd /

#### Upgrade your Linux Server

update your server's software repository, dictionary.

> apt-get update

and install any required server software updates

> apt-get upgrade

#### Install Ruby 1.8.6

now pull off the latest ruby sourcefiles (1.8.6), extract them to their
own directory and move into them.

> wget ftp://ftp.ruby-lang.org/pub/ruby/ruby-1.8.6.tar.gz<br />\
> tar zxvf ruby-1.8.6.tar.gz<br />\
> cd ruby-1.8.6<br />

now your in your new ruby source directory, configure the source and
make the native binary files

> ./configure<br />\
> make

now install ruby and the ruby docs

> make install

once this all finishes you should be able to kill the SSH connection by
typing

> exit

#### Check Ruby Version

then re-connect via SSH, and run,

> ruby -v

and see ruby 1-8-6 displayed, bingo, you have a new ruby build on your
server.

however, as you've built this not using apt-get you're going to have to
make sure ubuntu uses your new version and not it's old one,

to do this edit your profile file

> nano /etc/profile

and add..

> export PATH=/usr/local/sbin:/usr/local/bin:\$PATH

now when you reboot it'll take your new ruby rather than the old 1.8.4

End your SSH connection by typing,

> exit

#### Reboot your Server

Now goto slicehost.com, login to your admin console and request to
soft-reboot your slice, should take 2-3 minutes. ping it using

> ping www.mybox.com

you'll see your machine pinging the server, stall for a while (it
rebooting) and pinging again, your good to go now.

#### Re-deploy your ruby app

Go back to your terminal window and within your ruby app, run

> cap deploy\_with\_migrations

This will deploy the latest svn version of your app to the server and
more importantly reboot your mongrel server.

#### Turn your website back on

This should checkout ok, now run this below to remove the maintenance
holding-page

> cap enable-web

Hopefully things will go right and you'll have a brand new build running
on your linux box.

All the best,

John.
