---
layout: post
title: Javascript Killing the TAB Key
category: javascript
---

One thing that might muck up your beautifully designed AJAX popups is the user repeatedly hitting the tab key, simple way of stopping this is by inserting a **onkeydown** event for the keypress..

##### Trapping TAB

<typo:code lang="ruby">
<input name='username' type='text' 
onkeydown='if(event.keyCode==9) { return false; }' />
</typo:code>

Simple and effective, as soon as the user's cursor gains focus for the **username** textbox if they then try to hit TAB within it it won't do anything; effectively trapping the action dead.

Obviously if you've got two boxes (username + password), you'll want to put this kind of trap on the **password** textfield otherwise the user won't be able to tab to the next cell, but as a quick fix it works well.

##### Setting Focus

You can also set focus via...

<typo:code lang="ruby">
$('username').focus();
</typo:code>
