------------------------------------------------------------------------

layout: post\
title: Rails Routes and Sharing Controllers\
category: ruby\
----

One of the key factors in developing a web app is to determine it's site
structure and how each section permeates to another.

#### Routes

When your user navigates to your web address, which controller/view is
he going to see?. This is managed by Rails **Routes** which is an
efficient upgrade from mod\_rewrite rules in PHP.

to start...

go into your rails webapps root directory and open routes.rb in /config.
this controls how the user perceives the webs look.

so scroll down till you see...\
bq. map.connect ':controller/:action/:id.:format'\
map.connect ':controller/:action/:id'

and above this you can add...\
bq. map.connect '', :controller =\> 'account', :action =\> 'signup'

make sure you rename or delete the index.html file in /public otherwise
this won't work.

now everytime someone goes to www.yours.com/ it'll navigate them to the
**signup** action of the **account** controller. this is rather than
having www.yours.com/account/signup in the browser's address bar.

of course, when they navigate away it'll change to /account/list or
whatever actions you've setup but at least now you can catch out users
from jumping to the root and getting errors or redirecting them to the
path manually.

note: the routes operate on precedence, so the one first will knock out
the second, etc.

#### Sharing Controllers

when writing your app you may want to redirect an action in one view to
an action in another view. e.g. click on the 'posts' link to view your
'posts'; while your in the 'accounts' view/controller.

so to do this, add this inside your method for jumping to your posts

> redirect\_to :controller =\> 'posts', :action =\> 'index'

find more at [rails
api](http://api.rubyonrails.org/classes/ActionController/Base.html#M000262)
