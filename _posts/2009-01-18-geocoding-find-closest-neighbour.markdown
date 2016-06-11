---
layout: post
title: GeoCoding - Find Closest Neighbour
category: ruby
---

<a href="http://www.flickr.com/photos/indieflickr/3205056544/" title="World Map by John Griffiths, on Flickr"><img src="http://farm4.static.flickr.com/3513/3205056544_3d4247ce14.jpg" width="500" height="245" alt="World Map" /></a>

Today, after importing the geodata for all the postcodes in the UK I had to be able to determine which postcodes were in the closest vicinity to a fixed point.

This was a little work, the CSV wasn't in the best of condition; which had me banging my head against the wall with FasterCSV with it's stringent type ruling but eventually fixed that.

What I did was grab the first record that closely matches what I'm after and then build up the query to find it's closest neighbours.

    zipcode = 'SW1'
    distance = '100'

    point = Geodata.find(:all, :conditions => ["postalcode = ?", zipcode], :limit => 1).first
    puts point.postalcode
      
    lng = point.longitude.to_f / 180 * Math::PI
    lat = point.latitude.to_f / 180 * Math::PI

    sql = "SELECT DISTINCT postalcode, place, 
      (6367.41*SQRT(2*(1-cos(RADIANS(latitude))*cos('#{lat}')*(sin(RADIANS(longitude))*sin('#{lng}')+cos(RADIANS(longitude))*cos('#{lng}'))-sin(RADIANS(latitude))* sin('#{lat}')))) 
      AS distance 
      FROM geodatas 
      WHERE (6367.41*SQRT(2*(1-cos(RADIANS(latitude))*cos('#{lat}')*(sin(RADIANS(longitude))*sin('#{lng}')+cos(RADIANS(longitude))*cos('#{lng}'))-sin(RADIANS(latitude))*sin('#{lat}'))) <= '#{distance}')
      ORDER BY distance"

    results = Geodata.find_by_sql(sql)
    
    results.each {|row| puts "postcode:#{row.postalcode} place:#{row.place} distance:#{row.distance.to_f.round}km"}

Probably still got some bugs but a stab in the right direction.
