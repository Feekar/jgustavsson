---
title: Javascript understanding Generators & Iterators
date: "2020-07-24T09:53:02.284Z"
description: "Pulling data from a data source one item at a time allows us to iterate over an infinite data structure.
A generator function can stop midway through and continue from where it stopped."
---

Normally I'd cut this into two different articles, but it is impossible to talk about generators without iterators.

There are three concepts we must define: [Iterators](#iterator), [generators](#generator) and [iterables](#iterable). Let us begin.

##Iterator##
Iterators are a way to pull data from a data source, one item at a time. Any object which implements the **iterator protocol** is considered
an iterator. You implement the iterator protocol by having a `next()` method which returns an object with two properties: value(any) and done(boolean).

```js
let counter = 0;
let end = 5; // can be infinite

const myIterator = {
  next: function () {
    if (counter < end) {
      counter++;
      return { done: false, value: counter };
    } else {
      return { done: true, value: counter };
    }
  },
};

myIterator.next(); // {value: 1, done: false}
myIterator.next(); // {value: 2, done: false}
myIterator.next(); // {value: 3, done: false}
myIterator.next(); // {value: 4, done: false}
myIterator.next(); // {value: 5, done: false}
myIterator.next(); // {value: 5, done: true}
```

myIterator has a `next()` method which returns the next item in the sequence, a simple counter in this case. When the `next()` calls reaches the end of
the sequence the done property is set to `true`.

###Iterators are lazy###
From what we know so far it looks like iterators could simply be expressed as arrays, but this is not the case.
Arrays must be allocated in their entirety, iterators do not, due to their one at a time nature. Therefore iterators can
express unlimited sequences.

How would you loop an infinite array without crashing? How would you even declare it? You can't. An array must allocate its whole size in memory.
Iterators do it one by one. **Iterators allow you to effectively create sequences of unlimited size.**

##Generator##
Iterators require us to manually maintain their state, keep track of current value, create a next method, return `done` etc. Generators will do this for us.
When you call a generator function, they return a special type of iterator called a generator.
Calling `next()` on a generator function executes it until it encounters the `yield` keyword.
`function*` denotes a generator function.

```js
function* makeGenerator() {
  let end = 5; // can be infinite
  for (let i = 0; i < end; i++) {
    yield i;
  }
  return "done!";
}

const generator = makeGenerator(); // returns an iterator
generator.next(); // {value: 0, done: false}
generator.next(); // {value: 1, done: false}
generator.next(); // {value: 2, done: false}
generator.next(); // {value: 3, done: false}
generator.next(); // {value: 4, done: false}
generator.next(); // {value: done!, done: true}
```

Much simpler than creating your own iterator.

##Iterable##
Creating iterables is the most common use case for generators and iterators.
Iterables are objects which return iterators when you call the `[Symbol.iterator]` function on it. I.e. they follow the
**iterable protocol**.

If this Symbol-business looks strange to you, [check out my short explaination on Symbols here](/javascript-symbol). For the purpose of this artice though, you can just think of it as any other regular object property.

Arrays, Strings, Maps and other **iterable objects** (object types which follows the iterable protocol) all have the `[Symbol.iterator]` function built-in.

```js
var arr = [1,2,3]
var arrIterator = arr[Symbol.iterator](); // this returns an iterator

arrIterator.next();{value: 1, done: false}
arrIterator.next();{value: 2, done: false}
arrIterator.next();{value: 3, done: false}
arrIterator.next();{value: undefined, done: true}
```

Okay so a lot of built-in object types follow the iterable protocol by default.. **but why** ?
Iterating and consuming the data of an Array is different from a String, Map, Set etc. It's quite impractical to implement
the many different ways of consuming all those different data sources.

So instead of doing that the language provides an interface that the data sources can implement, the iterable protocol. Ensuring an
in-common way of consuming data.

This allows for `for...of loops`, the spread operator, destructuring etc to be used on many different types of collections. Any object type
which follows the iterable protocol can be looped over with a `for...of` loop.

###Custom iterable objects###
We can of course implement the iterable protocol in our own objects.

```js
const ourCustomIterable = {
  [Symbol.iterator]() {
    let counter = 0;
    let end = 5;

    return {
      next: function () {
        if (counter < end) {
          counter++;
          return { done: false, value: counter };
        } else {
          return { done: true, value: counter };
        }
      },
    };
  },
};
```

Because `ourCustomIterable` implements the iterable protocol by having a `[Symbol.iterator]` function which when called returns an iterator
we can now use it in a `for...of` loop:

```js
for (let item of ourCustomIterable) {
  console.log(item); // 1 2 3 4 5
}
```

Since generator functions return iterators you can of course replace the above example with a simple generator:

```js
const ourCustomIterable = {
  *[Symbol.iterator]() {
    for (let i = 1; i < 5; i++) {
      yield i;
    }
  },
};

for (let item of ourCustomIterable) {
  console.log(item); // 1 2 3 4 5
}
```
