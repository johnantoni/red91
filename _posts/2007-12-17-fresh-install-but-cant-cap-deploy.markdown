---
layout: post
title: Fresh Install but cannot CAP DEPLOY
category: ruby
---

If you're like me, setting up your machine with everything from your old, and run into the following error when running CAP DEPLOY...

    (Errno::ENOENT: No such file or directory - /tmp/501/SSHKeychain.socket)

Run this command,

    unset SSH_AUTH_SOCK

Sorted the problem out for me.
