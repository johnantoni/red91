---
layout: post
title: Persistence in JavaScript
category: javascript
keywords: "persistent javascript, cookie library, breakdown, howto, tutorial"
---

In this article we're going to play around with creating client-side cookies using JavaScript.  First off here's a function to use which makes handling them easy.

#### JavaScript Cookie Library

    var Cookie = {
      set: function(name, value, daysToExpire) {
        var expire = '';
        if (daysToExpire != undefined) {
          var d = new Date();
          d.setTime(d.getTime() + (86400000 * parseFloat(daysToExpire)));
          expire = '; expires=' + d.toGMTString();
        }
        return (document.cookie = escape(name) + '=' + escape(value || '') + expire + '; path=/');
      },
      get: function(name) {
        var cookie = document.cookie.match(new RegExp('(^|;)\\s*' + escape(name) + '=([^;\\s]*)'));
        return (cookie ? unescape(cookie[2]) : null);
      },
      erase: function(name) {
        var cookie = Cookie.get(name) || true;
        Cookie.set(name, '', -1);
        return cookie;
      },
      accept: function() {
        if (typeof navigator.cookieEnabled == 'boolean') {
          return navigator.cookieEnabled;
        }
        Cookie.set('_test', '1');
        return (Cookie.erase('_test') === '1');
      }
    };

#### Usage

To *create* a cookie do,

    Cookie.erase('mycookie'); Cookie.set('mycookie', 'myval', 365);

...365 is the days till expiry, we erase it before we set a new value just to be sure,

To *erase*,

    Cookie.erase('mycookie');

To *read* a cookie,

    var ii = Cookie.get('mycookie');

and if you get *problems with bad numerics*, try this,

    var ii = Math.floor(Cookie.get('mycookie'));

or *problems checking* cookie exists, try this,

    if (document.cookie.indexOf('mycookie=')>0) {

#### Persistence

Now persistence can be a pain in the rear if your cookies are getting cleared out when people navigate to somewhere else in your sites tree structure.  So to make sure they stay around, set the *path=/;* this will force your cookies to be relevant right across your site.  So if the person is in the photos area and then navigates down one they'll still be relevant and accessible via the functions above.

The function above does this already so you should be ready to roll if you use the code, ok my explanation's probably not 100% perfect but the codes working good this end, hope it does the same for you.
