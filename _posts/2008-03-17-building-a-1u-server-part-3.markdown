---
layout: post
title: Building a 1U Server, Part 3
category: tutorial
---

![server](http://farm4.static.flickr.com/3033/2345674430_6f0e3a6c87.jpg)

#### System Config

While the final bits arrive for my new server project I might as well put pen to paper on how the server's O/S will be laid out.

The operating system I'm rooting for this time around will be Linux, purely for the flexibility and the stability; the hardware I'll have to run thru it's paces with a CPU testing tool to make sure i've not got a faulty chip along with some brute-force testing on the memory chips, it's going in co-location so I might as well do it as I don't want to drive down to the site everytime it falls over.

I'll be using SSH obviously to connect to it along with a strong keychain to make my logging in easier and the connection encrypted.

I've got a strong **iptables** config so will put that into play with a custom port for SSH, not the usual port 22 which is standard; the more things you put in the way of potential hackers the better.

And no, I won't be logging in as **root**, only if I absolutely have to.

#### System Layout

This is the tricky bit, working out how you're going to lay the system out and run the various services; there really isn't any **good** answer, no one solution will fit everything.

For me I've decided to use XEN virtualisation to segregate my services out so each one remains separate, not all my eggs in one basket.

So I plan to use [XEN](http://www.cl.cam.ac.uk/research/srg/netos/xen/) and [ArchLinux](http://www.archlinux.org/) to handle each server stack, e.g.

* **Database Server** (MySQL / PostGreSql / Sqlite)
* **PHP Server** (Lighttpd + PHP5)
* **Rails Server** (Nginx, Thin, Ruby on Rails 2.0)
* **Caching Server** (Memcache, or some kind of custom Content Delivery Network)

I haven't nailed down the particular distro of Linux for the core o/s but will be using ArchLinux to handle the 'baby' boxes, the controlling 'big-daddy' may either be Fedora or again ArchLinux.

Now this may sound like overkill, but it does make sense, as it'll allows me to custom-build each Server based on it's proposed use and with ArchLinux I can make sure no extra baggage is added with unneccesary features and services; tuning it to the maximum performance.

It also allows me to do image backups in the future of each server so I can take snapshots of each one, in case I need to restore any at a certain point in time (say a bad update).

#### ArchLinux?

I've grown to enjoy ArchLinux, mainly for it's neatness and light feature stack, but also because it has no set release number.  Unlike other distro's there is no frozen release 7 or 8, you go with the latest core files and that's what you've got; taking the pressure out of always being on-top. 

Also the package manager is a little more powerful and because you only install what you need you don't end up with tons of extra software you never even use.  Rolling in at a 160mb ISO build compared to 4.4GB for your average Ubuntu or Fedora you know you're only getting the bare-bones.

*As Judd Vinet, the founder of the Arch Linux project said: "It (Arch Linux) is what you make it."*

Don't get me wrong, I'm not trying to bash any of the other distro's but as you can imagine with this particular project I have to keep things lean so I can maximise power and alleviate future problems when trying to identify awol services.

#### Final Notes

It's going to be a lot of work and probably a pain in the rear to put together but I've done this long enough with SliceHost and Virtual Hosting so I think I've cut my teeth long enough to do this for real.

Keep you posted how the build goes.
