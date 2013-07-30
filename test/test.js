var test    = require('tap').test
  , invert  = require('../invert')

test('empty object', function(t) {
  t.deepEqual(invert({}), {})
  t.end()
})

test('normal object', function(t) {
  t.deepEqual(invert({foo: 'bar', foz: 'bar'}), {bar: ['foo', 'foz']})
  t.end()
})

test('non-string object', function(t) {
  t.deepEqual(invert({foo: '1', bar: 1}), {'1': ['foo', 'bar']})
  t.end()
})
