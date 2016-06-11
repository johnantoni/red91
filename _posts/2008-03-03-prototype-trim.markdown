---
layout: post
title: Prototype Trim
category: javascript
---

Here's a nice little addon to the Prototype Ajax library that adds the ability to trim text, etc. with Prototype.

First add this to one of your .js include files,

    String.prototype.trim = function() {
    	return this.replace(/^\s+|\s+$/g,"");
    }
    String.prototype.ltrim = function() {
    	return this.replace(/^\s+/,"");
    }
    String.prototype.rtrim = function() {
    	return this.replace(/\s+$/,"");
    }

now with [protoype](http://www.prototypejs.org/) loaded you can trim your text simply and effectivly,

    $('myfield').value.trim() == '';

this will simply get the value from the textbox 'myfield', trim it for whitespace and then compare it to see if it's empty.

Sweet!

Thanks goes to [SOMACON.COM](http://www.somacon.com/p355.php) for this one.
