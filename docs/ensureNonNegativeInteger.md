### `ensureNonNegativeInteger(value, [defaultValue=0])`

A non-negative integer is an integer that is either zero or positive.

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an integer coercible value, the result value is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureNonNegativeInteger } from 'ensure-type';

ensureNonNegativeInteger();
// => 0

ensureNonNegativeInteger(undefined);
// => 0

ensureNonNegativeInteger(null);
// => 0

ensureNonNegativeInteger(true);
// => 1

ensureNonNegativeInteger(false);
// => 0

ensureNonNegativeInteger(Infinity);
// => 0

ensureNonNegativeInteger(-Infinity);
// => 0

ensureNonNegativeInteger(NaN);
// => 0

ensureNonNegativeInteger({});
// => 0

ensureNonNegativeInteger([]);
// => 0

ensureNonNegativeInteger('');
// => 0

ensureNonNegativeInteger(' ');
// => 0

ensureNonNegativeInteger('0');
// => 0

ensureNonNegativeInteger('-0');
// => 0

ensureNonNegativeInteger('1');
// => 1

ensureNonNegativeInteger('-1');
// => 0

ensureNonNegativeInteger(0);
// => 0

ensureNonNegativeInteger(-0);
// => 0

ensureNonNegativeInteger(1);
// => 1

ensureNonNegativeInteger(-1);
// => 0

ensureNonNegativeInteger(99999999999999999999999);
// => 99999999999999999999999

ensureNonNegativeInteger(2e+64);
// => 2e+64

ensureNonNegativeInteger(Math.PI);
// => 3

ensureNonNegativeInteger(Number.MIN_SAFE_INTEGER);
// => 0

ensureNonNegativeInteger(Number.MAX_SAFE_INTEGER);
// => Number.MAX_SAFE_INTEGER

ensureNonNegativeInteger(0.2);
// => 0

ensureNonNegativeInteger(-0.2);
// => 0

ensureNonNegativeInteger(0.7);
// => 0

ensureNonNegativeInteger(-0.7);
// => 0

// Number.isInteger(5.0) => true
ensureNonNegativeInteger(5.0);
// => 5

// Number.isInteger(5.000000000000001) => false
ensureNonNegativeInteger(5.000000000000001);
// => 5

// Number.isInteger(5.0000000000000001) => true
ensureNonNegativeInteger(5.0000000000000001);
// => 5

// Returns the coerced default value.
ensureNonNegativeInteger(null, '0');
// => 0

// Returns the default value.
ensureNonNegativeInteger(null, 0);
// => 0
```
