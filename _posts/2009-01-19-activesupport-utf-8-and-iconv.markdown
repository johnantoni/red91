---
layout: post
title: activesupport, utf-8, iconv and safe urls
category: ruby
---

![A-Team](http://farm4.static.flickr.com/3385/3208344550_9a19ce7ef3.jpg)

Been playing with character sets in Ruby, thankfully like most things in this language it's pretty simple.

First off, if you need access to any of the UTF-8 handlers in [ActiveSupport](http://as.rubyonrails.com/) in your Ruby script, do:

    require "rubygems"
    require "active_support"

This'll give you a suite of methods including **.is_utf8?** and **mb_chars** (previously **chars**) at your disposal.

Next up if you're trying to convert data from different character formats have a look at [Iconv](http://www.ruby-doc.org/stdlib/libdoc/iconv/rdoc/index.html).

    require 'iconv'
    
    content = "them and today\xE2\x80\x99s College"
    content = Iconv.iconv('ISO-8859-1//TRANSLIT', 'UTF-8', content).to_s
    puts content
    => them and today’s College

In this example I've got a utf-8 string I'm trying to convert to Latin ("//TRANSLIT", approximately make conversion). 

So using the **[Iconv](http://www.ruby-doc.org/stdlib/libdoc/iconv/rdoc/index.html)** module, I tell it what I want returned and what format the data I'm giving it and it returns that as an array of characters, then using **.to_s** I can  break it back from an array to a string.

    Iconv.iconv(target, source, string)

There are a lot of character codes out there, here are a few,

    8859-1 <= western latin
    cp437 <= extended ascii
    cp1251 <= windows code page 1251 (cyrilic)

This piece of code converts a multi-byte string to something more url safe for permalinks

    class String
      def to_permalink
        (Iconv.new('US-ASCII//TRANSLIT', 'utf-8').iconv self).gsub(/[^\w\s\-\â€”]/,'').gsub(/[^\w]|[\_]/,' ').split.join('-').downcase
      end
    end

...thanks to **demimismo** for this

More [here](http://snippets.dzone.com/search/get_results?q=multibyte)
