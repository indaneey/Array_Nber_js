Array_Nber.js
====

An array methods toolkit.


Installation
------------------

### Add array_nber in `head tag`

```html
<head>
<script src="array_nber.js"></script>
</head>
```


## Array Methods
---

These methods are prototype of JavaScript Array() Class

_insert()
-------

Add new value in a specific position before index in array an return array.

```js
/**
* @param { index } position of the array value to add new value before it.
* @param { object } new value to be added, it can be any JavaScript data types.
* @returns Array
*/

let arr = [12, 52, 85, 52]
arr._insert(1, [58, 36])
```

_remove()
-------

Remove first or all occurrences of value and return array.

```js
/**
* @param { value } value to be remove not index.
* @param { flag } use 'g' (global) to remove all the same values
* @returns Array
*/

let arr = [12, 52, 85, 52, 85]
arr._remove(85, 'g')
```

_count()
-------

Return number of occurrences of value.

```js
/**
* @param { value } value to be counted.
* @returns Number
*/

let arr = [12, 52, 85, 52, 74]
arr._count(52)
```

_override()
-------

Replace value(s) in array using another value.

```js
/**
* @param { searchValue } A value to search for.
* @param { replaceValue } A value to replace for every successful match of searchValue in this array.
* @param { flag } use 'g' (global) to replace all the same values
* @returns Array
*/

let arr = [12, 52, 85, 52, 74]
arr._override(52, [12, 96, 'override'])
```

_calc()
-------

Calculate all occurrences number values with provided arithematic operator and return array.

```js
/**
* @param { operator } An operator sign in string type eg( '+', '-', '*', '/', '%' ).
* @param { operand } A number operand value.
* @returns Array
*/

let arr = [12, 52, 85, 52, 74]
arr._calc('+', 100)
```

# Nber Class
---


Provide some array functionality.

Create Nber() instance in `script tag`

```js
let nber = new Nber();
```

Array()
-------

Create an array

```js
/**
* @class { Nber() }
* @function { Array() }
* @returns An array object satisfying the specified requirements
*/

let nber = new Nber()
let nber_array = nber.Array({value : 7, count : 50, random: true})

// value - A value to generate, it can be String, Number, Boolean, Array, Object or any JS data types.
// count - Number of occurences to generate
// random - Set to 'true' to randomness the value to generate values randomly or 'false' to generate one by one.

```


# array_nber.js

_Developed by Indaneey_design. for any support contact me [here](mailto:indaneeey@gmail.com)_