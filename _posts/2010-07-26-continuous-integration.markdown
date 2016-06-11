---
layout: post
title: Continuous Integration
category: thoughts
---

Notes from [Continuous Deployment at Digg.com](http://about.digg.com/blog/continuous-deployment-code-review-and-pre-tested-commits-digg4)...

> when developers fix a bug or add a new feature, there's no need to wait for a scheduled release. Instead, the change can go live right away.

First, there are the tools we were already using before moving to continuous deployment: git for source control, Hudson for continuous integration and build management, Selenium for UI testing (via the ridiculously handy Sauce OnDemand service from Sauce Labs), and puppet for managing what's running on our servers. The major addition to that stack has been Gerrit, a code review system for git, originating with Google's Android development group. Mandatory code review for all changes can seem like a pain, but there's nothing like having another developer actually look at your code to find the sort of design snafus automated testing may not catch.

So...

* Git => code => [http://github.com](http://github.com)
* Hudson => integration + build => java .war [http://hudson-labs.org/](http://hudson-labs.org/)
* Selenium => ui => [http://seleniumhq.org/](http://seleniumhq.org/) (ide + rc)
* ….on [Sauce](http://saucelabs.com/how-it-works)
* Puppet => mirroring software + setup on multiple machines => [http://www.puppetlabs.com/](http://www.puppetlabs.com/)
* Gerrit => git code review => [http://code.google.com/p/gerrit/](http://code.google.com/p/gerrit/)
* Gerritt provides a verified flag for the code being ok’d
* …plugin for Hudson [http://wiki.hudson-ci.org/display/HUDSON/Gerrit+Trigger](http://wiki.hudson-ci.org/display/HUDSON/Gerrit+Trigger)

Once code is reviewed by another developer, verified by Hudson build it can be merged down to the master branch.

…when a change hits the master, a full build is run, with the full set of unit tests run against the code.

…next the code is packaged and dropped into the staging environment, and selenium is tested against it

…if passed, we deploy the tested code to production

