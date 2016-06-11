---
layout: post
title: Reading CSV Files
category: ruby
---

Had problems reading a CSV file I got => **illegal quoting on line 1**

Problem was down to how the line endings were formatted, thankfully re-saving the file in TextMate as **UTF-8** and using **LF** line endings fixed the problem.

    require 'fastercsv'
    f = "#{RAILS_ROOT}/data.csv"
    FasterCSV.open(f, {:quote_char => '"', :force_quotes => true} ) do |file|
      file.each do |row|
        .. process data ..
      end
    end

