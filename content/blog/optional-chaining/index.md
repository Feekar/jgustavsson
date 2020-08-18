---
title: Cleaner JavaScript with optional chaining
date: "2020-08-18"
description: "Allows us to access nested object properties without the clutter of explicit null checks."
---

When you try to access a property of an undefined object you get the oh-so common `Cannot read property x of undefined.`

```js
const jedi = { name: "Luke" };
const lightsaberColor = jedi.lightsaber.color;
// Cannot read property color of undefined.
```

Because `lightsaber` doesn´t exist we get an error. To avoid this we could throw in an if statement:

```js
const jedi = { name: "Luke" };
if (jedi.lightsaber) {
  const lightsaberColor = jedi.lightsaber.color;
}
```

or perhaps more commonly seen:

```js
const jedi = { name: "Luke" };
const lightsaberColor = jedi.lightsaber && jedi.lightsaber.color;
```

this wont throw an error because the left side of `&&` returns a falsy value (undefined) and therefore never continues to evaluate the right side.

Both of these methods works perfectly fine and are widely used. However, **with optional chaining** we can get rid of some of the clutter:

```js
const jedi = { name: "Luke" };
const lightSaberColor = jedi.lightsaber?.color;
```

Note the `?.`. This results in no errors and cleaner code. Great!

The benefit is even more obvious with deeper nestling. Lets safely look up the jedi's master's lightsaber color:

**The traditional way:**

```js
const lightSaberColor =
  jedi && jedi.master && jedi.master.lightsaber && jedi.master.lightsaber.color;
```

**With optional chaining:**

```js
const lightSaberColor = jedi?.master?.lightsaber?.color;
```

Clean 👌
