---
layout: post
title: BlackListing and Hotmails spambox
category: thoughts
keywords: "blacklisting, hotmail, email spam, spam emails, yahoomail, gmail, yahoo inbox"
---

An annoying thing about building an email system is the fear of your server's IP getting accidentally logged on one of the many Anti-Spam blacklisting sites.

These site's basically record who they think is sending spam emails, so if they think you're one of the bad guys you go in their book; which as you can imagine services like GMail, YahooMail and Hotmail reference these to gauge bad senders.  

To check if you've been unintentionally listed;

* First use [SamSpade.org](http://samspade.org/) to get your site's IP Address
* Then type that IP in [EmailStuff.Org](http://emailstuff.org/) to check if you've been blacklisted.

Most site's will allow you to request removal from their black-lists without too much of a problem.

#### Hotmail's SpamBox

Another thing i'm trying to figure out is how to stop emails my webapp sends from going into into Hotmail's spam box, it's ok with Gmail and everyone else, but bad with MS Hotmail.

*'Hotmail have a propietry spam filter which is prone to false positives from some senders for no aparent reason. Hotmail wont tell you why it is classed as spam.'*

Thankfully **Thomas Glasgow** has suggested that if you should first send an email from YahooMail to your site, then reply back to YahooMail; YahooMail should then interpret that as a good site and stop doing this.

Not sure whether it works for Hotmail but worth a shot.
