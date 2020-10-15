### `ensureFiniteNumber(value, defaultValue = 0)`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a finite number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureFiniteNumber } from 'ensure-type';

ensureFiniteNumber();
// => 0

ensureFiniteNumber({});
// => 0

ensureFiniteNumber(true);
// => 1

ensureFiniteNumber(false);
// => 0

ensureFiniteNumber(-1);
// => -1

ensureFiniteNumber(0);
// => 0

ensureFiniteNumber(1);
// => 1

ensureFiniteNumber(2e+64);
// => 2e+64

ensureFiniteNumber(Infinity);
// => 0

ensureFiniteNumber(-Infinity);
// => 0

ensureFiniteNumber(NaN);
// => 0

ensureFiniteNumber(undefined);
// => 0

ensureFiniteNumber(null);
// => 0

ensureFiniteNumber('-1');
// => -1

ensureFiniteNumber('0');
// => 0

ensureFiniteNumber('1');
// => 1

ensureFiniteNumber('');
// => 0

ensureFiniteNumber(' ');
// => 0

// Returns the coerced default value.
ensureFiniteNumber(null, '1');
// => 1

// Returns the default value.
ensureFiniteNumber(null, 1);
// => 1
```
