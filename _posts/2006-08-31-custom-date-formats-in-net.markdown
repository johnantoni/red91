---
layout: post
title: Custom Date Formats in .NET
category: .net
keywords: ".net, date format, formatting, dateformatstring"
---

got stuck on this one so i thought best to post here to share my findings.

here's some code which defines a date format for a cell in a grid control

<blockquote><strong>DataFormatString="&lt;nobr&gt;{0:g}&lt;/nobr&gt;"</strong> </blockquote>

the 'g' will return the date & time in general format (unformatted).  to format it as dd/mm/yy change it to : {0:dd/mm/yy}

and to further change it's formatting, try the links below,

<em>custom date formatting</em>
<a href="http://msdn2.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers">http://msdn2.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers</a>

<em>custom numeric formatting</em>
<a href="http://msdn2.microsoft.com/en-us/library/0c899ak8.aspx">http://msdn2.microsoft.com/en-us/library/0c899ak8.aspx</a>
