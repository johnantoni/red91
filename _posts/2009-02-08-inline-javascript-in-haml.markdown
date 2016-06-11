---
layout: post
title: Inline JavaScript in HAML + SEO
category: javascript
---

After putting together that microsite this weekend in HAML & Sinatra, I needed to do the usual SEO stuff inside the index.haml document; thankfully HAML 2.0+ comes with a filter for Javascript.

Example HAML'd Google Analytics Code

    :javascript
      var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
      document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
      try {
        var pageTracker = _gat._getTracker("UA-393335-18");
        pageTracker._trackPageview();
      } catch(err) {}

Next up my **robots.txt** file

    User-Agent: *
    Allow: /
    
    Disallow: /css/
    Disallow: /images/
    Disallow: /javascripts/
    
    Sitemap: http://www.mysite.com/sitemap.xml

And the **sitemap.xml**

    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>http://www.mysite.com/</loc>
        <changefreq>daily</changefreq>
      </url>
    </urlset>

...ok the last two i'll get generated via ruby, but they're good examples ;-)
