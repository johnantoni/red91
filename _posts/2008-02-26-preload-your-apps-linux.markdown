---
layout: post
title: Preload your Apps
category: linux
---

A new addon I've just discovered is a package called PRELOAD which basically runs in the background learning what kind of apps you like loading (firefox, etc.) and then puts these into free memory so when you open them they'll boot up faster.

#### Installing

From the terminal, install with...

    sudo yum install preload //fedora
    sudo aptitude install preload //ubuntu, etc.

#### Monitoring

You can monitor what resources it's using by...

    sudo tail -f /var/log/preload.log

Or more specifically with...

    sudo less /var/lib/preload/preload.state

These will give you output from it's logs as to exactly what programs it's caching and how it's operating.

#### Remove?

If you don't like it and want to remove it, 

    sudo yum uninstall preload //fedora
    sudo aptitude uninstall preload //ubuntu, etc.

#### Links

More can be found at...

* [TechThrob - Preload](http://www.techthrob.com/tech/preload.php)
* [SourceForge](http://sourceforge.net/projects/preload)
* [redhat - history](https://www.redhat.com/archives/fedora-devel-list/2008-January/msg01948.html)
