---
layout: post
title: Writing with Sinatra...
category: ruby
---

<a href="http://www.flickr.com/photos/indieflickr/3254406444/" title="Gran Torino by John Griffiths, on Flickr"><img src="http://farm4.static.flickr.com/3380/3254406444_6b838cf1f5.jpg" width="500" height="334" alt="Gran Torino" /></a>

My fiancee really wants a portfolio site to show off her freehand work.  After watching [Peepcode's](https://peepcode.com/products/haml-and-sass) tutorial on HAML & SASS markup I'm going to have a go at using Sinatra to put one together for her.

Mock it up in photoshop, chop up the psd and use haml & sass markup to get it done.

Grab it [here](http://github.com/sinatra/sinatra/tree/master), Tutorial [here](http://www.sinatrarb.com/intro.html)

    sudo gem install sinatra haml

Then the TextMate Bundle

    git clone git://github.com/handcrafted/handcrafted-haml-textmate-bundle.git HAML-Handcrafted.tmbundle

It runs with [rack](http://www.gittr.com/index.php/archive/deploying-sinatra-via-thin-and-lighttpd/) so should be fine with [thin](http://code.macournoyer.com/thin/usage/) and my nginx setup.

Was going to replace Thin & Nginx with Passenger, but that just seems a waste of a really good layout.  I've got Github setup to handle the code backups, and Strongspace as a secondary failover in case the worst happens.  Should go good.

Some really awesome design examples here...

* [Single-Page Portfolio Sites](http://www.webdesignerwall.com/trends/single-page-portfolio-sites/)
* [My Web Arts](http://www.mywebarts.com/)
* [Sample CSS layout code](http://www.maxdesign.com.au/presentation/page_layouts/)
* [The One-Page graphic design portfolio guide](http://www.youthedesigner.com/2008/01/31/the-one-page-graphic-design-portfolio-guide/)
* [Elliot Jay Stocks](http://elliotjaystocks.com/blog/)

...watching **[Gone Baby Gone](http://www.imdb.com/title/tt0452623/)**, good acting from Casey Affleck (can very much see his brother in the role, however I think Casey's got a better chance at the rough story acting).  **[Gran Torino](http://www.imdb.com/title/tt1205489/)** was excellent, not what you expect but really great story and good acting all round.

...can't wait to watch Benjamin Button
