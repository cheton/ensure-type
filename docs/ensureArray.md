### `ensureArray(value, defaultValue = [])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an array, it is returned back. Otherwise, returns a new array containing the value.

```js
import { ensureArray } from 'ensure-type';

ensureArray();
// => []

ensureArray({});
// => [{}]

ensureArray(true);
// => [true]

ensureArray(false);
// => [false]

ensureArray([1, 2, 3]);
// => [1, 2, 3]

ensureArray(10);
// => [10]

ensureArray(NaN);
// => [NaN]

ensureArray(undefined);
// => []

ensureArray(null);
// => []

ensureArray('');
// => ['']

ensureArray(' ');
// => [' ']

// Returns the coerced default value.
ensureArray(null, 0);
// => [0]

// Returns the default value.
ensureArray(null, [0]);
// => [0]
```
