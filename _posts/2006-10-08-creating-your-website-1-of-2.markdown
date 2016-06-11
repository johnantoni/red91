---
layout: post
title: Building a Website, part I
category: tutorial
---

Ok, i've been asked a couple of times so i thought i'd write a how-to, so here goes.


First off, deciding your name.

This is the toughest part, there are many ways to accomplish this.  You could try brainstorming, think of a favourite colour (red), your hobbies (guitar), something you cherish (family), things you like to buy (ipods?, mushrooms), your favourite number (7), car (ford thunderbird), dogs name, frankly anything will do, just write a whole load of single words on a piece of paper and see what you come up with.

You might think about what your site wants to attain, like youtube (your tv/video tube), google (eyes - google), break out a thesaurus and see if you can come up with something there.

There are also sites which can help you decide cool web 2.0 names (google for that), and name pickers linked to the whois database (a worldwide registry of site names, taken & available).

Frankly this is the toughest part.  For my site i started off with a colour i like (RED), then searched the whois database for variations on red.. to grab, i wanted a .com as i never got very far with .co.uk or .net and i also wanted something that i could say downn the phone and people would understand.  so i chose 91 and those two numbers are very different to each other and hard to mis-hear.  I added them together and bam, www.red91.com was born.  Luckily it was aviailable on the whois database (google for what i mean) and presto i bought the domain name.

Now buying a domain name is not very difficult, there are a lot of providers out there, just choose one and your away.  But saying that there are a lot of bad men out there so first off, google 'best domain hosts', 'top 10 host', 'domain review', something like that to find a list of the best domain host providers out there.

The one i went for is a US company called www.dreamhosts.com, they've got a very good reputation and provide excellent support, also at 9 dollars a year for a .com you can't really complain (actually signed up till 2012!), considering for a UK company your looking at 19.99 per year it makes sense.  Now you ask why have a US site surely a UK one would be better for support, well i agree but frankly if the domain hoster is only hosting the domain it's not going to be rocket science to keep it running, if you buy into full hosting then maybe but for a small blog or personal site you usually don't have much money to play around with.

Note: Once you've bought your domain, it'll take 24hrs to propogate thru the internet so you'll have to wait, same deal with everyone i'm afraid.  


Ok now onto file storage.

Now storage is a different issue, next decide how much your going to need?.  1GB, 250MB, 20GB?, what is it going to store, video, movies, high-res photos, podcasts, this is something you need to decide beforehand but generally if you choose a good provider they should be able to grow with your means.

Now what i've done with my site is have a large amount of the image content actually hosted by flickr.com, it's a very good photography social networking site and allows you to get static links to photos stored by them.  So you can link/embed photos on to your site and not have to worry about storing them or archiving them as that'll be handed by them (you can even get them to archive your photos on cd/dvd and mail them to you!); thoroughly recommend them.

Anyway, at the first stage you could've opted to have storage & hosting provided by your domain supplier; if so you can skip this bit but i'd still read it as we'll talk about what you need to run certain stuff...


PHP? What do i need?

Now if your planning on having your own blog, the first thing your going to need is a supplier supporting php (like a programming language, but opensource and designed for sites, lovely thing).  next is a means to store your content, MySQL (a database platform, like SQL Server or MS Access, but again opensource/aka free, and very powerful and light).  Then email accounts (you don't really need these but you get them with most suppliers, i just use gmail).  That should get you sorted.


Buying storage and setting it up.

Now once you've chosen your file hoster (if your buying separately, best idea, then if you change file hoster you can just re-hook up your domain yourself) you'll then need to hook them up to your domain hoster.  The file hoster i chose was www.textdrive.com, theyre really good and very hot on support and software updates, thoroughly recommend them, i've got the 1gb plan giving me about 3gb bandwidth (people reading from you) per month at 99 pounds a year.

Once you've bought the file hoster, go into their admin site and change your 'site' name to the same one as the domain you bought with the separate provider (eg. red91.com).  Now you'll need to hook the domain hoster's DNS with your file hoster's DNS (so if someone goes to www.red91.com, the domain provider will pull the site's files from the file hoster's hard drives, not difficult).  DNS mean Domain Naming Service.

So now find out what your file hoster's DNS server's are called, they usually list them in an faq, otherwise just phone or email them.  For textdrive it's something like dns1.textdrive.com, dns2.textdrive.com and dns3.textdrive.com.

Now go into your domain hoster's admin site and navigate to their DNS area for your domain name and change what they've got e.g. 'dns1.dreamhosts.com, dns2.dreamhosts.com, dns3.dreamhosts.com' to your file hoster's ones (should be 3 text fields to change), click save.

Now you will have to wait 24hrs, sometimes less, and it will propogate thru the web like last time and your away.

p.s.
if you bought your file hosting from the same company who provided your domain hosting then you don't need to fiddle with dns names and things, but it's alwasy good to know.


on to stage 2.
