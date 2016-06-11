---
layout: post
title: Building a 1U Server
category: tutorial
---

Shocked my boss yesterday after telling him i'm building my own rackmount server, well i've built machines for about 20 years and most of those have been custom jobs with 3 running Ubuntu Server for my Rails projects so doing this is the next logical step.

Here's the things I've dug up, which should help you out if you ever decide to go down the same route.

#### Co-location + Power Limit

For this I've found a company in Manchester (uk) who will host it for me at £32 a-month as long as the power usage doesn't spike over 0.5A

So with a few calculations, that gives me...

    0.5a => 120 watts

The company is called [RapidSwitch](http://www.rapidswitch.com/)

#### Case

Next up the case and I've gone for a SuperMicro 1U case, problem is I need specific boards to slide in and so this...

    M2N-MX SE Plus

But still looking around for the perfect fit.

#### Processor

This will probably be an AMD 64 dual core CPU, as they're power efficient, reliable and the O/S i'm choosing (Fedora 8) fits rather well with them.

#### PSU

For this I'm sourcing the most power efficient model as most PSU's only run at 50-60% operating efficiency.

* [Sparkle 1U 220W ATX](http://www.rackmountnet.com/Power-Supply/SPARKLE/SPARKLE-1U-220W-ATX-12V-Power-Supply-80Plus-Compliant-SPI220LE/)

#### CPU Heatsink

ThermalTake have a good array at...

* [ThermalTake 1U Coolers](http://www.thermaltakeusa.com/2005/coolers/rackmount/menu.htm)

Not sure about the availability but your 1U case is 1.75" high so it's a big factor.

#### HDD

I'm picking 2x 500gb Western Digital Caviar drives, I've always used them, they're not special but reliable.

This'll go in a RAID 1 configuration similar to my NAS box at home, doubling the HDD read speed but lowering the write speed due to the mirroring, reliable though.

#### Memory

2 sticks of 2gb memory, I'd choose Samsung as they're cheap and just work but having trouble sourcing the OEM sticks, may just go with some corsair sticks.

#### Power Calculator

Found a power calculator which should give me a judge on how much power I'm gonna be using,

* [Power Calculator](http://www.extreme.outervision.com/PSUEngine)

Probably not that accurate but gives me a ballpark figure, with the hardware I've chosen:

* AMD Athlon 64 X2 5000+ 2600 CPU AM2
* 2x WD SATA Drives
* 2x DDR2 2GB Sticks
* (graphics card on-chipset)
* 1x 80mm fan, 2x 120mm fans

All comes up to needing a PSU of 177 watts, which fits in with my Sparkle low-power 220w PSU but might be a might too high for the power coming in.

#### Finally

It's a learning process and one that'll probably not be as easy as it looks but worth the effort for the experience.
