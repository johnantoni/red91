---
layout: post
title: What's working on Ruby 1.9
category: ruby
---

Nice site to track gem compatibility with Ruby 1.9

* [isitruby19](http://isitruby19.com/)

Was trying to get **sqlite3-ruby** working but kept failing with...

    *** No rule to make target `ruby.h', needed by `sqlite3_api_wrap.o'. Stop.

All I needed was;

    sudo aptitude install libsqlite3-dev

On Debian and it was fine again.

    sudo gem install sqlite3-ruby

& gem dependent

    config.gem 'sqlite3-ruby', :lib => 'sqlite3'

So far got most of the usual gems working on Ruby 1.9, rebuilt my linux setup after I got XP installed.  Shrunk down the partition with **ntfstools** & **ntfsresize**, then put in Ubuntu 8.10 on the remaining 10GB of my SSD drive.

Gems which work,

    actionmailer (2.3.2)
    actionpack (2.3.2)
    activerecord (2.3.2)
    activeresource (2.3.2)
    activesupport (2.3.2)
    builder (2.1.2)
    cgi_multipart_eof_fix (2.5.0)
    cucumber (0.3.0)
    daemons (1.0.10)
    diff-lcs (1.1.2)
    eventmachine (0.12.6)
    fastthread (1.0.7)
    gem_plugin (0.2.3)
    libxml-ruby (1.1.3)
    mislav-will_paginate (2.3.8)
    nokogiri (1.2.3)
    polyglot (0.2.5)
    rack (0.9.1)
    rails (2.3.2)
    rake (0.8.4)
    rspec (1.2.4)
    rspec-rails (1.2.4)
    rubygems-update (1.3.2)
    sinatra (0.9.1.1)
    sqlite3-ruby (1.2.4)
    term-ansicolor (1.0.3)
    test-unit (2.0.2)
    thin (1.0.0)
    treetop (1.2.5)
    webrat (0.4.4)

Got problems with **pony** againt **tmailer** but it's not that big a worry.  **Cucumber** on XP wasn't good, workable but not as good as the real thing on Linux (hence the partitions), for some reason the console filter just didn't like the letter 'a' ;-)

##### MySQL gem

Found a working **mysql** gem [here](http://github.com/hectoregm/mysql-ruby/tree/master) 

    gem sources -a http://gems.github.com
    sudo gem install hectoregm-mysql-ruby
    
    require 'mysql'
    => true

The current one's got a lot of problems on Linux

...keep you posted if I find anything else broken
