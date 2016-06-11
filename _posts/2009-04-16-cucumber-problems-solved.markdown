---
layout: post
title: Cucumber Problems (solved)
category: ruby
---

##### What has gone before...

Ok, well on Tuesday I started work building the property application using **Cucumber** from day one.  Unfortunately little did I know it was going thru some rapid changes.

So to begin I pulled the latest cucumber (0.2.2) and rspec (1.2.4), unfortunately these didn't play well together;

    "Looks like cuc depends on 'spec/expectations/differs/default' and that file moved to 'spec/runner/differs/default' in 1.2.4."

...I got from the Cucumber bug-tracker.  A quick hunt around got me;

* [dependency on internal files in rspec breaks cucumber](https://rspec.lighthouseapp.com/projects/16211/tickets/291-dependency-on-internal-files-in-rspec-breaks-cucumber-w-rspec-124#ticket-291-2)

I tried building the latest source but still got probs;

    git clone git://github.com/aslakhellesoy/cucumber.git
    cd cucumber
    sudo rake install_gem

So after some rapid testing I enventually got a best-known scenario running using cucumber 0.2.2, rspec 1.2.2 and rspec-rails 1.2.2 adding this to my **config/environments/test.rb**

    config.gem "rspec", :lib => false, :version => '1.2.2'
    config.gem "rspec-rails", :lib => false, :version => '1.2.2'
    config.gem "webrat", :lib => false, :version => ">=0.4.3"
    config.gem "cucumber", :lib => false, :version => '0.2.2'

And then installing them with:

    sudo rake gems:install RAILS_ENV=test

...and then we had a car crash last night

##### Wham! ...my ribs hurt

Thankfully no-one was hurt, just the car which bled oil badly.  

My brother being the best guy on earth came down and rescued us from the side of the road, would you believe the recovery vehicle only turned up for the car, not us!

So this morning we all woke up, tended to our aches & pains (got bruises right across my chest, ouch!) & now I'm back at my laptop I really wanted to solve this thing once & for all.

##### 'If it bleed's we can kill it'

So with **David** & [Dr Nic's](http://drnicwilliams.com/2009/04/15/cucumber-building-a-better-world-object/) help Cucumber's back up and running with the latest gems.

I switched my **config.gem** params to *'>=...' and started upgrading.  Was presented with a '**multiple worlds error**' which was fixed by upgrading the code from;

    World do |world|
      world.extend NavigationHelpers
      world
    end

To

    World(NavigationHelpers)

Because the previous way's been depreciated in 0.3.0 which went live last night and now my features are running peachy.  

I'll down some more advil & get to putting in some helpers as-per Dr Nic's post, so far I'm loving the Cucumber experience, BDD is definitely the way to go.

Great stuff!

##### Cucumber on Ruby 1.9

To get cucumber working on Ruby 1.9, you'll need the test-unit gem otherwise polyglot will throw errors,

    sudo gem install test-unit
