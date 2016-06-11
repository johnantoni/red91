---
layout: post
title: NET SSH Fingerprint Faults
category: linux
---

Had a real headache today with NET::SSH complaining the remote host's fingerprint id didn't match up and thus it wasn't going to play ball.

#### Refreshing Your SSH Fingerprint

Thankfully a fix!

[link](http://blog.internautdesign.com/2007/8/9/fix-net-ssh-error-sometimes-seen-with-capistrano/comments/132#comment-132)

    require 'rubygems'
    require 'net/ssh'
    include Net
    domain = 'www.mydomain.com' # insert IP address or domain name here
    begin
    Net::SSH.start(domain, 'deploy') do |ssh|
    # ...
    end
    rescue Net::SSH::HostKeyMismatch => e
    puts "remembering new key: #{e.fingerprint}"
    e.remember_host!
    retry
    end

Basically open up IRB in the console and alter the 'domain' to be your remote target.  

'deploy' is the name of the user account you have used to setup your Rails app in your deploy.rb file.

Remember this 'deploy' account needs to be already created on your target server, otherwise it won't know what your talking about.

If it fails, try using 'root'

Then when you run the IRB script NET::SSH will remember the new fingerprint and thus your cap commands will start working again.

Thank god I found that, saved my neck he did.

#### ...or Totally Ignoring It?

Now on top of this if you still get problems you can tell NET::SSH to totally ignore checking whether the key matches or not, this is good if all your normal SSH connections are fine but the Ruby NET::SSH library still won't play ball and you just want it working.

If you've put in a firewall on your Linux box via iptables you should be protected anyway, so not many security issues there.

This IRB script will tell NET::SSH to stop being paranoid and let you do your job.

    require 'rubygems'
    require 'net/ssh'
    include Net
    domain = 'www.mydomain.com'
    begin
    Net::SSH.start(domain, 'deploy', :paranoid => false) do |ssh|
    # ...
    end
    end

Replace mydomain.com with your domain name and it'll get the message and let you do your job, bypassing it's fingerprint match.


John.
