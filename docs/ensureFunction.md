### `ensureFunction(value, [defaultValue=function(){}])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a function, it is returned back. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureFunction } from 'ensure-type';

ensureFunction();
// => ƒ () {}

ensureFunction({});
// => ƒ () {}

ensureFunction({ one: 'two' });
// => ƒ () {}

ensureFunction(true);
// => ƒ () {}

ensureFunction(false);
// => ƒ () {}

ensureFunction(0);
// => ƒ () {}

ensureFunction(1);
// => ƒ () {}

ensureFunction(2e+64);
// => ƒ () {}

ensureFunction(Infinity);
// => ƒ () {}

ensureFunction(-Infinity);
// => ƒ () {}

ensureFunction(NaN);
// => ƒ () {}

ensureFunction(undefined);
// => ƒ () {}

ensureFunction(null);
// => ƒ () {}

ensureFunction('');
// => ƒ () {}

ensureFunction(' ');
// => ƒ () {}

ensureFunction('one');
// => ƒ () {}

// Returns the coerced default value.
ensureFunction(null, null);
// => ƒ () {}

// Returns the default value.
ensureFunction(null, function defaultFunction() {});
// => ƒ defaultFunction() {}
```
