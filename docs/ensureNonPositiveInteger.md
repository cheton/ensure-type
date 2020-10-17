### `ensureNonPositiveInteger(value, [defaultValue=-0])`

A non-positive integer is an integer that is either zero or negative.

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an integer coercible value, the result value is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureNonPositiveInteger } from 'ensure-type';

ensureNonPositiveInteger();
// => -0

ensureNonPositiveInteger(undefined);
// => -0

ensureNonPositiveInteger(null);
// => -0

ensureNonPositiveInteger(true);
// => -0

ensureNonPositiveInteger(false);
// => -0

ensureNonPositiveInteger(Infinity);
// => -0

ensureNonPositiveInteger(-Infinity);
// => -0

ensureNonPositiveInteger(NaN);
// => -0

ensureNonPositiveInteger({});
// => -0

ensureNonPositiveInteger([]);
// => -0

ensureNonPositiveInteger('');
// => -0

ensureNonPositiveInteger(' ');
// => -0

ensureNonPositiveInteger('0');
// => -0

ensureNonPositiveInteger('-0');
// => -0

ensureNonPositiveInteger('1');
// => -0

ensureNonPositiveInteger('-1');
// => -1

ensureNonPositiveInteger(0);
// => -0

ensureNonPositiveInteger(-0);
// => -0

ensureNonPositiveInteger(1);
// => -0

ensureNonPositiveInteger(-1);
// => -1

ensureNonPositiveInteger(-99999999999999999999999);
// => -99999999999999999999999

ensureNonPositiveInteger(-2e+64);
// => -2e+64

ensureNonPositiveInteger(-Math.PI);
// => -3

ensureNonPositiveInteger(Number.MIN_SAFE_INTEGER);
// => Number.MIN_SAFE_INTEGER

ensureNonPositiveInteger(Number.MAX_SAFE_INTEGER);
// => -0

ensureNonPositiveInteger(0.2);
// => -0

ensureNonPositiveInteger(-0.2);
// => -0

ensureNonPositiveInteger(0.7);
// => -0

ensureNonPositiveInteger(-0.7);
// => -0

// Number.isInteger(-5.0) => true
ensureNonPositiveInteger(-5.0);// => -5

// Number.isInteger(-5.000000000000001) => false
ensureNonPositiveInteger(-5.000000000000001);// => -5

// Number.isInteger(-5.0000000000000001) => true
ensureNonPositiveInteger(-5.0000000000000001);// => -5

// Returns the coerced default value.
ensureNonPositiveInteger(null, '-0');// => -0

// Returns the default value.
ensureNonPositiveInteger(null, -0);// => -0
```
