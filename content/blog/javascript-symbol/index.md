---
title: Javascript symbol - a short explanation
date: "2020-07-05T14:44:03.284Z"
description: "Symbol is a new data type used to create 'hidden' object properties.
"
---

Simply put a symbol represents a completely unique identifier.
Symbol is a _new_ primitive data type, just like Number, String and Boolean.

You create a symbol through the `Symbol()` function.

```js
const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false
```

Since a symbol is always unique `Symbol() === Symbol()` is false.

##Why is this useful?##
With symbols we can create "hidden" object properties that can not be overwritten or accessed from anywhere else.

```js
let user = {
  name: "Bob",
};

// Create our unique symbol
let id = Symbol("id"); // the string parameter is just a description

user[id] = 1;
console.log(user[id]); // 1
```

Because we have access to our id symbol here, only we can access the id property value. It cannot be reached by a third party, unless of course we somehow expose our symbol variable.

This way another script can also add its own "id" symbol. There will be no conflict because symbols are always unique.
