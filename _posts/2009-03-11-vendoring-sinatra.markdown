---
layout: post
title: Vendoring Sinatra + Rack
category: ruby
---

Grab distributable copies of Sinatra, Rack, Pony (emailing), Builder (xml generation),

    mkdir vendor && cd vendor
    gem unpack sinatra && gem unpack pony && gem unpack builder && gem unpack rack
    mv sinatra-* sinatra && mv rack-* rack && mv builder-* builder && mv pony-* pony

Create your **config.ru** for your Sinatra app,

    require 'rubygems'
    require 'vendor/rack/lib/rack’
    require 'vendor/sinatra/lib/sinatra.rb'
    require 'vendor/pony/lib/pony.rb'
    require 'vendor/builder/lib/builder.rb'
    
    Sinatra::Application.default_options.merge!(
      :run => false,
      :env => :production
    )
    
    require 'site.rb'
    run Sinatra.application

Your **config.yml** file

    pid: /apps/myapp/current/tmp/pids/thin.pid
    log: /apps/myapp/current/log/thin.log
    timeout: 30
    max_conns: 1024
    port: 8030
    environment: production
    chdir: /apps/myapp/current
    rackup: /apps/myapp/current/config.ru
    max_persistent_conns: 512
    address: 0.0.0.0
    servers: 1
    daemonize: true
    threaded: false

Then

    thin -s 1 -C config.yml -R config.ru restart

More [here](http://garrickvanburen.com/archive/deploying-sinatra-app-on-joyents-shared-accelerators-with-thin) and [vendoring](http://railstips.org/2008/12/15/deploying-sinatra-on-dreamhost-with-passenger) by John Nunemaker

http://m.onkey.org/tags/sinatra
