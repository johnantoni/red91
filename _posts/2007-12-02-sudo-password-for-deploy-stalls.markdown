---
layout: post
title: sudo password for deploy stalls
category: linux
---

With the latest version of Ubuntu, Gutsy 7.10, you may have started getting cases where you fire..

    cap setup_ssh_keys

and it just sits there saying...

    [sudo] password for deploy:

without giving you the option to enter the password.

you can fix this by adding this line in your **deploy.rb** file:

    set :sudo, "sudo -p Password:"

just after **scm :domain** like so:

    set :domain, "myapp.com"
    role :web, domain
    role :app, domain
    role :db,  domain, :primary => true
    role :scm, domain
    
    set :sudo, "sudo -p Password:"
    #add this line to stop it hanging

this should fix the problem, has done on my new Gutsy test box.

all the best,


John.
