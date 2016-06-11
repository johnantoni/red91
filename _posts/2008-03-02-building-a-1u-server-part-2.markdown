---
layout: post
title: Building a 1U Server, Part 2
category: tutorial
---

After a night-long search for parts and voltage configurations I've wound up with a pretty nice shopping list.

#### Discussion

Started a little discussion over in my favourite Ruby Forum about the subject, really impressed by what some of the guys have offered.

* [Ruby Forum Discussion](http://www.ruby-forum.com/topic/144500)

#### But Power?

Yep that's an issue, the whole 0.5A issue is primarily down to the colo provider.  Normal servers run at 1.5 to 2.0A power usage and cost a fair bit to run, however if you can build a server within the 0.5A limit then the cost is less and hence the provider i've chosen charges less.

The trick is building a box which gives you a decent amount of power within the limit, thankfully though with things the way they are there's suddenly a lot of low power options available which still give you a lot of bang for your buck; so the challenge shouldn't be that big a deal.

#### How Much Power?

So 0.5A is 120 watts (aka 120 volts).  Problem is most PSU's don't run at full capacity, so you're probably dealing with 85 watts in all; so be careful what you choose, over-estimating each part to be sure.

If it says only 45w, mark it down as 50w just to give yourself some room.

#### Ok, What you Buying?

Here's the shopping list...

    CPU: AMD A64 3600 X2 AM2
    cost: 45w

After tracking down specs from various sources I've found this processor only sucks around 45w of power at full steam.  It's judged by it's TDP, Thermal Design Power; the maximum cost the cpu would use running serious apps.  The new AM2 socket processors run at a lower power so a good choice to keep the consumption down.  The AMD chips also include Cool-n-Quiet which is an essential part of this plan, something that shouldn't be ignored as it keeps the processor running cooler and with lesser power drain under severe conditions.

    BOARD: ASUS M2A-VM (HDMI)
    cost: unknown (reckon 10w)

Don't know about the connector, may have to get an HDMI > VGA adapter to plug it to my LCD but this board is rated pretty good.  It's got an onboard graphics card (ATI), and enough slots for the memory sticks and SATA drives.  The nVidia chipsets draw more power so avoid those.

    HDD: WESTERN DIGITAL SCORPIO 320GB SATA
    cost: 2.5w each (5w total)

These baby's are actually tiny laptop hard drives from Western Digital, my prefered HDD supplier, and run at a lower voltage to be really hit the mark.  Normal drives will soak up 8-9w of power and make more heat.  These will be setup in a RAID 1 (mirrored) configuration, giving me a dynamic backup copy of the O/S + Files; if one goes down the other takes over and being small they shouldn't heat up too much.

    MEMORY: CORSAIR XMS2 DDR2 2GB PC2-6400 x2
    cost: 1.2w each (2.4w total)

I haven't had much problem with Corsair sticks in the past, they've usually been pretty reliable so these should fit the bill well.  They're low-power chips so shouldn't draw that much power and run fast giving less of a chance of bottlenecking the system at it's most critical point, matched and they should run smoothly.

    HEATSINK: Dynatron A48G
    cost: 8.4w

This little buddy can easily cool the cpu down to optimum temperatures and blow air thru the side, specifically for 1U cases as we don't have much height to play with; a 1U case only being 1.75" high from the board.

In total the parts i've chosen should total...

    2.4w + 5w + 10w + 45w + 8.4 = 70.8w

Nice and with my headroom of Max 120w and Min 85w sounds about right, factor in a couple of fans soaking up 1.5watts each and I should be within the grounds.

Choosing laptop hard-drives also reduces the heat dissipated, as the hotter things run the more power they soak up; especially true for the CPU as at 45'c it'll soak 40w and 60-70 it'll soak 60+w. 

Still hunting for the perfect fit, sometimes this really feels like Apollo 13 territory,

    Technician: How much power have we got to work with?
    John Aaron: Barely enough to run this coffee pot for nine hours
