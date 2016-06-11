---
layout: post
title: Deploy to iPhone
category: apple
---

## Download the SDK

First off hit the [Apple Developer Connection website](http://developer.apple.com/) and register for an iPhone Developer Account, you can download the iPhone SDK (weighing in at 2.3gb) without paying the $99 / £59 but if your going to develop for the iPhone and you've got one or an iTouch you might as well do the whole thing.  The licence lasts 12 months after which you need to renew each year and you'll get all the cool beta kits.

Once you've registered, paid the money, downloaded the SDK and installed it let's move on.

## Certificates

While on the site, you'll need to create your team, get your iPhone device ID registered, then generate your Development certificate and Distribution certificate; along with your provisioning profile files.  

Once you've downloaded them, install the Key files (has the *.cer* extension) into your KeyChain (double-click the downloaded key files); should ask you for your user password to install them in.

Important bit next.

## Apple WWDRCA file

Download the Apple World Wide Developer RCA file [http://developer.apple.com/certificationauthority/AppleWWDRCA.cer](http://developer.apple.com/certificationauthority/AppleWWDRCA.cer) and double-click that to add it to your KeyChain, this should turn your Developer & Distribution certificates green and active.

## Check those Certificates

Fire up Keychain Access, select the *Login* keychain, and *My Certificates*; you should see your Developer & Distribution iPhone certificates, select them and they should show green ticks with *This certificate is valid*.  

Make sure their trust level is *Use System Defaults* and they're in the *Login* keychain, either of these three things don't happen and you won't be able to deploy to your iPhone / iTouch device.

## Provisioning Certificates

Another important stage, make sure your iPhone / iTouch is plugged in, fire up XCode and click *Window / Organiser*; here you'll be able to deploy your provisioning certificates to your device.  Select *IPhone Development / Provisioning Profiles* and drop in your two profile files into here, select *Devices* and your device and in the central area you should see those two profiles now copied and embedded into your device.

## Deploy

Next up with XCode running and your iPhone app built;

* In the drop-down, select the Active SDK to *IPhone Device*
* In the *Groups & Files* area, select *Target*, expand it and select your target file, hit the *Info button*
* In the *Properties* tab, make sure your identifier is the same as your AppID, (e.g. com.myself.appname)
* Select the *Build* tab and scroll down till you see *Code Signing Identity* and you should see your two active profiles (generated from your certificates + provisioning profiles)
* Select the *Developer* one for now, close the dialog and hit *Build and Run*

This will now build your app and send it to your device.

If all goes well, put your feet up, you've just done one of the hardest tasks of IPhone app development; well done!
