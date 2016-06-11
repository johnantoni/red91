---
layout: post
title: Prototype - if element exists
category: javascript
keywords: "prototype, javascript library, check if element exists, howto, overlapping, if element, dom"
---

#### If Element Exists

Real quick, use this JS with Prototype to determine whether a particular DOM element exists,

    if ($(element) == undefined) { alert('sorry not here'); }

#### If Not A Number

    isNaN($(element)) => returns true if not a valid number

#### Overlapping Text in a Cell

First set the element's...

    overflow: hidden;

Then to fix IE, set it's width...

    width: 40px;

Programmatically..

    $(element).style.overflow="hidden";
    $(element).style.width="40px";

#### Form Elements

    $F('firstname').value => returns value of form element

##### Updated

<i>thanks Owen ;-)</i>
