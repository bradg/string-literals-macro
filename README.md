# string-literals-macro

This is a simple example of a [`babel-plugin-macros`][babel-plugin-macros] macro that adds ruby-style `%w` string literals to Javascript.

## To use

```javascript
import {w} from '../../string-literals.macro'

const inp = w`hello world`
const in3 = w`how  are
    you	today`
const in4 = w`hello world ${ignore} x ${ok}`
const escapeSpaces = w`age birth\ year`
```

This will produce the following javascript code
```javascript
const inp = ['hello', 'world'];
const in3 = ['how', 'are', 'you', 'today'];
const in4 = ['hello', 'world', 'x', ''];
const escapeSpaces = ['age', 'birth year'];
```

## More Info

For a description of how I wrote this see

To write your own macros, take a look at the example babel-macro code at [https://github.com/kentcdodds/babel-plugin-macros-example](https://github.com/kentcdodds/babel-plugin-macros-example)
