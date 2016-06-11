---
layout: post
title: locomotive and mamp
category: ruby
keywords: "locomotive, lamp, ruby on rails, macbook, tutorial"
---

<img src="/assets/67483661_7d3658e3ae.jpg?v=0" alt="locomotive" />
<div class="img_author">... photo by <a href="http://www.flickr.com/photos/darrylsphotoblog/">DarrylW4 &copy;</a></div>

Tonight I got the macbook out to run thru the '15 minute blog video', one word... WOW! this thing is powerful, and way intelligent.

Thought I'd write some notes on how to get Ruby on Rails running on your macbook too, as if you're a geek like me (and wanting to cut your dev time in half) you're gonna want to, so here goes...

To setup Ruby on Rails on your Macbook, first download <a href="http://locomotive.raaum.org/">Locomotive</a>, unpack the .dmg file and drag it into your applications directory.

Do the same for <a href="http://www.mamp.info/en/home.php">MAMP</a>, downloading it and putting that in your apps dir (MAMP gives you Apache, MySql and PHP all in one tidy package).  You may need to register or give your email address to obtain a copy but other than that it's all good.

Once you've done that, fire up MAMP and Locomotive; you now have a web server and Ruby on Rails running on your desktop, pretty cool eh?

Point your browser to 'http://0.0.0.0:3000/' to see it in action.

However your gonna have trouble accessing your mini MySql server unless you switch to Locomotive and enter '/Applications/MAMP/db/mysql/' in the Preferences/Terminal/'Additional Paths' box.  Doing this will tell Locomotive where to find your database server.

Now to create your first Ruby app, in Locomotive, select 'Applications/Create New...' then type the name of your new app.

To edit the source of your app, in Locomotive, select 'Edit in TextMate' and your away (<a href="http://macromates.com/">TextMate</a> is a powerful text editor built for the mac, you need to purchase it, $39, but it's well worth it; trust me, includes lifetime updates so never need to again).

...one thing though, to make your app talk to your database fully, in TextMate, open the 'config' folder and edit 'database.yml', make your settings like;

<blockquote>
development:
  adapter: mysql
  socket: /Applications/MAMP/tmp/mysql/mysql.sock
  database: blog_development
  username: root
  password: root
  host: localhost
</blockquote>

This will tell Ruby to connect to the MySql socket and use the default username & password you get set to on first install of MAMP.

Restart MAMP & Locomotive and get on with the lessons at <a href="http://www.rubyonrails.org">www.rubyonrails.org</a>

Final words,
Ruby is an intelligent language so what you name things will mean a lot more, things like making a table of posts for a blog; call it 'posts' and Ruby will know what your intended use for them is, like calling a to-do list 'to-do'; things have more meaning.

Ruby hasn't been around long, only since 2004, but is gaining a massive following due to the speed in which you can build complex web applications.  The web pages themselves '.rhtml' are generated as you run them.

To add new packages, or 'gems', use the 'gem install' command when in Locomotive (Applications/Open Terminal).  And to generate new MVC parts, type './script/generate ', Ruby makes heavy use of the MVC model, keeping the three components of your application separate at all times; minimising the time spent bug-fixing your app.

Drop me a line if you get stuck,

Till next time, 

"Good night and good luck"
