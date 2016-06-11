---
layout: post
title: Puppet Setup
category: linux
---

*'Put simply, [Puppet](http://reductivelabs.com/trac/puppet/) is a system for automating system administration tasks'*

#### Install

Depends on Ruby (at least 1.8.2), install with:

**Client:**

    sudo aptitude install puppet facter

**Server:**

    sudo aptitude install facter puppet puppetmaster

* [Puppet on Ubuntu](http://www.howtoforge.com/installing_puppet_on_ubuntu)
* [Simplest Puppet Install Recipe](http://reductivelabs.com/trac/puppet/wiki/SimplestPuppetInstallRecipe)

#### A Simple Manifest: Managing Ownership of a File

##### Step one: Create /etc/puppet/manifests/classes/sudo.pp

    sudo nano /etc/puppet/manifests/classes/sudo.pp

    class sudo {
        file { "/etc/sudoers":
            owner => "root",
            group => "root",
            mode  => 440,
        }
    }

##### Step two: Create /etc/puppet/manifests/site.pp

    sudo nano /etc/puppet/manifests/site.pp

    import "classes/*"
    
    node default {
        include sudo
    }

##### Step three: Start the Puppetmaster

    master % sudo puppetmasterd --mkusers

    master % sudo /etc/init.d/puppetmaster restart  (for ubuntu / debian)

##### Step four: Run a client

    client% sudo puppetd --verbose

    master% sudo puppetca --list

    master% sudo puppetca --sign <client>

