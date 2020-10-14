# ensure-type [![Build Status](https://travis-ci.com/cheton/ensure-type.svg?branch=master)](https://travis-ci.com/cheton/ensure-type) [![Coverage Status](https://coveralls.io/repos/github/cheton/ensure-type/badge.svg?branch=master)](https://coveralls.io/github/cheton/ensure-type?branch=master)

[![NPM](https://nodei.co/npm/ensure-type.png?downloads=true&stars=true)](https://www.npmjs.com/package/ensure-type)

Ensure runtime type safety and perform type coercion if needed.

## Install

```
$ npm install --save ensure-type
```

## Usage

```js
import {
  ensureArray,
  ensureBoolean,
  ensurePlainObject,
} from 'ensure-type';

ensureArray(null);
//=> []

ensureBoolean(0);
//=> false

ensurePlainObject(1);
//=> {}
```

## API

### ensureArray(value, defaultValue = [])

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is an array, it is returned back. Otherwise, returns a new array containing the value.

```js
import { ensureArray } from 'ensure-type';

ensureArray('');
//=> ['']

ensureArray({});
//=> [{}]
```

### ensureBoolean(value, defaultValue = false)

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a boolean, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureBoolean } from 'ensure-type';

ensureBoolean('1');
//=> true

ensureBoolean(null);
//=> false
```

### ensureNumber(value, defaultValue = 0)

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a number, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureNumber } from 'ensure-type';

ensureNumber('10');
//=> 10

ensureNumber(null);
//=> 0
```

### ensureFiniteNumber(value, defaultValue = 0)

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a finite number coercible value, the result number is returned. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensureFiniteNumber } from 'ensure-type';

ensureFiniteNumber('10');
//=> 10

ensureFiniteNumber(NaN);
//=> 0
```

### ensurePlainObject(value, defaultValue = {})

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a plain object, it is returned back. Otherwise, the `defaultValue` is returned with type coercion.

```js
import { ensurePlainObject } from 'ensure-type';

ensurePlainObject({});
//=> {}

ensurePlainObject('foo'); // 'foo' is not a plain object
//=> {}
```

### ensureString(value, defaultValue = '')

* If given `value` is `undefined` or `null`, the `defaultValue` is returned with type coercion.
* If given `value` is a string, it is returned back. Otherwise, returns the coerced value.

```js
import { ensureString } from 'ensure-type';

ensureString(10);
//=> '10'

ensureString(null);
//=> ''
```

## License

MIT
