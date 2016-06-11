---
layout: post
title: Thin Rails Server and Fedora Cleanup
category: ruby
---

#### Thin

Thanks to Thomas Glasgow, I've been told of a new lighter Mongrel web server called THIN.  It's more-so a cut-down version of the Mongrel Web Server, with the added power of an Event machine and Rack parser.

Haven't tested it out, but intend to try it out on one of my apps, install it with...

    sudo gem install thin

* [mongrel thin](http://code.macournoyer.com/thin/)

#### Thin - Rake Task

* [thin startup scripts](http://groups.google.com/group/thin-ruby/browse_thread/thread/a639d1e20a1b0d75)

With the above I found a startup script similar to Monrel's .yml config file.

    namespace :thin do
      namespace :cluster do
    
        desc 'Start thin cluster'
        task :start => :environment do
          `cd #{RAILS_ROOT}`
          port_range = RAILS_ENV == 'development' ? 3 : 8
          (ENV['SIZE'] ? ENV['SIZE'].to_i : 4).times do |i|
            Thread.new do
               port = ENV['PORT'] ? ENV['PORT'].to_i + i : ("#{port_range}
    %03d" % i)
              str  = "thin start -d -p#{port} -Ptmp/pids/thin-#{port}.pid"
              str += " -e#{RAILS_ENV}"
              puts "Starting server on port #{port}..."
              `#{str}`
            end
          end
        end
    
        desc 'Stop all thin clusters'
        task :stop => :environment do
          `cd #{RAILS_ROOT}`
          Dir.new("#{RAILS_ROOT}/tmp/pids").each do |file|
            Thread.new do
              if file.starts_with?("thin-")
                str  = "thin stop -Ptmp/pids/#{file}"
                puts "Stopping server on port #{file[/\d+/]}..."
                `#{str}`
              end
            end
          end
        end
    
      end
    end 
    
copy and paste it into a .rake task in your apps /lib/tasks directory.

then fire with...

    rake thin:cluster:start
    rake thin:cluster:stop 

and...

    rake thin:cluster:start RAILS_ENV=production SIZE=10 PORT=8000 

* SIZE = cluster size (2 is usually enough)
* RAILS_ENV = environment (production, development or test)
* PORT = port range to start from (for 2 clusters it'll be 8000 and 8001)

Thanks to *Stephen Celis* for this.

#### Fedora Package Errors and Cleanups

Lately i've run into some problems with my Fedora package manager, inconsistent files and dropped repositories.  However I think I've managed to cleanup this problem by first cleaning up my package managers metadata, db cache and doing a general tidyup with...

    sudo yum clean all
    sudo yum clean metadata
    sudo yum clean dbcache

Then giving the once-over of my RPM repository, 

    sudo rpm -vv --initdb

This looked ok, but I wanted to make sure so I rebuilt my RPM repository,

    sudo rm -f /var/lib/rpm/__db*
    sudo rpmdb -vv --rebuilddb 

Now looking a little better,

Want to install Beryl + Compiz to get the 3D effects and cubed desktop next.

* [Beryl + Compiz](http://www.howtoforge.com/fedora7_beryl_compizfusion)

#### Update on Beryl

After hunting around I found that Beryl has been dropped in favour of Compiz, so don't go hunting for it because you won't find it.
