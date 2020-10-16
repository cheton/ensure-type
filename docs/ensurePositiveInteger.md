### `ensurePositiveInteger(value, defaultValue = 0)`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an integer coercible value, the result integer is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensurePositiveInteger } from 'ensure-type';

ensurePositiveInteger();
// => 0

ensurePositiveInteger(undefined);
// => 0

ensurePositiveInteger(null);
// => 0

ensurePositiveInteger(true);
// => 1

ensurePositiveInteger(false);
// => 0

ensurePositiveInteger(Infinity);
// => 0

ensurePositiveInteger(-Infinity);
// => 0

ensurePositiveInteger(NaN);
// => 0

ensurePositiveInteger({});
// => 0

ensurePositiveInteger([]);
// => 0

ensurePositiveInteger('');
// => 0

ensurePositiveInteger(' ');
// => 0

ensurePositiveInteger('0');
// => 0

ensurePositiveInteger('-0');
// => 0

ensurePositiveInteger('1');
// => 1

ensurePositiveInteger('-1');
// => 0

ensurePositiveInteger(0);
// => 0

ensurePositiveInteger(-0);
// => 0

ensurePositiveInteger(1);
// => 1

ensurePositiveInteger(-1);
// => 0

ensurePositiveInteger(99999999999999999999999);
// => 99999999999999999999999

ensurePositiveInteger(2e+64);
// => 2e+64

ensurePositiveInteger(Math.PI);
// => 3

ensurePositiveInteger(Number.MIN_SAFE_INTEGER);
// => 0

ensurePositiveInteger(Number.MAX_SAFE_INTEGER);
// => Number.MAX_SAFE_INTEGER

ensurePositiveInteger(0.2);
// => 0

ensurePositiveInteger(-0.2);
// => 0

ensurePositiveInteger(0.7);
// => 0

ensurePositiveInteger(-0.7);
// => 0

// Number.isInteger(5.0) => true
ensurePositiveInteger(5.0);
// => 5

// Number.isInteger(5.000000000000001) => false
ensurePositiveInteger(5.000000000000001);
// => 5

// Number.isInteger(5.0000000000000001) => true
ensurePositiveInteger(5.0000000000000001);
// => 5

// Returns the coerced default value.
ensurePositiveInteger(null, '1');
// => 1

// Returns the default value.
ensurePositiveInteger(null, 1);
// => 1
