------------------------------------------------------------------------

layout: post\
title: Mongrel keeps stale PIDs\
category: ruby\
----

>  !!! PID file log/mongrel.8000.pid already exists. Mongrel could be
> running already. Check your log/mongrel.log for errors.

Sometimes things just don't want to work acording to plan, the message
above is basically saying that the mongrel rails server is being lazy
and not cleaning up after re-booting itself.

Some things just love to play with your sanity,

To fix this, I hunted the web and found an appropriate patch, hope it
works for you if you run into this,

[RimuHosting Guide (see
bottom)](http://bliki.rimuhosting.com/space/knowledgebase/linux/miscapplications/ruby+on+rails)

[Mongrel Patch from
TextSnippets](http://textsnippets.com/posts/show/931)

#### Basic Maintenance

to see your currently running processes type,

> ps -aux

you can kill any of them by using their process id's and the kill
command

> kill 11

to backup your database type,

> mysqldump -u root mydb \> dump.sql

to reboot your server

> shutdown -r now

also there's a much nicer in-line text editor than VI, called nano...

> nano \[file\]

Till next time,

John.
