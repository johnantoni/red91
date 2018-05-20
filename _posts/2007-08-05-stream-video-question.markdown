------------------------------------------------------------------------

layout: post\
title: Streaming Video Question...\
category: .net\
----

One day I was stuck with a question and got a bit puzzled...

> 'heres the scenario, youve got a music concert going and its streaming
> from your .net site handling 2,000 users well, suddenly it starts and
> the users rise to 200,000 and the server keels over, what do you do?'

When you think about it, it's actually really really easy...

Think about it, the server is running at max CPU capacity, you can't
reboot anything but you need to do something now to keep these 198,000
new users happy and watching the video stream.

Now currently the stream sits within a .net web page and really choking.
So, as the video is embedded into the page and coming from a remote
server, why not simply create a new static HTML page, add the embedded
video stream code (similar to embedding a Flash movie on your page) and
point all the users to this static page.

Suddenly your servers back to life and things are running smoothly.

Why?, because .NET comes with a lot of baggage, the .net framework,
resource libraries, dll's, etc. tons which eventually can bog down a
server if it's under pressure and all the users really need to see is
the video stream and no fancy extra bits.

Suddenly they're happy, your happy and your boss is happy (plus you can
come in the next day, without having to clear your desk...)

All good,

John.
