---
layout: post
title: Request.QueryString and Select Redirect
category: javascript
---

Quick post, to handle parameters in your webpage via javascript, try this...

#### Request.QueryString with JS

* [CSJS Object.js](http://andrewu.co.uk/tools/request/)
* the file, stored [locally](http://www.red91.com/assets/CSJSRequestObject.js)

Include the file in your header section then use like...

    mypage.html?username=john

With the Javascript...

    var name = '';
    if (Request.QueryString("username").Count > 0) {
        name = Request.QueryString("username").Item(1);
    }

The function returns the querystring as an object, so to determine whether you have any parameters returned **count** the number of objects.  The first of which we want so we use **.Item(1)** to grab that and stick it in our variable **name** after which we can give to an **alert()** popup or whatever we need.

#### On Select Redirect with JS

Here's another bit, this will force the browser to redirect to another page once the user selects a value from the drop-down box and clicks the button image.

Javascript...

    function goto(form) { 
    var index=form.select.selectedIndex
        if (form.select.options[index].value.length != 0) {
            location.replace(form.select.options[index].value);
        }
    }

Html...

    <FORM NAME="form1">
    <select name="select" id="select" style="width:90px;">
    <option value="http://www.red91.com/">my site</option>
    </select>
    <img src="button.gif" onclick="goto(form1)" />
    </FORM>
