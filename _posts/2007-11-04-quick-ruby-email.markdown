---
layout: post
title: Quick Ruby Email
category: ruby
---

Here's a tiny slice of ruby-on-rails code to send emails...

    Net::SMTP.start('localhost') do |smtp|
    smtp.send_message 'hello...', 'yourdomain.com', @user.email
    end


Remember to setup your email server Postfix, which this guide will help you out.

* [Ubuntu - Postfix Simple Setup](https://help.ubuntu.com/community/PostfixBasicSetupHowto)

* [Original Simple Emailer Code](http://ianpurton.com/simple-email-send-function-in-ruby/)

* [Send Mail in Ruby Tutorial](http://www.tutorialspoint.com/ruby-on-rails/rails-send-email.htm)
