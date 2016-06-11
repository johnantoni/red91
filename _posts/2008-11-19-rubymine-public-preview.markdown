---
layout: post
title: RubyMine Public Preview
category: ruby
---

![RubyMine](http://www.jetbrains.com/ruby/features/screenshots/rhtml/rhtml_overview.gif)

From the makers of [Resharper](http://www.jetbrains.com/resharper/), a brand new Ruby IDE for Windows / Mac / Linux.

...might finally be a reason to switch off TextMate ;-)

* [RubyMine Download](http://www.jetbrains.com/ruby/index.html)
* [RubyMine Blog](http://blogs.jetbrains.com/ruby/)

Installing on Linux is a little difficult but do-able, first off download the Linux build and extract it.

Next up you'll need to add an environment variable into your **.bashrc** file,

    gedit .bashrc

Then add this to the end of the file, with the path of your JAVA JDK location.

    export JDK_HOME=/usr/lib/jvm/java-6-openjdk/

Save it and reload Terminal so it's got the new variable, then in Terminal navigate into the **bin** directory of RubyMine you just downloaded, 

    cd ~/Desktop/rubymine472/bin

Then remove the last line of **rubymine.vmoptions**

    gedit rubymine.vmoptions
    
      remove this line => -agentlib:yjpagent=disablej2ee,sessionname=rubymine

Once done you should be able to start up RubyMine;

    ~/Desktop/rubymine472/bin/rubymine.sh

Then you can add it to your **.bashrc** file so you can fire it up any time you want with an alias,

    alias rubymine="~/Desktop/rubymine472/bin/rubymine.sh"

And then

    rubymine
