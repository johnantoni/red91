---
layout: post
title: JavaScript Dates
category: javascript
---

One sometimes misunderstood element of JavaScript is how it handles dates, so in this article I'm going to try and conquer that little confusion.

P.S.
Happy Christmas!!!

### Dates in Depth

#### Returning the Current Date

Simple,

    document.write(Date());

#### Creating a Date Object

First off you'll need to create a Date object, this is accomplished by...

    var d = new Date();

This creates a new variable with the type as a date object, named **d**, with the default value as the current date & time.

#### Setting it's Value

    var d = new Date("11/23/2007");

This will create a new Data object and set it's initial date to November 23rd 2007 (note it uses the American format mm/dd/yyyy).

You can set it's date afterwards with the .setFullYear();

    d.setFullYear(1997,11,3);

Using the format YYYY/MM/DD.

#### Days

To return the day value of a Date object do,

    document.write(d.getDate());  
    // returns => 23 from 23rd Nov 2006
    // (1..31)
    
    document.write(d.getDay());   
    // returns day of week value lands on, e.g. 2 for Monday for 23rd
    // (0..6)

Yes this can be confusing, getDay() does not return what you expect (e.g. 23 from 11/23/2007), but the numeric value for the day of the week the 23rd lands on, so if the 23rd lands on a Tuesday it'd be 3.  Use getDate() to return 23.

Setting the Day

    document.write(d.setDate(11));
    // sets the day digit to 11

#### Months

To return the month value of a Date object do,

    document.write(d.getMonth());
    // returns values from 0..11 (0=Jan 11=Dec)
    // (0..11)

Because Month is an array, you'll need to add 1 to it to return days from 1..12,

    document.write(d.getMonth()+1);
    // returns values from 1..12 (corrected by adding 1 to the value)

Setting the Month,

    d.setMonth(mm,dd);

	// e.g.
    document.write(d.setMonth(11,1));
	// set the month to December the 1st

#### Years

To return the Year value of an Date object do,

    document.write(d.getFullYear());
    // returns 2007 for 11/23/2007

Note, there was a function called getYear() but this returns a 2-4 digit number and is not recommended to be used; depreciated.

Setting the year,

    document.write(d.setFullYear(1992));
    // sets the year to 1992
    
    // also can be used like, 
    d.setFullYear(yyyy, mm, dd);

#### Time

To return the Time value of a Date object do,

    d.getTime();
    // returns the number of seconds from midnight

Adding seconds to a day, e.g. advance 1 day would be...

    d.setTime(86400);
    // adds 86400 seconds to the current date value
    // 86400 seconds = 1 day

#### Hours, Minutes, Seconds,

This can be done like,

    document.write(d.getHours());
    // (0..23), returns the hour of the day, 11 = 11 O'clock

    document.write(d.getMinutes());
    // (0..59), returns the minutes, 23 = 23 minutes past

    document.write(d.getSeconds());
    // (0..59), returns the seconds, 12 = 12 seconds past

    document.write(d.getMilliseconds());
    // (0..999), returns the milliseconds past
    // 1000 milliseconds in a second

Setting the values,

    d.setHours(hour,min,sec,milli);
    
    // so..
    document.write(d.setHours(12));
    // set to 12 noon

    d.setMinutes(min,sec,milli);
    document.write(d.setMinutes(2));

    d.setSeconds(sec,milli);

    d.setMilliseconds(milli);

#### To String

To return a Date object as a String value,

    document.write(d.toString());
    // returns Tue Dec 25 2007 12:44:05 GMT+0000 (GMT)

### Calculations

#### Days in Month

This function returns the max days in the chosen month, so 2, 2008 returns => 29.

    function daysInMonth(iMonth, iYear)
    {
    return 32 - new Date(iYear, iMonth, 32).getDate();
    }

Thanks goes to [Charlie](http://snippets.dzone.com/posts/show/2099) for that...

#### Comparing Dates

    if (Date.parse("11/11/2007") < Date.parse("11/11/2008")) {
    document.write("wooah!");
    }

**NOTE:** remember to use a lowercase **if** rather than **If** otherwise it'll throw up a **missing ;** error.
