---
layout: post
title: Ferreting Full Text Search
category: ruby
---

Got the full-text searching working with the blogging engine, plus it's really fast using the **Ferret** gem and **Will Paginate**.

First grab the necessary gems,

    sudo gem install ferret acts_as_ferret will_paginate

Then,

    require 'will_paginate'
    require 'acts_as_ferret'

Next up I defined the elements to search against in the target model (here **app/model/article.rb**)

    acts_as_ferret :fields => [:title, :body, :cached_tag_list]

And then altered the search method to...

    @articles = Article.paginate_search params[:search], :page => params[:page], :per_page => $blog.article_count

...you will need to add this class method to handle the pagination with Will Paginate

    module ActsAsFerret
      module ClassMethods
        def paginate_search(query, options = {})
          page, per_page, total = wp_parse_options(options)
          pager = WillPaginate::Collection.new(page, per_page, total)
          options.merge!(:offset => pager.offset, :limit => per_page)
          result = find_by_contents(query, options)
          returning WillPaginate::Collection.new(page, per_page, result.total_hits) do |pager|
            pager.replace result
          end
        end
      end
    end

...thanks to [opensoul.org](http://opensoul.org/2007/8/17/acts_as_ferret-will_paginate) for this solution.

Works like a charm ;-)
