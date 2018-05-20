------------------------------------------------------------------------

layout: post\
title: HAML, SASS, and IE Conditionals\
category: ruby\
----

This stuff is really cool... after doing some more research into writing
rails code the right way I managed to bump into a rocking thing called
HAML via the [Railscasts](http://railscasts.com/) &
[Peepcode](http://peepcode.com/) video tutorial sites.

#### Introduction

Before I continue, may I say thank you to **Geoffery Grosenbach** for
his *TopFunky Ruby on Rails Field Guide*, an excellent piece of work and
has really helped to answer the questions that some books leave
un-checked; well done!

You can get this by purchasing one of Geoffrey's Peepcode videos at
[link](http://peepcode.com/products/rails-from-scratch-part-ii) also
suggest you watch his blog at [Nuby on Rails](http://nubyonrails.com/)

#### HAML, SASS & IE Conditionals

Now if you've got your feet wet with Rails development you'll have coded
.RHTML files and know what they're about, they're programmatically
generated content pages the user sees, along with the div tags, css and
generated Javascript. But like everything else, .NET, ASP, etc they
don't give you some help when coding the opening & closing tags.

Thankfully [HAML](http://haml.hamptoncatlin.com/) is at hand, it's a
plugin to Ruby which basically allows you to create the generated view
pages and essentially not have to worry about closing any tags you've
left open or remembering how to write P-aragraph tags correctly, try it
out and you'll be amazed at how fast and small you're development time
gets.

install via...\
bq. ./script/plugin install
http://svn.hamptoncatlin.com/haml/tags/stable

Now along with this there's
[SASS](http://haml.hamptoncatlin.com/docs/sass) which does what HAML
does to CSS generation, damn cool!

Along with this there's IE Conditionals, which are essentially pieces of
code you can put in your .RHTML / .HAML files so to do things particular
to IE browser users.

#### [IE Conditionals](http://www.quirksmode.org/css/condcom.html)

Have a look, HAML also supports these quick & easy
[link](http://haml.hamptoncatlin.com/docs/haml)

With all the cool new things and well thought out processes, you know,
things done right, [Ruby on Rails](http://www.rubyonrails.org/) really
shines as something not to miss out on, and at the very least may force
a change in other languages much like Firefox did to IE.

...but in a good way, ;-)
