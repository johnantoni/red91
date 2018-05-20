------------------------------------------------------------------------

layout: post\
title: Accessing the Ruby RI dictionary\
category: ruby\
----

One of the major plus factors with Ruby and also all the extra gems is
that they usually come with helpful documentation, both the RI and RDOC
packages.

To access these is pretty simple, if a little daunting at first, from
the Terminal.

> ri Class<br />\
> ri Class::method (:: for class mathods)<br />\
> ri Class\#method (\# for instance methods)

The first line will return the RI dictionary definition and usage of the
\[class\] you require, the second can be used to drill this down to the
related \[method\] for the \[class\]

To use this, replace \[class\] & \[method\] with something like..

> ri Enumerable<br />\
> ri Enumerable\#zip

...here the top line will return the definition & usage of the
Enumerable class, the next will drill that down to a particular instance
method.

You can also output this content to an HTML file via,

> ri -Tf html String\#gsub \> gsub.html

...or to the Terminal using ANSI formatting

> ri -Tf ansi String\#gsub

...took this off a part of [Why's Poignant Guide to
Ruby](http://poignantguide.net/ruby/expansion-pak-1.html), hope to
embelish this a bit further later.

John.
