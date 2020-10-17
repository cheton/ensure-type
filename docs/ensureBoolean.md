### `ensureBoolean(value, [defaultValue=false])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a boolean, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureBoolean } from 'ensure-type';

ensureBoolean();
// => false

ensureBoolean({});
// => true

ensureBoolean(true);
// => true

ensureBoolean(false);
// => false

ensureBoolean(0);
// => false

ensureBoolean(1);
// => true

ensureBoolean(2e+64);
// => true

ensureBoolean(Infinity);
// => true

ensureBoolean(-Infinity);
// => true

ensureBoolean(NaN);
// => false

ensureBoolean(undefined);
// => false

ensureBoolean(null);
// => false

ensureBoolean('0');
// => true

ensureBoolean('1');
// => true

ensureBoolean('');
// => false

ensureBoolean(' ');
// => true

// Returns the coerced default value.
ensureBoolean(null, '');
// => false

// Returns the coerced default value.
ensureBoolean(null, ' ');
// => true

// Returns the default value.
ensureBoolean(null, true);
// => true
```
