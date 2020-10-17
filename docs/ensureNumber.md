### `ensureNumber(value, [defaultValue=0])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureNumber } from 'ensure-type';

ensureNumber();
// => 0

ensureNumber({});
// => 0

ensureNumber(true);
// => 1

ensureNumber(false);
// => 0

ensureNumber(-1);
// => -1

ensureNumber(0);
// => 0

ensureNumber(1);
// => 1

ensureNumber(2e+64);
// => 2e+64

ensureNumber(Infinity);
// => Infinity

ensureNumber(-Infinity);
// => -Infinity

ensureNumber(NaN);
// => 0

ensureNumber(undefined);
// => 0

ensureNumber(null);
// => 0

ensureNumber('-1');
// => -1

ensureNumber('0');
// => 0

ensureNumber('1');
// => 1

ensureNumber('');
// => 0

ensureNumber(' ');
// => 0

// Returns the coerced default value.
ensureNumber(null, '1');
// => 1

// Returns the default value.
ensureNumber(null, 1);
// => 1
```
