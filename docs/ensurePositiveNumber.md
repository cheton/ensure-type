### `ensurePositiveNumber(value, defaultValue = 0)`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensurePositiveNumber } from 'ensure-type';

ensurePositiveNumber();
// => 0

ensurePositiveNumber({});
// => 0

ensurePositiveNumber(true);
// => 1

ensurePositiveNumber(false);
// => 0

ensurePositiveNumber(-1);
// => 0

ensurePositiveNumber(0);
// => 0

ensurePositiveNumber(1);
// => 1

ensurePositiveNumber(2e+64);
// => 2e+64

ensurePositiveNumber(Infinity);
// => Infinity

ensurePositiveNumber(-Infinity);
// => 0

ensurePositiveNumber(NaN);
// => 0

ensurePositiveNumber(undefined);
// => 0

ensurePositiveNumber(null);
// => 0

ensurePositiveNumber('-1');
// => 0

ensurePositiveNumber('0');
// => 0

ensurePositiveNumber('1');
// => 1

ensurePositiveNumber('');
// => 0

ensurePositiveNumber(' ');
// => 0

// Returns the coerced default value.
ensurePositiveNumber(null, '1');
// => 1

// Returns the default value.
ensurePositiveNumber(null, 1);
// => 1
```
