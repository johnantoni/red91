---
layout: post
title: Firefox and NTLM
category: browser
---

<img class="alignright" src="/assets/407815130_be4800a86d_m.jpg" alt="" /><br />
<br />
Here's a great tip to get Firefox working with NTLM / NT Authentication.<br />
<ol><li>open firefox, type <strong>about:config</strong> into the address bar and press enter</li><li>now navigate to the <strong>network.automatic-ntlm-auth.trusted-uris</strong> parameter</li><li>double click it and enter your network's winroute host name (e.g. <strong>mynetwork.company.com</strong> )<br />
</li><li><strong>click ok</strong>, this setting is now active and can be used straight away without a restart.</li><li>navigate to your company's website (the one using NTLM) and enjoy.</li></ol>Finally no more username popup boxes,<br />
<br />
Cool!!
