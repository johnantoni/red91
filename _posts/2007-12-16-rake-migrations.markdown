---
layout: post
title: Rake Migrations and Custom Tasks
category: ruby
---

![Jesse James](http://farm3.static.flickr.com/2321/2117229727_8d0ec0281c.jpg)

One cool thing about Rails is it provides you with so many helper functions and commands, one of these being RAKE.

RAKE is similar to the MAKE compiler command used to build binaries from source, with Rails it's useful when building your apps database.

### Database Work

#### Create Migration

    script/generate migration users

This will create a Rails database migration you can use to specify the contents of the users table for instance.

    /myapp/db/migrate/001_create_users.rb

#### Create Database

Once that's defined you can create the database with,

    rake db:create

#### Compile Pending Migrations

Then run any pending database migrations.

    rake db:migrate

All of which will build into a schema located at,

    /myapp/db/schema.rb

### Custom Tasks

You can also write custom RAKE tasks to do other things, 

#### What to put in them

Here's a simple rake task,

    task :sayHello do
      puts "Hello World"
    end

#### Where to save your Scripts

Simple, in the tasks directory,

    /myapp/lib/tasks

e.g.

    /myapp/lib/tasks/sayhello.rake

#### And to Run ?

    rake sayHello

Returns...

    Hello World

More Info at...

* [tutorial](http://www.railsenvy.com/2007/6/11/ruby-on-rails-rake-tutorial)

