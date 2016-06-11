---
layout: post
title: Safari 2 escaped characters
category: javascript
---

Note to self: safari doesn't seem to like escaped characters being injected into an object within the DOM, seems to break them up.

So,

    myObj.innerHTML = '<a onclick=\"do();\">execute</a>';

Comes out as...

    <a onclick="; do(); ";>execute</a>

Doesn't happen in Firefox 2, IE6/7 or Safari 3 but fails in Safari 2.0.4
