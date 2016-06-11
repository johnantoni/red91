---
layout: post
title: Javascript Form Validation
category: javascript
---

To quickly validate a user's form input via Javascript, try the following...

#### Add 'onsubmit' to Form Tag

First add the onsubmit action to your Form Tag, so that when the user clicks the submit button your Javascript function will fire, and more importantly return a value (true=ok, false=bad).

    <form action="checkout.php" method="post" onsubmit="return checkform(this);">

Breaking this down, when the user clicks the submit button, the checkform() Javascript function will fire.  When this function returns True then the form data will be sent via the Post method to the page 'checkout.php'.

And using 'this' will pass this form to the Javascript function.

#### The Javascript 'checkform' Function

Now the Javascript function, add this inside the HEAD portion of your web page.

    <script language="JavaScript" type="text/javascript">
    <!--
    function checkform ( form )
    {
    if (form.myfield.value == "") {
    alert("your error message");
    return false ;
    }
    return true ;
    }
    //-->
    </script>

Really simple when you break it down.

The function will fire when the user clicks the Submit button on the form, when that is done the Form will pass it's contents to this Javascript function, expecting a value returned.

Now the 'checkform' function will check the form field 'myfield'.  If it's value is '' blank then it returns false, otherwise the function returns true.

Note the Form will only continue if the function returns a True value.
