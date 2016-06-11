---
layout: page
title: IE6 Hacks
---

# IE6 Hacks

## ..or how to fix what breaks in ie6

##### Holder.replace => unrecognised quantifier
    var str = holder.replace(/ /g, "");  <- breaks
    var str = holder.replace(' ', "");   <- fix

##### IE Conditional

    <!--[if lt IE 7]>
    <link rel="stylesheet" type="text/css" href="/css/ie_fix.css" />
    <![endif]-->

##### PNG Transparency

Unfortunately IE6 doesn't work well with transparent images, so if you're doing transparent rounded corners stick to solids; shame.

##### DIV & Floats

Be careful when floating div's next to each other, IE6 is more than a little picky about this.

##### .textContent

Internet Explorer doesn't support this parameter, just Firefox; so if you can try storing your value in the .alt tag and pulling it off that way, otherwise use the .innerHTML value.
