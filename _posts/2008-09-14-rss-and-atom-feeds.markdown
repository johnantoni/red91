---
layout: post
title: RSS and ATOM feeds
category: ruby
---

One thing that I really had to include in Matilda was the ability to generate RSS or ATOM feeds, it being a blogging engine it's sort of expected ;-)

So after hunting around I eventually managed to build a set of actions for my blog controller to generate the xml data.

### Actions

Below are the two actions which will sift thru the database and return an object containing all relevant records, one for atom, one for rss (yep i could combine them but this is early days).  Put something similar in your blog_controller.rb

    def feed_atom
      @articles = Article.find(:all,
          :limit => Settings.rss_count,
          :order => 'created_at DESC',
          :conditions => ['article_type_id = 1 and publish = 1'])
      respond_to do |format|
        format.atom
      end
    end

    def feed_rss
      @articles = Article.find(:all,
          :limit => Settings.rss_count,
          :order => 'created_at DESC',
          :conditions => ['article_type_id = 1 and publish = 1'])
      respond_to do |format|
        format.rss
      end
    end

### Builders

Now in your view create two builders, one to generate each type of xml data,

(in feed_atom.atom.builder)

    xml.instruct! :xml, :version=>"1.0" 
    xml.feed(:xmlns => "http://www.w3.org/2005/Atom") do |feed|
      feed.title(Settings.blog_title.camelize + ' ' + Settings.blog_subtitle)
      feed.link('http://www.myblog.com')
      for article in @articles do
        feed.entry do |entry|
          entry.title(article.title)
          entry.content(article.filter_body, :type => 'text')
          entry.updated(article.created_at)
          entry.link("http://www.myblog.com/"+article.url)
        end
      end
    end

(in feed_rss.rss.builder)

    xml.instruct! :xml, :version => "1.0"
    xml.rss :version => "2.0" do
      xml.channel do
        xml.title Settings.blog_title.camelize
        xml.description Settings.blog_subtitle
        xml.link "http://www.myblog.com"

        for article in @articles
          xml.item do
            xml.title article.title
            xml.description article.filter_body
            xml.pubDate article.created_at.to_s(:rfc822)
            xml.link "http://www.myblog.com/"+article.url
          end
        end
      end
    end

It's pretty straightforward, the article.url is a method i've got in my model that generates the right url for the article, filter_body converts the body text into html based on whether that article was stored using textile, markdown or plain text.

### Routes

Now add these into your routes.rb so you can linkup the actions how you want them,

    map.connect 'feed.atom', :controller => 'blog', :action => 'feed_atom'
    map.connect 'feed.rss', :controller => 'blog', :action => 'feed_rss'

...once done, anyone hitting www.myblog.com/feed.rss will get the rss feed, or /feed.atom for their atom feed; whichever floats their boat.

### AutoDiscovery

Finally, the most important bit, adding autodiscovery links to the head of your web-page so your visitors browsers can automatically see and consume your feeds.

    <head>
    <link href='http://www.myblog.com/feed.atom' rel='alternate' title='ATOM' type='application/atom+xml' />
    <link href='http://www.myblog.com/feed.rss' rel='alternate' title='RSS' type='application/rss+xml' />
    </head>

Now whenever anyone hits your blog their browser will show the common ))) arrows at the right-corner of the address bar saying there's a feed to consume, when they click it they can choose which type of feed they want to subscribe to.

I'm probably missing out on a few things but it's enough to get you started, enjoy!
