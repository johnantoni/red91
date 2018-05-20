------------------------------------------------------------------------

layout: post\
title: Taking Server Snapshots\
category: linux\
----

One of the major major problems with hardware is it's really good way of
messing up your day when it fails, doubly so for a hard-drive failure.

#### Michelle's laptop goes bye bye...

Last night my fiance's laptop finally bit the dust, along with her
removable drive, god I felt bad!. Thankfully I'd backed up most of her
files to my StrongSpace account but that still didn't kill the problem
of what we'd lost. Eugh, what a horrible feeling, but you live and you
learn.

The sudden need to get her a new laptop and me to build a development
server for my Rails work prompted me to think how'd I backup my box in
event of total failure.

#### SVN Rocks!

The obvious one is to keep it all under SubVersion and check-out changes
to a remote store, which I thankfully do with my MacBook easily (SVN you
rock!).

#### Linux Disk Imaging

But what about when you've setup your server perfectly and the idea of
reinstalling everything just doesn't make commercial sense?

Well then you schedule Snapshot Images for the box. Basically a snapshot
is exactly that, a photocopy of everything on the target at a specific
point in time; much like SQL 2005's backup methods. You can schedule the
system to take copies of it's main drive and then copy those over to
another drive, even burn that to disc, so in the event it all goes down,
you can simply restore from the image and in no time at all your up and
running again.

Thankfully my two SliceHost server's have this built-in, they schedule
Daily, Weekly and one when-i-want-it copy.

Done a little bit of research and turned up two good Linux Imaging tools
for your own setup,

-   [Mondo Rescue](http://www.mondorescue.org/)

<!-- -->

-   [Part Image](http://www.partimage.org/Main_Page)

When I've got my development box built i'm gonna try Mondo Rescue first,
sounds like a more mature product.

Will let you know how things go,

#### More Tech Forums

-   [Nabble Forum](http://www.nabble.com/)
