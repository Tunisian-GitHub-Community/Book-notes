# Design patterns notebook
![Alt text](banner.jpg?raw=true "Banner")
These are my notes I took from the 'Head first design patterns' book and [Christopher Okhravi](https://www.youtube.com/c/ChristopherOkhravi) YouTube videos.  
**Note**: These are just notes from the book, it's totally normal if you didn't understand some things here, the book explain them to the absolute limit (totally recommend reading it).  
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

## the Strategy Pattern  
The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently clients that use it.  
* A localized update to the super class can cause a non local side effect.  
Example: Imagine having a superclass called `Duck` from which all other duck types inherit. to this point everything looks fine but when we have a `fly()` method and a subclass called `rubber ducks` there will be a problem: rubber ducks don't fly !).    

    → We can extract the methodes that make the diffrence and make the subclasses override them, But in a bigger scale it will be a mess. No matter how well you design your application, over time an application must grow and change or it will die.    
    → The better solution is to `take what varies and encapsulate them so it won't affect the rest of the code.`

`Favor composition over inheritance`    
`Program to an interface, not an implementation.`  
`The diffrent behaviors will live in a seperate class (AKA interface)`  

## the Observer Pattern  
The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

* This pattern have 2 elements: `the subject` & `the observers`. These two have a publisher-subscribers relationship.  
Example: You subscribe to a newspaper; you notify them that you want to be a subscriber and pay them; so the newspaper (aka the publisher) will send you newspaper as long as you don't unsubscribe; in other words if you want to unsubscribe you need to notify the publisher.    
    → When the state of one object changes, all of its dependents are notified.  
`Strive for loosely coupled designs between objects that interact.`  
`Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.`

## the Decorator Pattern  
The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.  

Example: You have a superclass that have a hundreds of subclasses that are nearly the same (they have a 1% diffrence between each other).  
    → We need to allow classes to be easily extended to incorporate new behavior without modifying existing code But how ? The answer is to wrap the subclass with decorators.  
`Classes should be open for extension, but closed for modification` 

## the Factory Pattern  
The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.  

Example: Imagine you have a class to create pizzas that have bunch of `If` statements inside, we take those lines of code and place them inside another subclass (this class is what we call a `Factory` so we can say that factories handle the details of object creation) and call it inside our class. This will abstract the code and make it easier to read and understand.  
`Depend upon abstractions. Do not depend upon concrete classes`  
### the `abstract` Factory Pattern  
The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.  

* We’ve certainly seen that Abstract Factory allows a client to use an abstract interface to create a set of related products without knowing (or caring) about the concrete products that are actually produced. In this way, the client is decoupled from any of the specifics of the concrete products. Abstract Factory relies on object composition: object creation is implemented in methods exposed in the factory interface.    

## the Singleton Pattern    
The Singleton Pattern ensures 2 things to happen:  
* a class that has only one instance.  
* that class should provide a global point of access to it.  

`Classes should be open for extension but closed for modification`  
Note: No one really use this pattern anymore but it's a good thing to know about it.  

## the Command Pattern  
The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.  
* When you need to decouple an object making requests from the objects that know how to perform the requests, use the Command Pattern.  
* A Command object is at the center of this decoupling and encapsulates a receiver with an action (or set of actions).  
* An invoker makes a request of a Command object by calling its `execute()` method, which invokes those actions on the receiver.  
* Invokers can be parameterized with Commands, even dynamically at runtime.  

## the Adapter and Facade Patterns  
the two patterns changes an interface, the Adapter to convert and the Facade to unify and simplify.  
### the Adapter Pattern  
The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.  
* We could use several adapters, each converting a different backend set of classes. Or, we could add new implementations after the fact, as long as they adhere to the Target interface.  
* There are actually two kinds of adapters: `object` adapters and `class` adapters.  
    → Object adapters and class adapters use two different means of adapting the adaptee (composition versus inheritance).  
### the Facade Pattern  
The Facade Pattern provides a unified interface to a set of interfaces in a subsytem. Facade defines a higherlevel interface that makes the subsystem easier to use.  
`Principle of Least Knowledge - talk only to your immediate friends`  
## the Template Method Pattern  
The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.  
* The template method makes use of the `primitiveOperations` to implement an algorithm. It is decoupled from the actual implementation of these operations.  
`The Hollywood Principle - Don’t call us, we’ll call you. `  
Meaning: When you have high-level components depending on low-level components depending on high-level components depending on sideways components depending on low-level components, and so on `the dependency rot` happens, and when it sets in no one can easily understand the way a system is designed.  
    → With the Hollywood Principle, we allow low-level components to hook themselves into a system, but the high-level components determine when they are needed, and how. In other words, the high-level components give the low-level components a “don’t call us, we’ll call you” treatment.  

## the Iterator and Composite Patterns  
### the Iterator Pattern  
The Iterator Pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.  
* The Iterator Pattern allows traversal of the elements of an aggregate without exposing the underlying implementation.  
* It also places the task of traversal on the iterator object, not on the aggregate, which simplifies the aggregate interface and implementation, and places the responsibility where it should be.  
`A class should have only one reason to change`   
* Every responsibility of a class is an area of potential change. More than one responsibility means more than one area of change.  
    → This principle guides us to keep each class to a single responsibility.  
### the Composite Pattern  
The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.  
* The Composite Pattern allows us to build structures of objects in the form of trees that contain both compositions of objects and individual objects as nodes.  
    → Using a composite structure, we can apply the same operations over both composites and individual objects. In other words, in most cases we can ignore the differences between compositions of objects and individual objects.  
## the State Pattern  
The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.  
* The Context gets its behavior by delegating to the current state object it is composed with.  
* By encapsulating each state into a class, we localize any changes that will need to be made.  
* The State and Strategy Patterns have the same class diagram, but they differ in intent: Strategy Pattern typically configures Context classes with a behavior or algorithm while State Pattern allows a Context to change its behavior as the state of the Context changes.  

## the Proxy Pattern  
The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.  
* We use the Proxy Pattern to create a representative object that controls access to another object, which may be remote, expensive to create or in need of securing.  
* Proxy is structurally similar to Decorator, but the two differ in their purpose: The Decorator Pattern adds behavior to an object, while a Proxy controls access.  
* A `Remote` Proxy manages interaction between a client and a remote object.  
* A `Virtual` Proxy controls access to an object that is expensive to instantiate.  
* A `Protection` Proxy controls access to the methods of an object based on the caller.  
* Many other variants of the Proxy Pattern exist including caching proxies, synchronization proxies, firewall proxies, copy-on-write proxies etc...   

## Compound Patterns
Patterns are often used together and combined within the same design solution. A compound pattern combines two or more patterns into a solution that solves a recurring or general problem.  
* The Model View Controller Pattern (MVC) is a compound pattern consisting of the `Observer`, `Strategy` and `Composite` patterns.  
    → The model makes use of the Observer Pattern so that it can keep observers updated yet stay decoupled from them.    
    → The controller is the strategy for the view. The view can use different implementations of the controller to get different behavior.  
    → The view uses the Composite Pattern to implement the user interface, which usually consists of nested components like panels, frames and buttons.  

## Better Living with Patterns
A Pattern is a solution to a problem in a context.  
The `context`: the situation in which the pattern applies. This should be a recurring situation.  
The `problem`: the goal you are trying to achieve in this context, but it also refers to any constraints that occur in the context.  
The `solution`: a general design that anyone can apply which resolves the goal and set of constraints.  
An Anti-Pattern tells you how to go from a problem to a BAD solution.  
    → An anti-pattern always looks like a good solution, but then turns out to be a bad solution when it is applied.  
