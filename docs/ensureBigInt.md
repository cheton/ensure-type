### `ensureBigInt(value, [defaultValue=0n])`

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a big integer coercible value, the result value is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureBigInt } from 'ensure-type';

ensureBigInt();
// => 0n

ensureBigInt(undefined);
// => 0n

ensureBigInt(null);
// => 0n

ensureBigInt(true);
// => 1n

ensureBigInt(false);
// => 0n

ensureBigInt(Infinity);
// => 0n

ensureBigInt(-Infinity);
// => 0n

ensureBigInt(NaN);
// => 0n

ensureBigInt({});
// => 0n

ensureBigInt([]);
// => 0n

ensureBigInt('');
// => 0n

ensureBigInt(' ');
// => 0n

ensureBigInt('0');
// => 0n

ensureBigInt('-0');
// => -0n

ensureBigInt('1');
// => 1n

ensureBigInt('-1');
// => -1n

ensureBigInt('9007199254740991');
// => 9007199254740991n

ensureBigInt(0);
// => 0n

ensureBigInt(-0);
// => -0n

ensureBigInt(1);
// => 1n

ensureBigInt(-1);
// => -1n

ensureBigInt(9007199254740991);
// => 9007199254740991n

ensureBigInt(Number.MIN_SAFE_INTEGER);
// => -9007199254740991n

ensureBigInt(Number.MAX_SAFE_INTEGER);
// => 9007199254740991n

ensureBigInt(0x1fffffffffffff);
// => 9007199254740991n

ensureBigInt(0b11111111111111111111111111111111111111111111111111111);
// => 9007199254740991n

ensureBigInt(0.2);
// => 0n

ensureBigInt(-0.2);
// => -0n

ensureBigInt(0.7);
// => 0n

ensureBigInt(-0.7);
// => -0n

// Number.isInteger(5.0) => true
ensureBigInt(5.0);
// => 5n

// Number.isInteger(5.000000000000001) => false
ensureBigInt(5.000000000000001);
// => 0n

// Number.isInteger(5.0000000000000001) => true
ensureBigInt(5.0000000000000001);
// => 5n

// Returns the coerced default value.
ensureBigInt(null, '0n');
// => 0n

// Returns the coerced default value.
ensureBigInt(null, '-0n');
// => -0n

// Returns the default value.
ensureBigInt(null, 0n);
// => 0n

// Returns the default value.
ensureBigInt(null, -0n);
// => -0n
```
