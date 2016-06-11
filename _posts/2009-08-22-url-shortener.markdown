---
layout: post
title: URL Shortener
category: ruby
---

<a href="http://www.flickr.com/photos/indieflickr/3862376779/" title="6 by John Griffiths, on Flickr"><img src="http://farm3.static.flickr.com/2488/3862376779_25e3178c0a.jpg" width="500" height="390" alt="6" /></a>

Seems everyone's doing something of the kind, so via Sinatra and some vendored gems [here's](http://assetboy.com) a nice URL shortening tool.

Based off of [Andrew Pilsch's](http://blog.pilsch.com/past/2009/6/7/shorten_your_own_damn_urls/) fantastic work, you basically provide a URL and it'll return a shortened equivalent.  When you click the link your browser redirects to **assetboy.com** with the code, recalls the related entry from the SQLite DB and redirects you to the original URL.

Hoping to put the finishing touches to the next tool I'll be releasing in September, a **Domain-name availability tool** called **pingbunny.com**, also powered by **Sinatra**; after which it'll be iPhone development.

Have a play, enjoy

[assetboy.com](http://assetboy.com)
