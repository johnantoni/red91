---
layout: post
title: Bean and OpenOffice Bullet Points
category: apple
---

![Bean](http://www.bean-osx.com/graphics/scrn-bean.jpg)

Ages ago I stumbled across this really nice & small word processing application called **Bean**.  Essentially it's like a cut-down Microsoft Word of OpenOffice but designed just for the basics, it handles all the major file formats great and for simple stuff works fine.

Check it out [here](http://www.bean-osx.com/Bean.html)

##### OpenOffice - convert .ODT to .DOC loses bulletpoints

Lately I've had to convert an OpenOffice document over to a Word .DOC document, which went smoothly but had because OpenOffice uses a Symbol library called **OpenSymbol** and Office uses **Symbol** it caused all the bullet points to be broken when converted across.

So to fix this open OpenOffice on your Mac, 

* Goto Tools > Options > OpenOffice.org > Fonts
* Enable "Apply replacement table"
* Select "Symbol" in the left-hand **Font** drop down, select "OpenSymbol" in the righthand "Replace with" dropdown.
* Press the checkmark to the right to add the substitution to the table. Make sure you check the Always box.

Now everytime you convert between formats your bulletpoints should appear correct.
