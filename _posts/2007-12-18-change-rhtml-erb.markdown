---
layout: post
title: Change rhtml to erb
category: ruby
---

In a bout of syntactical changes, Rails 2.0 harks the end of the .rhtml file extension; to be replaced with .erb

To change all your existing .rhtml files to .html.erb, run:

    for f in $(find . -name '*.rhtml') ; do c=$(dirname $f)/$(basename $f .rhtml).html.erb ; hg mv $f $c ; done

The .html is to help with working out what contents are in the file, as it could in theory have both.

* .html.erb = html
* .css.erb = css

p.s. the script above doesn't do .css.erb, that's something you'll have to decide whether to use.

Thanks to [Duncan Ponting](http://snippets.dzone.com/posts/show/4640) for this.
