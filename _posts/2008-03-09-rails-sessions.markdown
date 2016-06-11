---
layout: post
title: Rails Sessions
category: ruby
---

![rails is love](http://farm4.static.flickr.com/3203/2344853393_eb124a21c7.jpg)

To make a truly intelligent web application your gonna sooner or later have to play around with Sessions, which is basically a Cookie's big brother.

#### Store in DB

Now Rails initally will store all it's session data in a text file within the /tmp/sessions directory of your rails app, which is usually ok, but if you're gonna build a production-ready app you're gonna want to up the ante somewhat and store them in your DB.

This is simply done by opening up your **environment.rb** file and un-commenting the following line...

<typo:code lang="ruby">
(within /config/environment.rb)
config.action_controller.session_store = :active_record_store
</typo:code>

Then in the command-line generate a RAKE DB migration for your Session objects (so they're stored in your db from now on).

<typo:code lang="ruby">
rake db:sessions:create
rake db:migrate
</typo:code>

Bingo, you now have a table within your database hooked up and ready to store your session data perfectly.

#### Storing Session Objects

Now that you've got your DB storing your session data, why don't we start creating some session objects.

This is done by...

<typo:code lang="ruby">
session[:order] = 'ASC'
</typo:code>

Here, we've simply created a new session object, storing in it a text value of 'ASC'; cool eh?

We can then check to see if our session is empty via...

<typo:code lang="ruby">
if session[:order].blank?
   ..do stuff..
</typo:code>

So if our session object contains nothing we can initialise it correctly.

#### Common Gotcha

Now one of the good things with switching sessions over to your db is that it'll secure your app a little bit better and your performance will improve.

Plus if your building your app on your dev machine, then transfer it to your live box, but can't find a reason why your sessions don't work there it's usually down to file permissions for the session file; by switching sessions over to a db you remove any future problem of this.

Good eh,
