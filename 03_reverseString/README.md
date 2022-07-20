# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```
npm test reverseString.spec.js
cd D:\git\javascript-exercises\03_reverseString
You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `.skip` in front the `test.skip()` function.

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
npx browserslist@latest --update-db