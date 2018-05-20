------------------------------------------------------------------------

layout: post\
title: Keeping things backed up\
category: linux\
----

![](http://farm2.static.flickr.com/1109/526067184_67eba075ff.jpg)

One thing you can never plan too well is the eventual loss of data from
your primary machine, aka your laptop.

#### Via Terminal

So realising events from the past I cobbled together some RSYNC commands
to backup my laptop's most important files over to Strongspace.

To use them, you'll need to create a **.ssh** directory in your
strongspace account (use an SFTP program to do this) and create a .pub
public key file and put it on your remote server (strongspace) to upload
to it.

Create a key by running,

> ssh-keygen -t dsa

This will create a **id\_dsa.pub** file, upload this to your strongspace
.ssh/ directory and rename it as **authorized\_keys** without the
extension.

Once done you'll be able to run these thru to your remote storage center
in the terminal window seamlessly (more so if you don't set a password
for your key files).

For now though, here's the code, replace 'joe' with your strongspace
username

> rsync -azvCL ---exclude=.DS\_Store ---progress \~/strongspace/
> joe\@joe.strongspace.com:/home/joe/strongspace/

> rsync -azvCL ---exclude=.DS\_Store ---progress \~/ruby/
> joe\@joe.strongspace.com:/home/joe/ruby/

(note the --- is really two minus signs together so don't let the css
fool you into thinking its one -)

How it works is that in my user root dir I have two directories, one
called strongspace containing all my documents and one called ruby
containing all my ruby projects.

Be aware that any files you delete on your laptop won't be deleted on
the remote site so things might get messy on the remote after a while,
but at least you won't lose anything.

#### Via AppleScript

You can even automate this with AppleScript,

> tell application "Terminal"<br />\
> do script "...commands..."<br />\
> do script "exit"<br />\
> end tell

save your text file with the .script extension to tell osx to treat it
as an AppleScript file.

Enjoy!
