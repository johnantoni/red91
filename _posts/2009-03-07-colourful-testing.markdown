---
layout: post
title: Colourful Testing
category: ruby
---

So I don't forget more than anything, here's how to colourize your testing output in ZenTest (thanks **PeepCode**)

    sudo gem install ZenTest redgreen

Next go into your rails project and create a file called **.autotest**

    gedit ~/.autotest

And add some styling to AutoTest

    require 'redgreen/autotest'

Now everytime you're testing, passed tests will be in green and failures will be in red.

Kick off ZenTest with

    autotest

More [here](http://www.zenspider.com/ZSS/Products/ZenTest/)
