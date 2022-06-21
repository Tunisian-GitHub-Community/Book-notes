# Design patterns notebook
![Alt text](banner.jpg?raw=true "Banner")
These are my notes I took from the 'Head first design patterns' book and [Christopher Okhravi](https://www.youtube.com/c/ChristopherOkhravi) YouTube videos. 
## What is meant by design patterns?  
Design patterns are programming language independent strategies for solving a common problem. That means a design pattern represents an idea, not a particular implementation. By using design patterns, you can make your code more flexible, reusable, and maintainable.    
### Patterns
0. [the strategy Pattern](#the-Strategy-Pattern)
1. [the Observer Pattern](#the-Observer-Pattern)
2. [the Decorator Pattern](#the-Decorator-Pattern)
3. [the Factory Pattern](#the-Factory-Pattern)
4. [the Singleton Pattern](#the-Singleton-Pattern)
5. [the Command Pattern](#the-Command-Pattern)
6. [the Adapter and Facade Patterns](#the-Adapter-and-Facade-Patterns)
7. [the Template Method Pattern](#the-Template-Method-Pattern)
8. [the Iterator and Composite Patterns](#the-Iterator-and-Composite-Patterns)
9. [the State Pattern](#the-State-Pattern)
10. [the Proxy Pattern](#the-Proxy-Pattern)
11. [Compound Patterns](#Compound-Patterns)
12. [Better Living with Patterns](#Better-Living-with-Patterns)
13. [Leftover Patterns](#Leftover-Patterns)

## the Strategy Pattern  
The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently clients that use it.  
* A localized update to the super class can cause a non local side effect.  
Exemple: Imagine having a superclass called `Duck` from which all other duck types inherit. to this point everything looks fine but when we have a `fly()` method and a subclass called `rubber ducks` there will be a problem: rubber ducks don't fly !).    

    → We can extract the methodes that make the diffrence and make the subclasses override them, But in a bigger scale it will be a mess. No matter how well you design your application, over time an application must grow and change or it will die.    
    → The better solution is to `take what varies and encapsulate them so it won't affect the rest of the code.`

`Favor composition over inheritance`    
`Program to an interface, not an implementation.`  
`The diffrent behaviors will live in a seperate class (AKA interface)`  

## the Observer Pattern  
* When the state of one object changes, all of its dependents are notified.  
`Strive for loosely coupled designs between objects that interact.`  
`Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.`

## the Decorator Pattern  
`Classes should be open for extension, but closed for modification`
* The decorator Pattern attacks additional responsabilities to an object dynamically.  

## the Factory Pattern  
* The factory pattern lets a class defer instantiation to subclasses.  
`Depend upon abstractions. Do not depend upon concrete classes`  

## the Singleton Pattern  
* The Singleton pattern ensures you have at most one instance of a class in your application.  
* It also provides a global access point to that instance.  
    → When you need to ensure you only have one instance of a class running around your app, turn to the singleton.  
`Classes should be open for extension but closed for modification`  

## the Command Pattern  
* The Command pattern encapsulates a reqeust as an object, there by letting you parametrize other objects with diffrent requests, queue or log requests and support undorable operations.  
* The Command pattern decouples and object, making a request from the one that knows how to perform it.  
