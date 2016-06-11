---
layout: post
title: Escaping in Ruby
category: ruby
---

Really simple example for escaping your strings

    require 'uri'
    str = URI.escape(str) if str.length > 0
