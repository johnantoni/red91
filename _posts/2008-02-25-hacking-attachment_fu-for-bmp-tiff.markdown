---
layout: post
title: Hacking Attachment_Fu for bmp and tiff uploads
category: ruby
---

Quick hack, recently I needed to get the Rails Attachment_Fu image uploader to support TIFF & BMP image uploads.  Took a fair bit to work out but in the end I hacked it by doing this.

First open the file...

    /vendor/plugins/attachment_fu/technoweenie/attachment_fu/attachment_fu.rb

In this file look for @@content_types and add these to the end...
    
    , 'image/bmp', 'image/tiff'

Quick & dirty but allows Attachment_Fu and RMagick to support BMP and TIFF uploads, along with all the rest.
