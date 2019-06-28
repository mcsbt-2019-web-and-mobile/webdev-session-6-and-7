---
title: react
subtitle: integrating our react apps with web apis
author: pepegar
---

# Component lifecycle

## lifecycle

React is a very fast framework because it makes a good use of resources.
- renders components only when they are in the screen
- destroys components that are not seen
- renders only the needed part of the component

## 

There main method we want to pay attention to is
`componentDidMount()`.

see http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## what's _mounting_?

Mounting is the term used in React to put elements in the DOM, unmount
is the opposite, the action of removing them from the DOM.

## componentDidMount()

`componentDidMount()` is the method executed just after the component
is rendered.  We should use this method to put all side effects that
would update the `state` of the component.

- call an API
- modify the DOM
...

# pulling data from web APIs

## fetch refresher

## exercise 1

Let's get some data from Hacker News!

# putting everything together

## React

- properties are input data for the component when rendering
- State is the data that a component remembers. It can mutate.

## React router

- Routes match paths, and render components when the match happens
- Links point to routes within your application


## React lifecycle

- Execute side effects on `componentDidMount()` method, not in `constructor`.
