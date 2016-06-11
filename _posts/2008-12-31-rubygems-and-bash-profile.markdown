---
layout: post
title: rubygems and .bash_profile
category: linux
---

Quick note

If you're on **Debian Linux**, add this to your **.bash_profile** so rubygems gets loaded in your environment and is available in IRB and **Require 'gem'** calls

    export RUBYOPT=rubygems

Save, reload and you should be fine.

Seems less an issue on OSX and Ubuntu but causes a problem on Debian Etch.

More [here](http://www.rubygems.org/read/chapter/3)
