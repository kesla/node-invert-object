
# invert-object

## Usage

Invert an object so that keys becomes values and values become keys. Duplicate values in input is allowed by puttin all keys in arrays.

## Example

```js

var assert = require('assert')

  , invertObject = require('invert-object')

  , inverted = invertObject({foo: '1', bar: 1})

assert.deepEqual(inverted, {1: ['foo', 'bar']})

```
