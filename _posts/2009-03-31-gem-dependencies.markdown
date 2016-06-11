---
layout: post
title: Gem Dependencies
category: ruby
---

##### Example Config
    config.gem 'mysql'
    config.gem 'mislav-will_paginate', :version => '~> 2.3.8', :lib => 'will_paginate', :source => 'http://gems.github.com'
    config.gem 'RedCloth', :lib => 'redcloth', :source => 'http://gems.github.com'
    config.gem 'rdiscount', :source => 'http://gems.github.com'
    config.gem 'chronic', :source => 'http://gems.github.com'

    config.gem "rspec", :lib => false, :version => ">=1.2.2"
    config.gem "rspec-rails", :lib => false, :version => ">=1.2.2"
    config.gem "webrat", :lib => false, :version => ">=0.4.3"
    config.gem "cucumber", :lib => false, :version => ">=0.2.2"


* tying Rails to Sinatra [here](http://m.onkey.org/tags/sinatra)

##### RAKE Commands
    sudo rake gems:install                :install gems
    sudo rake gems:install RAILS_ENV=test :install gems for [test] env
    sudo rake gems:build                  :build gems needing native extensions
    sudo rake gems:unpack                 :unpack gems
    sudo rake gems:unpack GEM=hpricot     :unpack specific gem
