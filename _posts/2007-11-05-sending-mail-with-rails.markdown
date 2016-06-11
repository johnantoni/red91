---
layout: post
title: Sending mail with Rails
category: ruby
keywords: "sending email, ruby on rails, mailer model, example, tutorial, quick example, sendmail"
---

Finally managed to work this out, what follows is something that does 100% work!

#### Install your Mail Client

Choose which one you're gonna use, SendMail or the more powerful Postfix;

    sudo aptitude install sendmail
    ..or
    sudo aptitude install postfix

...however, for this example I'm going to be using the easier Sendmail.

#### Create your Mailer Model

First things first, your gonna need a mailer model, so to create one go to the root of your rails app and type...

    script/generate mailer UserMailer

This will generate a couple of new directories but more importantly thru the magic of rails by using 'mailer' it will know that your creating a model that will use the ActionMailer library and so things will be handled differently with this one than other models.

#### Setup Rails to use SendMail

Now we could use SMTP to send emails from our web app, but to be perfectly honest that's like a major headache for the newbie to setup.  So as long as your running this on a linux box you can use the more simpler SendMail libaries to send email.

To use these in production, edit your production.rb environment file...

    myapp/config/environments/production.rb

and add these lines...

    config.action_mailer.raise_delivery_errors = true
    
    ActionMailer::Base.delivery_method = :sendmail
    
    ActionMailer::Base.sendmail_settings = {
    :location       => '/usr/sbin/sendmail',
    :arguments      => '-i -t'
    }

What the first line will do is notify you of any delivery errors, useful in testing, you can turn this off in production by setting it to false.

* *:location* tells the actionmailer where to find the sendmail libraries, default location.

* *:arguments* tell sendmail to send the email immediately, rather than wait, so your email does get sent.

That's that done, remember you could use SMTP but it can be a nightmare to setup installing postfix, setting your MX records etc. this however is simple & quick.

#### Back to our UserMailer model

Now that's all sorted, open your UserMailer model...

    myapp/app/models/user_mailer.rb

And add...

    def test
    recipients  "user@destination.com"
    from        "admin@source.com"
    subject     "Thank you for Registering"
    body        "test email"
    end

What we've done is created a method that will email user@destination.com when it get's called.

Which can be done by using...

    User_Mailer.deliver_test

...anywhere in our app's code.

Notice the *deliver_* prefix in front of our method *test*.  This is how we associate our 'magic' ActionMailer methods associated when we generated the model.

#### Further Reading

You can optionally expand this with the examples below, but hopefully the above has helped you get over one of the major headaches of Ruby on Rails.

* [RailsCasts 61 - Sending Email](http://railscasts.com/episodes/61)

* [How to send Email](http://wiki.rubyonrails.org/rails/pages/HowToSendEmailsWithActionMailer)

* [ActionMailer API Documentation](http://api.rubyonrails.org/classes/ActionMailer/Base.html)

* [Inline Images in Emails](http://blog.thoughtobject.com/2007/05/26/5/)
