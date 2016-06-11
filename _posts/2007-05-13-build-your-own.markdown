---
layout: post
title: build your own
category: tutorial
---

<img src="/assets/1348220_42a619e59d.jpg" alt="ruby" />
<div class="img_author">... photo by <a href="http://www.flickr.com/photos/stillmemory/">Irina / Riri &copy;</a></div>

Well, I've been building cool things in Ruby, using Locomotive's help; but I think it's time I lost the waterwing's and got in deep with Terminal to build my own copy of Ruby-on-Rails...

...so after some hunting around I managed to find a guide to help me build a native copy of Ruby 1.8.6; note: osx ships with broken ruby, hence the need to do this.

link... <a href="http://hivelogic.com/narrative/articles/ruby-rails-mongrel-mysql-osx">Building Ruby on OSX</a>

Beware though, you'll need to install the GCC compiler to build it, which you can get from the Apple Developer's site...

<a href="https://connect.apple.com/">Apple Developer Connection</a>

...to login, just use your Apple Store ID username & password, get one by registering at the <a href="https://store.apple.com/">Apple Store</a> -> 'your account' -> 'register'.  Here you get access to Apple's latest builds and developer tools, geek heaven!

...once logged in, go to 'Downloads', 'Developer Tools', and look for the latest build of XCode (2.4.1 at present).  Download it (1GB!) and install it on your mac.

Once that's done, your away and will have the native GCC code compiler to compile & install your own latest & greatest copy of Ruby!

link again... <a href="http://hivelogic.com/narrative/articles/ruby-rails-mongrel-mysql-osx">Building Ruby on OSX</a>

note: remember to put in the path statement in your startup file (at the start of the guide), and also please make sure you follow the next bit in it that makes it build the source in your /usr/ root dir (accidentally built mine on the desktop, ERGH!!!).

Drop me a line if you get stuck, till next time,


"Good night and good luck"
