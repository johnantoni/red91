---
layout: post
title: lsi and jekyll
category: ruby
---

Slowly porting red91 to red91.com, it's new home and with that over to Jekyll too.  Along the way I wanted to have a better way to create related-posts within the blog with Jekyll provides, but it's not particularly reliable.

However if you enable LSI within your Jekyll config and install these tools it get's a lot better.

    sudo apt-get install libgsl0-dev gsl-bin
    sudo gem install classifier
  
Then inside your _config.yml add,

    lsi: true
  
Regenerate your site (which will take a while if you've got a lot of posts)

    jekyll
  
And away you go.

[...more about Jekyll](http://jekyllrb.com/)

