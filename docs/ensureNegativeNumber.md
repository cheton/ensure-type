### `ensureNegativeNumber(value, defaultValue = 0)`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a number, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureNegativeNumber } from 'ensure-type';

ensureNegativeNumber();
// => -0

ensureNegativeNumber({});
// => -0

ensureNegativeNumber(true);
// => -0

ensureNegativeNumber(false);
// => -0

ensureNegativeNumber(-1);
// => -1

ensureNegativeNumber(0);
// => -0

ensureNegativeNumber(1);
// => -0

ensureNegativeNumber(2e+64);
// => -0

ensureNegativeNumber(Infinity);
// => -0

ensureNegativeNumber(-Infinity);
// => -Infinity

ensureNegativeNumber(NaN);
// => -0

ensureNegativeNumber(undefined);
// => -0

ensureNegativeNumber(null);
// => -0

ensureNegativeNumber('-1');
// => -1

ensureNegativeNumber('0');
// => -0

ensureNegativeNumber('1');
// => -0

ensureNegativeNumber('');
// => -0

ensureNegativeNumber(' ');
// => -0

// Returns the coerced default value.
ensureNegativeNumber(null, '-1');
// => -1

// Returns the default value.
ensureNegativeNumber(null, -1);
// => -1
```
