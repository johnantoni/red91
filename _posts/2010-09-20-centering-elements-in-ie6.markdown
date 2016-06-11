---
layout: post
title: Centering elements in IE6
category: design
description: "How to center elements in IE6 with margins and text-aligns"
---

In IE6 you'll find centering elements with the margin rule is just not enough, here's a way of fixing it:

Define your HTML (haml format)

    %body
      %div.container
      
Now your CSS (sass format)

    .container
      margin: 0 auto
      with: 50em

This will align the div element with class of 'container' within the center of the screen, however in IE6 it will still appear aligned to the left.

The fix for IE6 is dirty at best but works

Augmented CSS to deal with IE6 (sass format)

    body
      text-align: center
    
    .container
      margin: 0 auto
      width: 50em
      text-align: left

Basically to solve it use text-align:center within the body element and then apply text-align:left within the .container class so the elements appear normally, it's almost something kept along from the table days but thankfully this solves it.