### `ensureString(value, defaultValue = '')`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a string, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureString } from 'ensure-type';

ensureString();
// => ''

ensureString({});
// => '[object Object]'

ensureString(true);
// => 'true'

ensureString(false);
// => 'false'

ensureString(0);
// => '0'

ensureString(1);
// => '1'

ensureString(2e+64);
// => '2e+64'

ensureString(Infinity);
// => 'Infinity'

ensureString(-Infinity);
// => '-Infinity'

ensureString(NaN);
// => 'NaN'

ensureString(undefined);
// => ''

ensureString(null);
// => ''

ensureString('');
// => ''

ensureString(' ');
// => ' '

// Returns the coerced default value.
ensureString(null, false);
// => 'false'

// Returns the default value.
ensureString(null, 'default');
// => 'default'
```
