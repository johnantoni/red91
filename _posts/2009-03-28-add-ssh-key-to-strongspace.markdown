---
layout: post
title: Add SSH key to Strongspace
category: linux
---

Thanks [Nick Carroll](http://ca.rroll.net/category/software/joyent/strongspace/) for posting that guide....

First generate keyfile

    ssh-keygen -d

Then copy your current authorized keyfile from Strongspace

    scp joe@joe.strongspace.com:.ssh/authorized_keys ~/

Concat / Add your keyfile to to the end of it

    cat .ssh/id_dsa.pub >> authorized_keys

And copy it back

    scp ~/authorized_keys joe@joe.strongspace.com:.ssh/authorized_keys
