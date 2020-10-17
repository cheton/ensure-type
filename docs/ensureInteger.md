### `ensureInteger(value, [defaultValue=0])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an integer coercible value, the result integer is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureInteger } from 'ensure-type';

ensureInteger();
// => 0

ensureInteger(undefined);
// => 0

ensureInteger(null);
// => 0

ensureInteger(true);
// => 1

ensureInteger(false);
// => 0

ensureInteger(Infinity);
// => 0

ensureInteger(-Infinity);
// => 0

ensureInteger(NaN);
// => 0

ensureInteger({});
// => 0

ensureInteger([]);
// => 0

ensureInteger('');
// => 0

ensureInteger(' ');
// => 0

ensureInteger('0');
// => 0

ensureInteger('-0');
// => -0

ensureInteger('1');
// => 1

ensureInteger('-1');
// => -1

ensureInteger(0);
// => 0

ensureInteger(-0);
// => -0

ensureInteger(1);
// => 1

ensureInteger(-1);
// => -1

ensureInteger(99999999999999999999999);
// => 99999999999999999999999

ensureInteger(2e+64);
// => 2e+64

ensureInteger(Math.PI);
// => 3

ensureInteger(Number.MIN_SAFE_INTEGER);
// => Number.MIN_SAFE_INTEGER

ensureInteger(Number.MAX_SAFE_INTEGER);
// => Number.MAX_SAFE_INTEGER

ensureInteger(0.2);
// => 0

ensureInteger(-0.2);
// => -0

ensureInteger(0.7);
// => 0

ensureInteger(-0.7);
// => -0

// Number.isInteger(5.0) => true
ensureInteger(5.0);
// => 5

// Number.isInteger(5.000000000000001) => false
ensureInteger(5.000000000000001);
// => 5

// Number.isInteger(5.0000000000000001) => true
ensureInteger(5.0000000000000001);
// => 5

// Returns the coerced default value.
ensureInteger(null, '1');
// => 1

// Returns the coerced default value.
ensureInteger(null, '-1');
// => -1

// Returns the default value.
ensureInteger(null, 1);
// => 1

// Returns the default value.
ensureInteger(null, -1);
// => -1
```
