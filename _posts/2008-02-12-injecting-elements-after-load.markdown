---
layout: post
title: Injecting Elements After Load
category: javascript
---

Here's a javascript technique which you might need down the line and which helped me out a lot when handling a ppc event.  Basically the code below allows you to execute a script that would normally be run on load, but here we run it when we want to; because say in this case you don't want to reload the page just for an extra script.

#### Injecting Scripts After Load

So,

    var oScript = document.createElement("script");
    oScript.src = "signed_up_user.js";
    document.body.appendChild(oScript);

What this does is create a new script element and append it to the current page.  

The *createElement()* bit defines what kind of object you're going to create,

* *img* => image
* *a* => hyperlink
* *script* => javascript

...giving you all the properties related to that object, so to set the script for a *script* object we do...

    oScript.src = "signed_up_user.js";

The *appendChild* injects the element into the area you specify within the DOM model, in this case the *body*.

#### !! Document.Write !! 

Important note, you can't fire a *Document.Write* after the page has loaded, just won't work. 

To add elements to your page use *document.body.appendChild* or Prototype / MooTools, which add some really efficient handlers for you to do this even faster and cross-browser.

#### Injecting Images After Load

We can also add an image generated off of some ppc script we've been given (big help if you've got googleppc to handle), like...

    var oScript = document.createElement("img");
    oScript.height = "1";
    oScript.width = "1";
    oScript.src = "some_ppc_script_function()";
    document.body.appendChild(oScript);

In this case our image element is generated with the appropriate width & height, and then the source is put in from our ppc function that returns back an image element and injects it into the page.

All without refreshing the page, but more importantly when you add that script to the page after-load it IS processed!.

Hardcore AJAX ;-)

Have fun!
