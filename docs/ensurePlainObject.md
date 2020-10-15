### `ensurePlainObject(value, defaultValue = {})`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a plain object, it is returned back. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensurePlainObject } from 'ensure-type';

ensurePlainObject();
// => {}

ensurePlainObject({});
// => {}

ensurePlainObject({ one: 'two' });
// => { one: 'two' }

ensurePlainObject(true);
// => {}

ensurePlainObject(false);
// => {}

ensurePlainObject(0);
// => {}

ensurePlainObject(1);
// => {}

ensurePlainObject(2e+64);
// => {}

ensurePlainObject(Infinity);
// => {}

ensurePlainObject(-Infinity);
// => {}

ensurePlainObject(NaN);
// => {}

ensurePlainObject(undefined);
// => {}

ensurePlainObject(null);
// => {}

ensurePlainObject('');
// => {}

ensurePlainObject(' ');
// => {}

ensurePlainObject('one');
// => {}

// Returns the coerced default value.
ensurePlainObject(null, null);
// => {}

// Returns the default value.
ensurePlainObject(null, { name: 'value' });
// => { name: 'value' });
```
