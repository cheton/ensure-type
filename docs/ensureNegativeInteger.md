### `ensureNegativeInteger(value, defaultValue = -1)`

An integer is negative if it is less than zero.

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an integer coercible value, the result integer is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureNegativeInteger } from 'ensure-type';

ensureNegativeInteger();
// => -1

ensureNegativeInteger(undefined);
// => -1

ensureNegativeInteger(null);
// => -1

ensureNegativeInteger(true);
// => -1

ensureNegativeInteger(false);
// => -1

ensureNegativeInteger(Infinity);
// => -1

ensureNegativeInteger(-Infinity);
// => -1

ensureNegativeInteger(NaN);
// => -1

ensureNegativeInteger({});
// => -1

ensureNegativeInteger([]);
// => -1

ensureNegativeInteger('');
// => -1

ensureNegativeInteger(' ');
// => -1

ensureNegativeInteger('0');
// => -1

ensureNegativeInteger('-0');
// => -1

ensureNegativeInteger('1');
// => -1

ensureNegativeInteger('-1');
// => -1

ensureNegativeInteger(0);
// => -1

ensureNegativeInteger(-0);
// => -1

ensureNegativeInteger(1);
// => -1

ensureNegativeInteger(-1);
// => -1

ensureNegativeInteger(-99999999999999999999999);
// => -99999999999999999999999

ensureNegativeInteger(-2e+64);
// => -2e+64

ensureNegativeInteger(-Math.PI);
// => -3

ensureNegativeInteger(Number.MIN_SAFE_INTEGER);
// => Number.MIN_SAFE_INTEGER

ensureNegativeInteger(Number.MAX_SAFE_INTEGER);
// => -1

ensureNegativeInteger(0.2);
// => -1

ensureNegativeInteger(-0.2);
// => -1

ensureNegativeInteger(0.7);
// => -1

ensureNegativeInteger(-0.7);
// => -1

// Number.isInteger(-5.0) => true
ensureNegativeInteger(-5.0);
// => -5

// Number.isInteger(-5.000000000000001) => false
ensureNegativeInteger(-5.000000000000001);
// => -5

// Number.isInteger(-5.0000000000000001) => true
ensureNegativeInteger(-5.0000000000000001);
// => -5

// Returns the coerced default value.
ensureNegativeInteger(null, '-1');
// => -1

// Returns the default value.
ensureNegativeInteger(null, -1);
// => -1
```
