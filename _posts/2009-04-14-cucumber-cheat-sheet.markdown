---
layout: post
title: Cucumber Cheat Sheet
category: ruby
---

#####install cucumber
    sudo gem sources -a http://gems.github.com
    sudo gem install cucumber


#####install webrat
    sudo apt-get install libxslt1-dev libxml2-dev
      ..needed by linux
    sudo gem install webrat

    In your test_helper.rb or env.rb (for Cucumber) add:
      require "webrat"
      Webrat.configure do |config|
        config.mode = :rails
      end


#####install rspec
    sudo gem install rspec rspec-rails


#####gem dependencies + rake commands
    add to: config/environments/test.rb
    
    config.gem "rspec", :lib => false, :version => '>=1.2.2'
    config.gem "rspec-rails", :lib => false, :version => '>=1.2.2'
    config.gem "webrat", :lib => false, :version => ">=0.4.3"
    config.gem "cucumber", :lib => false, :version => '>=0.2.2'
    
    sudo rake gems:install                :install gems
    sudo rake gems:install RAILS_ENV=test :install gems for [test] env
    sudo rake gems:build                  :build gems needing native extensions
    sudo rake gems:unpack                 :unpack gems
    sudo rake gems:unpack GEM=hpricot     :unpack specific gem


#####cucumber commands
    script/generate cucumber    :setup cucumber in your app
    cucumber features -n        :test against /features

    script/generate rspec_model Article title:string content:text
      ..generate rspec model + db migrations

    rake db:migrate             :migrate database
    rake db:test:clone          :clone migrations to test database

    script/generate rspec_controller articles index
      ..generate rspec controller


#####webrat commands
    script/generate integration_test authentication
      ..generate integration test 'authentication'

    rake test:integration       :run integration tests

#####tutorials

beginning with cucumber

* [http://railscasts.com/episodes/155-beginning-with-cucumber](http://railscasts.com/episodes/155-beginning-with-cucumber)
* [http://asciicasts.com/episodes/155-beginning-with-cucumber](http://asciicasts.com/episodes/155-beginning-with-cucumber)

webrat

* [http://railscasts.com/episodes/156-webrat](http://railscasts.com/episodes/156-webrat)
* [http://asciicasts.com/episodes/156-webrat](http://asciicasts.com/episodes/156-webrat)

look inside the /examples directory for help on specific scenarios

* [http://github.com/aslakhellesoy/cucumber/tree/master/examples](http://github.com/aslakhellesoy/cucumber/tree/master/examples)

commands
    rake features     :run this to list each scenarios rake tasks
    cucumber --help   :list cucumber help

...and no, a cucumber is a fruit, not a vegetable
