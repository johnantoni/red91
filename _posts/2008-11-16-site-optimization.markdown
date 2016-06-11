---
layout: post
title: Optimizing Performance Notes
category: tutorial
---

![GoodWood Revivial](http://farm4.static.flickr.com/3139/2932554962_dfeb513be7.jpg)

Two weeks ago I visited a conference on website performance at the SUN UK offices, quite an eye opener; here's a bit of what I learnt.

### Sharding

When you're site's performance is lacking the usual idea is to upgrade the hardware and buy bigger and more powerful servers, better hardware, etc.  However another approach is to use a technique called **Sharding**.

Basically you analyze the users pulling the biggest load off your database and separate them into shards so rather than User A hitting the main server, they hit a shard of that data server, same goes with User B; in essence you separate the people requesting the most out to individual boxes rather than the main one.  Employ an army of cheap Linux boxes to create this modified farm and balance the data requests strategically out so they're evenly hit.

It's a federated model, groups of users are stored together in boxes of shards.

So if one box goes down, the others still operate.  The work is shared out among your virtual server farm, you get more write performance and you reduce the bottleneck, but you also work out where you're main draw is an share that out so one guy isn't left doing all the work.

There are some disadvantages in going this way but it's a good start in solving a potential problem as your site grows.

### Load Balancing

You can also employ Linux's Native Kernel Load Balancer to help (Google this), plus there are two packages available for the O/S to help in this area:

* [Balance](http://www.linux.com/feature/46735)
* [Crossroads](http://linux.softpedia.com/get/System/Networking/Crossroads-Load-Balancer-4736.shtml)

### Clustering

Clustering may also be a good thing to look at, which is like sharding but simpler in that you build a farm of servers and load balance the users across them.  So the first user hits box 1, then the next user hits box 2, and so on; once each box has a user you go back to box 1 and add a user, and so on balancing the load out.

### CDN

Content Delivery Network, if you've got enough money in the budget then you might be able to employ a company like Akamai or BitGravity to help you out with serving your videos and media to the customers rather than your boxes taking the brunt of this less complex work.

* [Akamai](http://www.akamai.com/)
* [BitGravity](http://www.bitgravity.com/)
* [Limelight Networks](http://www.limelightnetworks.com/)
* [Amazon CloudFront](http://aws.amazon.com/cloudfront/)

The last one is a new service Amazon are offering, currently in beta; but be warned none of these services are cheap if you've got a big hit count.

### General Stuff

You could also try to make friends with your hoster, who knows you might get along well and they might even want to take an interest in what your doing; helping out along the way with extra bandwidth or advice.

Pick your quick-wins and operate on those first, if you can get the performance up with a couple of hours focusing on the rough edges of your site; that'll give you breathing room to focus on the core before things get difficult. 

Latency kills **FaceBook** apps, the majority of their users are US-based and thus it helps having a box in their country so the network doesn't have to trek across the oceans to grab your data.  Think of all those Doom DeathMatch's you played as a kid; when the server was closer to home it really helped in getting that high score.

Master-Slave relationships are simple to implement and maintain, Multi-Master is a headache.

SATA drives are bad for random-writes, SAS (Serial SCSI) discs are much more suited to this; grab some 2.5" 15k ones.

Make sure you've set an Expires header to your served data, this makes it cache-able reducing the time it takes to grab your HTML, gif, jpg files from your box.  If your style-sheets don't change much you can use this to tell your client's browsers so they know not to grab a new copy each time they do a request.

Also if you've got abundant amounts of memory consider employing RAM-Disks to keep the most used apps in memory rather than constantly paging to disk.

### Tools

* [Squid Caching Proxy Server](http://www.squid-cache.org/)
* [tangasol](http://www.oracle.com/tangosol/index.html)
* [memcached](http://www.danga.com/memcached/)
* [memcachedb](http://memcachedb.org/)
* [ajp proxy plugin for apache](http://en.wikipedia.org/wiki/Apache_JServ_Protocol)
