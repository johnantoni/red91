---
layout: page
title: CSS Snippets
---

# CSS Snippets

##### CSS Classes and IDs

Class

    <div class="myclass"></div>
    .myclass { .... }

ID 

    <div id="myid"></div>
    #myid { .... }

##### Center Div

    body {
    	text-align: center;
    	min-width: 600px;
    }
    
    #wrapper {
    	margin:0 auto;
    	width:600px;
    	text-align: left;
    }

>To centre the div, simply set its width and then use margin auto on the right and left hand sides. Unfortunately this doesn't work in IE. However luckily for us, IE also misinterprets text-align: center. Applying this to the body centres the div in IE. However it also centres the body text in all the other browsers as well. To get round this you need to use text-align: left; on the div that you're centering.

>This gets IE up to scratch. However this is the step I always forget. In Mozilla, if you reduce the size of the browser window, half of your centred div hangs off the left of the page. This is an odd one, but I've been reliably informed that it's the correct behaviour. To prevent this, just set a min-width on the body tag.

<i>Andy Budd - [CSS Crib Sheet](http://www.andybudd.com/archives/2004/02/css_crib_sheet_3_centering_a_div/)</i>

##### Link Attributes + Stylesheets

    <a href="/someplace.php" class="mylink">hiya</> 

    <link rel="stylesheet" type="text/css" href="mycss.css" />

    .mylink a:link, a:hover {
    background-color:#000;
    color:#fff;
    }

    .mylink a:visited, a:active {
    background-color:#fff;
    color:#000;
    }

##### Centering

found [here](http://bluerobot.com/web/css/center1.html)

    body {
    	margin:50px 0px; padding:0px;
    	text-align:center;
    	}
    	
    #Content {
    	width:500px;
    	margin:0px auto;
    	text-align:left;
    	padding:15px;
    	border:1px dashed #333;
    	background-color:#eee;
    	}
