---
layout: page
title: Rails Snippets
---

##### Rails Testing Notes

    sudo gem install ZenTest 
    rake autotest

    fixtures <= holds sample data for your functionals
    functional <= functional tests against controllers
    unit <= tests against models

Testing ActsAsAuthenticated plugin [here](http://nhw.pl/wp/2006/09/25/testing-rails-application-with-actsasauthenticated-plugin)

##### Machinist

Fixtures aren't fun. Machinist is.  Machinist lets you construct test data on the fly

    git clone git://github.com/notahat/machinist.git

[Machinist](http://github.com/notahat/machinist/tree/master)

##### Rake

    rake -T  <= list all rake tasks
    
    rake test:plugins  <=run plugin tests

##### AutoTest Change Colors

    sudo gem install redgreen
    
    mate ~/.autotest
    require 'autotest/redgreen'
    # require 'autotest/pretty'
    # require 'autotest/snarl'
    # require 'autotest/timestamp'

##### RaPT

More powerful plugin installer [RaPT](http://rapt.rubyforge.org/)

    sudo gem install rapt

Then

    rapt install calendar_helper meta_tags memory_test_fix

##### chronic gem

Good for handling dates, times, etc.

    sudo gem install chronic

##### Required Gems

In **config/environment.rb**

    Rails::Initializer.run do |config|
      # Specify gems that this application depends on. 
      # They can then be installed with "rake gems:install" on new installations.
      config.gem 'mysql'
      config.gem 'mislav-will_paginate', :lib => 'will_paginate'
      config.gem 'RedCloth', :lib => 'redcloth'
      config.gem 'rdiscount'
      config.gem 'BlueCloth', :lib => 'bluecloth'
      config.gem 'acts_as_ferret'
      config.gem 'memcache-client', :lib => 'memcache'
      config.gem 'twitter4r', :lib  => 'twitter'
      config.gem 'chronic'
