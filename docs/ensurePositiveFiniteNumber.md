### `ensurePositiveFiniteNumber(value, [defaultValue=0])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a finite number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensurePositiveFiniteNumber } from 'ensure-type';

ensurePositiveFiniteNumber();
// => 0

ensurePositiveFiniteNumber({});
// => 0

ensurePositiveFiniteNumber(true);
// => 1

ensurePositiveFiniteNumber(false);
// => 0

ensurePositiveFiniteNumber(-1);
// => 0

ensurePositiveFiniteNumber(0);
// => 0

ensurePositiveFiniteNumber(1);
// => 1

ensurePositiveFiniteNumber(2e+64);
// => 2e+64

ensurePositiveFiniteNumber(Infinity);
// => 0

ensurePositiveFiniteNumber(-Infinity);
// => 0

ensurePositiveFiniteNumber(NaN);
// => 0

ensurePositiveFiniteNumber(undefined);
// => 0

ensurePositiveFiniteNumber(null);
// => 0

ensurePositiveFiniteNumber('-1');
// => 0

ensurePositiveFiniteNumber('0');
// => 0

ensurePositiveFiniteNumber('1');
// => 1

ensurePositiveFiniteNumber('');
// => 0

ensurePositiveFiniteNumber(' ');
// => 0

// Returns the coerced default value.
ensurePositiveFiniteNumber(null, '1');
// => 1

// Returns the default value.
ensurePositiveFiniteNumber(null, 1);
// => 1
```
