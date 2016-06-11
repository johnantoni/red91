---
layout: post
title: Batch Processing in GIMP
category: linux
---

There's a tool called David's Batch Processor which allows you to batch process images within the free Graphic Image Manipulation Package (GIMP).

To install on Ubuntu Hardy, first...

    sudo aptitude install libgimp2.0-dev

Now download David's Batch Processor from [here](http://members.ozemail.com.au/~hodsond/dbp.html)

Extract the file and Terminal into the directory, now make & install the plugin...

    sudo make
    sudo make install

...if it still doesn't compile make sure you have build-essentials installed, which can be added via,

    sudo aptitude install build-essentials

After all this open GIMP (Application / Graphics / GIMP), Click the **Xtns** tab (next to **File**) and you should see **Batch Process..**; click it and you'll open David's Batch Processor.
