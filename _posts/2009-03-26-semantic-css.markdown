---
layout: post
title: CSS 2.1 Selectors
category: design
---

##### CSS 2.1 Selectors

    attribute selectors:

      img[alt]        = all imgs with alt
      a[title]        = all anchors with title
      p[class='rank'] = all paragraphs with class=rank
      div[id='rank']  = all divs with id=rank

      q[cite*='http://www.andy.com/']
                      = pattern matching based on only part of it's attribute


    child selectors:

      div > a = all anchors that are children to the div
          <div> (unstyled)
            <a> (styled)
            <a> (styled)

      h2 + p  = next sibling to the adjacent h2 element
          <h2>  (unstyled)
          <p>   (styled)
          <p>   (unstyled)


    pseudo-classes:

      div.news p:first-child  = first child of the div element
          <div>
            <p>   (styled)
            <p>   (unstyled)

      input[type=text]:focus  = applies where the element has focus

      blockquote:lang(de)     = where content is in a particular language
          <blockquote lang="de">


    pseudo-elements:

      p:first-line          = applies to first line of any text in the page
      p.intro:first-letter  = applies to first letter or digit of the paragraph

More [here](http://www.w3schools.com/CSS/css_examples.asp)

##### Other Operations

    include
      @import url "style.css";

    selectors
      #branding = id
      .content  = class

    hex colors
      #000      = black
      #fff      = white

    attributes
      body {color: #fff;}

    nested examples
      a.gb2:hover {margin: 0 0 0 0;}
      .content p {padding:0;}
