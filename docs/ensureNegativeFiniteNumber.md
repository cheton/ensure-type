### `ensureNegativeFiniteNumber(value, [defaultValue=-0])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a finite number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureNegativeFiniteNumber } from 'ensure-type';

ensureNegativeFiniteNumber();
// => -0

ensureNegativeFiniteNumber({});
// => -0

ensureNegativeFiniteNumber(true);
// => -0

ensureNegativeFiniteNumber(false);
// => -0

ensureNegativeFiniteNumber(-1);
// => -1

ensureNegativeFiniteNumber(0);
// => -0

ensureNegativeFiniteNumber(1);
// => -0

ensureNegativeFiniteNumber(2e+64);
// => -0

ensureNegativeFiniteNumber(Infinity);
// => -0

ensureNegativeFiniteNumber(-Infinity);
// => -0

ensureNegativeFiniteNumber(NaN);
// => -0

ensureNegativeFiniteNumber(undefined);
// => -0

ensureNegativeFiniteNumber(null);
// => -0

ensureNegativeFiniteNumber('-1');
// => -1

ensureNegativeFiniteNumber('0');
// => -0

ensureNegativeFiniteNumber('1');
// => -0

ensureNegativeFiniteNumber('');
// => -0

ensureNegativeFiniteNumber(' ');
// => -0

// Returns the coerced default value.
ensureNegativeFiniteNumber(null, '-1');
// => -1

// Returns the default value.
ensureNegativeFiniteNumber(null, -1);
// => -1
```
