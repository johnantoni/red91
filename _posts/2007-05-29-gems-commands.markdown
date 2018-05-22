---
layout: post
title: Recommended Gems
category: ruby
---

<img class="" src="//www.red91.com/assets/135751440_2f59574661_m.jpg" alt="Ruby Gems" />
<div class="img_author">... photo by <a href="http://www.flickr.com/photos/afternoon_sunlight/">afternoon_sunlight &copy;</a></div>

After a while of development with Ruby on Rails, you build up a few notes on what you should always have, or recommended setups.  So to complement all my other notes, here's a little collection of Ruby Gems that I'd recommend you add to your collection, and some command lines to help you.

### Startup + Deployment

#### Basics

    ruby -v
    // returns ruby version
    
    rails [app]
    // creates new app in current directory
    
    script/generate
    // generates templates, models, views, etc.
    
    rake db:migrate
    // runs pending database migration plans
    
    script/server
    // starts mongrel or webrick web server
    
    script/server -p 3030 -e production
    // starts mongrel in production mode at port 3030
    
    script/server -d
    // starts mongrel in development mode silently
    // terminte it with these two:
    
    ps aux | grep mongrel
    // shows active processes named 'mongrel'
    
    kill 31290
    // terminate process 31290
    

#### Adding + Removing Gems

    sudo gem install [gem]
    // installs gem [gem]
    
    sudo gem uninstall [gem]
    // uninstalls gem [gem]


#### Required Gems

    sudo gem install rails --include-dependencies
    // the web framework ruby sits on
    
    sudo gem install mongrel --include-dependencies
    // mongrel is RoR's webserver
    
    sudo gem install mongrel_cluster
    // cluster-based mongrels
    
    gem install capistrano -v 1.4.1
    // makes it easy to deploy your RoR app
    
    sudo gem install deprec -v 1.2.3 -y
    // adds deprec deployment recipies


#### Capifying your App

To make your [app](http://wiki.slicehost.com/doku.php?id=automated_rails_install_and_deployment_with_deprec_capistrano) ready for deployment to your remote server, do:

    cap --apply-to .
    // creates the capify .caprc file
    
    deprec --apply-to . --name myapp --domain myapp.com
    // generate your apps deploy.rb file
    
    cap show_tasks
    // show available capistrano tasks


### Getting Cutting-Edge Builds

#### Freezing your Rails to the Edge

When building your app, you may want to make sure it will only ever use the Ruby version you've got now; rather than the one you might have in the future (if you upgrade ruby later).  You know, if certain commands get depreciated later on, or if the command you use now doesn't work in the next version of ruby, but you need to upgrade your server's Ruby build for the other apps.

...to freeze rails, navigate to your apps dir, then run;

    rake rails:freeze:edge
    rake rails:update

...un-freeze it with;

    rake rails:unfreeze

...to check what versions your running, try;
    
    script/about


### Gem Maintenance


#### Updating Ruby on Rails

    gem update
    // updates all installed gems
    
    gem update --system
    // updates 'gem' -> latest version
    
    gem cleanup
    // deletes any previous unneeded gem files
    
    rake rails::update
    // updates your app to latest rails release


#### Extra Gems

    sudo gem install termios --include-dependencies
    // wrapper for the UNIX termios command
    // prevents passwords you enter in
    // Capistrano from being displayed in 
    // your Terminal for all to see
    
    sudo gem install tzinfo --remote
    // timezone library, provides
    // daylight-saving awareness and 
    // different time zones
    
    sudo gem install redcloth
    // adds support for Textile formatting

    sudo gem install feed-normalizer
    // ruby RSS/ATOM feed reader + dependencies

    sudo gem install mysql
    // builds in better mysql performance
