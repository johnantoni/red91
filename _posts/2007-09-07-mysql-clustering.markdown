---
layout: post
title: MySQL Clustering
category: database
---

Clustering in effect provides a very high-level of availability and performance to your application.

In layman's terms it involves setting up a series of nodes within the data warehouse, with each one containing a live concurrent copy of the same data.  In the event of failure of the primary node, the connection is automatically routed to the secondary node (which then becomes the primary), once the original node is available again connection shifts back to the first node.  Thus keeping your application online and available with very little downtime (at most 5 minutes).

Not just a component of MySQL, this can also be found in SQL 2005 and Oracle 10 it allows you to keep your system up and performance balanced across your data network; and moving these nodes to different locations / buildings allows greater redundancy in the event of major physical damage (e.g. a nuclear strike).

Worth the effort if your keen about keeping your job, here's some links to get you started...

*Guides*

* "Wiki: MySql Cluster":http://en.wikipedia.org/wiki/MySQL_Cluster

* "MySQl AB: Official Info":http://www.mysql.com/products/database/cluster/

* "Alex Davies How-To":http://www.davz.net/static/howto/mysqlcluster

*Videos*

* "Google MySQL Cluster Talk":http://video.google.com/videoplay?docid=-4567104036778249401&q=mysql+cluster&total=4&start=0&num=10&so=0&type=search&plindex=0

* "MySQL Cluster in 5 Minutes":http://video.google.com/videoplay?docid=2808850060334342350&q=mysql+cluster&total=4&start=0&num=10&so=0&type=search&plindex=1

* "MySQL Performace Tuning":http://video.google.com/videoplay?docid=2524524540025172110&hl=en

