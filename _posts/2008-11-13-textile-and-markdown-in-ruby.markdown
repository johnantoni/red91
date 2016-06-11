---
layout: post
title: Textile & Markdown in Ruby
category: ruby
---

##### Textile

Simple to implement with the **redcloth** gem

    sudo gem install RedCloth

Usage,

    require 'redcloth'
    s = RedCloth.new "p. format this with textile"
    puts s

##### Markdown

With markdown you've got three implementations to try,

* **bluecloth** gem (last maintained 2005, slow)
* **rdiscount** gem (better c implementation, fast!)
* **maruku** gem (pure ruby implementation)

To implement with **BlueCloth**

    sudo gem install bluecloth

Then, 

    require 'bluecloth'
    s = BlueCloth::new("# format this with markdown")
    puts s

Or **RDiscount**

    sudo gem install rdiscount

Then,

    require 'rdiscount'
    s = RDiscount.new("# format this with markdown")
    puts s
