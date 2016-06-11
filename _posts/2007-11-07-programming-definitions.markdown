---
layout: post
title: Software Testing
category: training
---

### Specialist Terms

#### Test Harness

* In software testing, a [Test Harness](http://en.wikipedia.org/wiki/Test_harness)
 or automated test framework is a collection of software and test data configured to test a program unit by running it under varying conditions and monitor its behavior and outputs. It has two main parts: the test execution engine and the test script repository.

* Test harnesses allow for the automation of tests. They can call functions with supplied parameters and print out and compare the results to the desired value. The test harness is a hook to the developed code, which can be tested using an automation framework.

#### Regression Testing

* [Regression testing](http://en.wikipedia.org/wiki/Regression_testing) is any type of software testing which seeks to uncover regression bugs. Regression bugs occur whenever software functionality that previously worked as desired, stops working or no longer works in the same way that was previously planned. Typically regression bugs occur as an unintended consequence of program changes.

* Common methods of regression testing include re-running previously run tests and checking whether previously fixed faults have re-emerged.

#### Unit Testing

* [Unit testing](http://en.wikipedia.org/wiki/Unit_testing) is a procedure used to validate that individual units of source code are working properly. A unit is the smallest testable part of an application. In procedural programming a unit may be an individual program, function, procedure, etc., while in object-oriented programming, the smallest unit is a method; which may belong to a base/super class, abstract class or derived/child class.

* Unit testing is the cornerstone of [Extreme Programming (XP)](http://en.wikipedia.org/wiki/Extreme_Programming), which relies on an automated unit testing framework. This automated unit testing framework can be either third party, e.g. xUnit, or created within the development group.

### Engineer Tests

#### Black box Testing

* Black box testing treats the software as a black-box without any understanding as to how the internals behave. Thus, the tester inputs data and only sees the output from the test object. 

* This level of testing usually requires thorough test cases to be provided to the tester who then can simply verify that for a given input, the output value (or behavior), is the same as the expected value specified in the test case.

#### White Box Testing

* When the tester has access to the internal data structures, code, and algorithms. 

* For this reason, unit testing and debugging can be classified as white-box testing and it usually requires writing code, or at a minimum, stepping through it, and thus requires more skill than the black-box tester. If the software in test is an interface or API of any sort, white-box testing is almost always required.

#### Grey Box Testing

* Grey box testing could be used in the context of testing a client-server environment when the tester has control over the input, inspects the value in a SQL database, and the output value, and then compares all three (the input, sql value, and output), to determine if the data got corrupt on the database insertion or retrieval.

### Acceptance Testing

#### Alpha Testing

* Alpha testing is simulated or actual operational testing by potential users/customers or an independent test team at the developers' site. Alpha testing is often employed for off-the-shelf software as a form of internal acceptance testing, before the software goes to beta testing.

#### Beta Testing

* Beta testing comes after alpha testing. Versions of the software, known as beta versions, are released to a limited audience outside of the company. The software is released to groups of people so that further testing can ensure the product has few faults or bugs. Sometimes, beta versions are made available to the open public to increase the feedback field to a maximal number of future users.

### Links

[Software Testing - Wikipedia](http://en.wikipedia.org/wiki/Software_testing)
