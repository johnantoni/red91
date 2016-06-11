---
layout: page
title: JavaScript Snippets
---

# JavaScript Snippets

##### TinyMCE example config

* [TinyMCE Perfect Config](http://data.red91.com/red91/assets/tinymce_perfect_setup.txt)

* [Hiding Elements via the DOM](http://data.red91.com/red91/assets/hide_elements_via_dom.txt)

Also try,

* [PunyMCE](http://www.moxieforge.net/overview.php?project_id=9&category_id=5)

##### generate random number

    var randomnumber=Math.floor(Math.random()*11)

##### convert string to float

    var ii = parseFloat('string');

##### convert integer to string

    mys = myi + '';

##### convert string to integer

    var ii = parseInt( 'string');

##### convert object to string

    myi = Math.floor(myo);

##### href links with javascript

    <a href="javascript:void(0);" onclick="dosomething();" />

##### access objects outside the iframe

    top.[my js object]
    onclick="top.myobj.close();"

* [example](http://cross-browser.com/talk/inter-frame_comm.html)

##### check if element exists

    function testIsValidObject(objToTest) {
        if (objToTest == null || objToTest == undefined) {
            return false;
        }
        return true;
    }

##### select list - get value of item

    $('myListBox').options[$('myListBox').options.selectedIndex].value

##### select list - get text of item

    $('myListBox').options[$('myListBox').options.selectedIndex].text

##### select list - get name of item

    $('myListBox').options[$('myListBox').options.selectedIndex].name

* [lowpro - unobtrusive javascript](http://www.danwebb.net/2006/9/3/low-pro-unobtrusive-scripting-for-prototype, danweb.net)

##### if IE6

    if (parseInt(navigator.appVersion)!==4) {}

##### prototype - attach function to load

    Event.observe(window, 'load', myfunc);

##### prototype - attach code to load

or attach code to run once page has fully loaded (if you've got one Event.observe-on-load already setup, this will be appended to that one, so one doesn't overwrite the other)...

    Event.observe(window, "load", function () {
        ...code...
    };       

##### fastinit - alternative onload

alternatively, try Dexagogo's FastInit library,

* [FastInit](http://tetlaw.id.au/view/javascript/fastinit)

##### parallel downloads

    function loadScr(scr) {
        var scrObj = document.createElement('script');
        scrObj.src = scr;
        document.body.appendChild(scrObj);
    }

* [Alternate AJAX Techniques](http://www.webreference.com/programming/ajax_tech/)
* [Steve Souders - Cuzillion](http://stevesouders.com/cuzillion/)

##### kill keys (backspace / enter key)

from [here](http://mspeight.blogspot.com/2007/05/how-to-disable-backspace-in-ie-and.html)

    function killKeys() {
    //stop backspace / escape / enter key
    if (typeof window.event != 'undefined') // IE
    document.onkeydown = function() // IE
    {
    var t=event.srcElement.type;
    var kc=event.keyCode;
    //alert('Type: ' + t);
    return ((kc != 8 && kc != 13 && kc != 27) || (t == 'text' && kc != 13 && kc != 27) ||
    (t == 'textarea' && kc != 27) || (t == 'button' && kc == 13) || (t == 'submit' && kc == 13) ||
    (t == 'password' && kc != 27 && kc !=13) || (t == '' && kc == 13))
    // Type = '' is what I get from the A HREF elements that need to remain functional in my form
    }
    else
    document.onkeypress = function(e) // FireFox/Others
    {
    var t=e.target.type;
    var kc=e.keyCode;
    if ((kc != 8 && kc != 13 && kc != 27) || (t == 'text' && kc != 13 && kc != 27) ||
    (t == 'textarea' && kc != 27) || (t == 'button' && kc == 13) || (t == 'submit' && kc == 13) ||
    (t == 'password' && kc != 27 && kc !=13) || (t == '' && kc == 13))
    // Type = '' is what I get from the A HREF elements that need to remain functional in my form
    return true
    else {
    // alert('Sorry Backspace / Enter is not allowed here'); // Demo code
    return false
    }
    }
    };

##### Clean Text

    function cleanText(sText) {
        return sText.replace(/<.*?>/g, '');
    }

##### Load Stylesheet

    function addStylesheet(url) {
    	var stylesheet = document.createElement('link');
    	stylesheet.rel = 'stylesheet';
    	stylesheet.type = 'text/css';
    	stylesheet.href =  url;
    	document.getElementsByTagName('head')[0].appendChild(stylesheet);
    }

##### Load Script

    function addScript(url) {
    	var script = document.createElement('script');
    	script.src = url;
    	document.getElementsByTagName('head')[0].appendChild(script);
    }

##### Alternative Load Script

    function AttachScript(src)
    {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(script);
        script.src = src;
    }

##### Ajax.Updater

Replace element with results from AJAX call, then evaluate results in case javascript file was included;

    var aj = new Ajax.Updater(eid, url, { evalScripts: true });
    };

##### Convert UK to US Date

...because date validation in Javascript is handled in US date format

    function convertUKtoUSdate(ukDate) {
        var tmpDate = ukDate;
     
        if (tmpDate.indexOf(" ", 0) > 0) {
            tmpDate = tmpDate.slice(0, tmpDate.indexOf(" ", 0) + 1); 
        }
    
        var sl = tmpDate.length;
        s1 = tmpDate.indexOf("/", 0);
        var s2 = tmpDate.indexOf("/", s1 + 1);
    
        var ukDate = tmpDate.slice(s1 + 1, s2) + "/" + tmpDate.slice(0, s1) + "/" + tmpDate.slice(s2 + 1, sl);
    
        ukDate = new Date(ukDate);
        return ukDate
    }

returns javascript date object, use with:

    var myDate = convertUKtoUSdate($('datefield').value);

##### SSL Support - HTTP / HTTPS Checker

    var useProtocol = "http";
    if(location.protocol.toLowerCase() == "https:") useProtocol="https";
    else useProtocol = "http";

##### Add ClassName to Class Object (prototype)

    document.getElementsByClassName('prev_page')[0].addClassName('thickbox');


##### Strip HTML prototype method

    String.prototype.stripHTML = function() {
        var matchTag = /<(?:.|\s)*?>/g;
        return this.replace(matchTag, "");
    };

##### Find Elements

document.images   = find all images on a page
typeof(document.images)=='undefined'

##### Resources

* [How do you Manage your JavaScript Files](http://stackoverflow.com/questions/219285/how-do-you-manage-your-javascript-files)
* [Introspection](http://en.wikipedia.org/wiki/Introspection)
