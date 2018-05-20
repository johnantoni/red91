------------------------------------------------------------------------

layout: post\
title: Design Patterns\
category: programming\
----

> Design patterns are recurring solutions to software design problems
> you find again and again in real-world application development.

> Reusable solutions to commonly encountered programming challenges.

The Gang of Four (Gof) are categorized as the foundation of Design
Patterns. Narrowed down to 3 categories. *Creational*, *Structural*, and
*Behavioral*.

C\# provides code in:

-   *Structural*, uses type names as defined in the pattern definition
    and UML diagrams.
-   *Real-World*, situations where you may actually use them.

.NET provides a third:

-   **.NET Optimised**, situations that exploit built-in features within
    .NET

#### Creational

*Abstract*\
p. ...an instance of several families of classes (encapsulate multiple
classes into one but not providing it's own)

*Factory*\
p. ...an instance of several derived classes (e.g. build documents from
data)

*Prototype*\
p. ...specify type of objects to create, and create new objects by
copying the prototype / template (create new color palette using prior
colors)

*Singleton*\
p. ...a class with only one instance of it existing

#### Structural

*Adaptor*\
p. ...converts the interface of one class to fit the interface of
another (e.g. providing an adaptor for a legacy interface)

*Decorator*\
p. ...adds extra responsibilities / functionality to an object
dynamically (e.g. adding off-road facility to a standard car obect)

#### Behavioral

*Iterator*\
p. ...provides a way to access aggregate elements without exposing it's
core structure (e.g. iterate over a collection of objects)

*Observer*\
p. ...provides one-to-many relationship between an object and it's
members. So if one changes state all the others know about it. (e.g.
stock checking, when a stock price changes, all bidders are notified)

...note, there are many other Design Pattern models, this is merely a
small collection to get you started.

All the best,

John.
