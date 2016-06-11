---
layout: post
title: C Sharp Crib Sheet
category: .net
---

string b = @"hello
p. stuff"

@ means string must be displayed like written, on two lines

<hr />

Arithmetic Overflow

checked(b2)
p. unchecked(b2)

checked = means expression 'b2' value does not exceed type

<hr />

b2?
<br />+++b2 b2+++
<br /> >= <= == != ++

end lines with ;

<hr />

if (b2 == b3)
<br />{ code }
<br />else if (b2 > b3)
<br />{ code }

<hr />

switch(x) {
<br />case 1:
<br />----;
<br />break;
<br />default:
<br />----;
<br />break;
<br />}

<hr />

while (b2 = 2) { b2++; }

<hr />

do i++ while (i<5);

<hr />

for (int i=0l i<0 i++) { } 

<hr />

foreach (Stick stick in dynamite) { stick++; }

<hr />

return b2;

return = return value / object to calling code;

<hr />

namespace mycompany.myproduct.drawing { }

namespace = enables you to group related types into a hierarchical categorization

<hr />

inheritance

class URL : Location { // }

: <= allows URL to inherit the methods of the Location class

<hr />

polymorphism = ability to perform same operation on many types

virtual function members = each type can implement a shared characteristic in it's own way.  implements shared characteristic /  method in it's own way

<hr />

abstract class = shell of a class, no implementation, cannot use directly, have inherit / build upon

abstract class Location { public abstract void Launch(); }

class URL : Location { public override void Launch() {} }

override = override inherited classes methods, in this example i'm using an abstract class as a sort of template for something new

<hr />

public new void Foo() {}

new = hides method from outside class

<hr />

public = type / members fully accessible

internal = type / members accessible only from within

private = type / member accessible only from within

protected = cannot modify, class available within class

<hr />

difference between classes & structs ?

class = fully supports inheritance, reference types, can have destructor, can have custom parameterless constructor

struct = simple, value types, can have constructor

<hr />

instance = (default), associated with an instance of a type

static = associated with a type itself

public static void Me() { }

<hr />

public const double PI = 3.141

const = constant, always uppercase

<hr />

ref = pass by reference, change value of variable given permanently

static void Foo(ref int p) { ++p; }

<hr />

params = allows method to accept any number of parameters

static int Add(params int[] iarr) { foreach (int i in iarr) {...} }

<hr />

constructor = specify how new instances of a class get created, what variables get initialised with, etc.

class wow { public wow() : this(5) {}

make method same name as class to do this, here we're self-referencing the class using the 'this' keyword, returning 5 to the calling class

static constructors = can define only one static constructor

<hr /> 

destructor = specify how instances of a class get destroyed, connections get closed, etc.

class wow { ~wow() { console.writeline("boom"); } }

~ defines a destructor, plus make it the same name as the class, here writing 'boom' to the console when the class is destroyed

<hr />

this = self-referencing, denotes a variable that is a reference to a instance, allows members to reference own class

public dude(string name) { this.name = name; }
p. public void hi(dude a) { if a!=this) {..} }

a common use of 'this' is to unambiguate a field name from a parameter name.

e.g. = self-reference the current class instance

JAVA

# class Numbers {
# private int aNumber = 42;
# 
#      public int returnANumber() 
#      {
#         return this.aNumber;
#      }
#      public int returnANumber(int intIn) 
#      {
#         return (intIn * this.returnANumber()); 
#      }
#
#      public static void main(String[] args) {
#
#         Numbers numberTest = new Numbers();
#  
#         System.out.println("The Number is " +
#             numberTest.returnANumber() );
#         //output is: The Number is 42
#         System.out.println("The Number is " + 
#            numberTest.returnANumber(2) );    
#         //output is: The Number is 84   
#      }    
#   }

see how the above example works, a variable is defined inside the class, a method is defined for when no parameters are given assigning it 42.  when parameters are given it runs a different method multiplying 42 with the number given.  however it's referencing (can modify directly & permanetly) the value inside it's own class.

also in JAVA,
p. super.getName(a); = use super. to call methods in the parent class


<hr />

base = similar to 'this', except that it accesses overridden or hidden base-class function members

basically allows you to call the original function of a class before it got replaced by one with the same name / overridden

base.Introduce(p);

<hr />

interfaces = like a pure abstract class, but provides a spec rather than implementation of it's members

public interface Me { void Delete(); }

here no code is written, just a function is defined, which when inherited by another class (using : ) can then be coded.

basically a template class, an empty shell

<hr />

arrays

char[] vowels = new char[] ('a', 'e');
p. console.writeline(vowels[ 2 ]);

multidimensional arrays

int [][][] matrix = new int [3][][];
p. matrix[x][y][z] = new int [5];

= vowels.Length;
= matrix.GetLength(2)

<hr />

enums = specify a group of named numeric constants

<hr />

events

get { return pos; }
set { r = 44; }

<hr />

try { }
p. catch { }
<br />finally { }

basically you try something risky, you catch any error codes and then you finally clear up your mess

<hr />

ArrayList = dynamically sized array of objects that implement the IList interface

HashTable = standard dictionary layout (key/value)

<hr />

StringBuilder class

can grow unbound or upto a pre-defined maximum, much better than just concatenating a string.

it starts at a pre-defined size and grows dynamically as more string data is added.

StringBuilder sb = new StringBuilder('hello ');
<br />sb.Append('world');
<br />sb[12] = '!';
<br />console.writeline(sb); // hello world

<hr />

// = comments
