---
layout: post
title: Freezing Rails
category: ruby
---

Sometimes with remote server's you may have to supply the files relating to the current version of rails your writing for in order to run your app on someone else's server, like [mosso.com](http://www.mosso.com).

#### Freezing Rails

So in Terminal, while in your Rails apps directory run:

    rake rails:freeze:gems

This will unpack the rails version your using into the /vendor/rails directory of your app.

From there you can upload it to your server and it should just work.

#### Thawing Out

To reverse the process...

    rake rails:unfreeze

This removes the frozen version from your vendor/rails directory.

#### Picking Up Changes

Also note new rails versions come with config file changes, to pick these up run:

    rake rails:update:configs

#### Freezing to the Edge

You can also freeze (or grab a local development copy) of rails via...

    rake rails:freeze:edge

Or Freeze to a specific release with...

    rake rails:freeze:edge TAG=rel_2-0-2

This freezes to Rails 2.0.2

#### Also for...

You can also do this for individual gems, by first grabbing the gemsonrails gem...

    sudo gem install gemsonrails

Then moving to your Rails app directory and running...

    gemsonrails

This installs some extra RAKE tasks into your app, so now you can freeze a local copy of say the RedCloth gem into your app via...

    rake gems:freeze GEM=RedCloth
