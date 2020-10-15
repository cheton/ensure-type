import {
  ensureArray,
  ensureBoolean,
  ensureNumber,
  ensureFiniteNumber,
  ensurePlainObject,
  ensureString,
} from '../src';

describe('Array', () => {
  test('ensureArray', () => {
    expect(ensureArray()).toEqual([]);
    expect(ensureArray({})).toEqual([{}]);
    expect(ensureArray(true)).toEqual([true]);
    expect(ensureArray(false)).toEqual([false]);
    expect(ensureArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(ensureArray(10)).toEqual([10]);
    expect(ensureArray(NaN)).toEqual([NaN]);
    expect(ensureArray(undefined)).toEqual([]);
    expect(ensureArray(null)).toEqual([]);
    expect(ensureArray('')).toEqual(['']);
    expect(ensureArray(' ')).toEqual([' ']);

    // Returns the coerced default value.
    expect(ensureArray(null, 0)).toEqual([0]);

    // Returns the default value.
    expect(ensureArray(null, [0])).toEqual([0]);
  });
});

describe('Boolean', () => {
  test('ensureBoolean', () => {
    expect(ensureBoolean()).toEqual(false);
    expect(ensureBoolean({})).toEqual(true);
    expect(ensureBoolean(true)).toEqual(true);
    expect(ensureBoolean(false)).toEqual(false);
    expect(ensureBoolean(0)).toEqual(false);
    expect(ensureBoolean(1)).toEqual(true);
    expect(ensureBoolean(2e+64)).toEqual(true);
    expect(ensureBoolean(Infinity)).toEqual(true);
    expect(ensureBoolean(-Infinity)).toEqual(true);
    expect(ensureBoolean(NaN)).toEqual(false);
    expect(ensureBoolean(undefined)).toEqual(false);
    expect(ensureBoolean(null)).toEqual(false);
    expect(ensureBoolean('0')).toEqual(true);
    expect(ensureBoolean('1')).toEqual(true);
    expect(ensureBoolean('')).toEqual(false);
    expect(ensureBoolean(' ')).toEqual(true);

    // Returns the coerced default value.
    expect(ensureBoolean(null, '')).toEqual(false);

    // Returns the coerced default value.
    expect(ensureBoolean(null, ' ')).toEqual(true);

    // Returns the default value.
    expect(ensureBoolean(null, true)).toEqual(true);
  });
});

describe('Number', () => {
  test('ensureNumber', () => {
    expect(ensureNumber()).toEqual(0);
    expect(Number.isNaN(ensureNumber({}))).toEqual(true);
    expect(ensureNumber(true)).toEqual(1);
    expect(ensureNumber(false)).toEqual(0);
    expect(ensureNumber(0)).toEqual(0);
    expect(ensureNumber(1)).toEqual(1);
    expect(ensureNumber(2e+64)).toEqual(2e+64);
    expect(ensureNumber(Infinity)).toEqual(Infinity);
    expect(ensureNumber(-Infinity)).toEqual(-Infinity);
    expect(Number.isNaN(ensureNumber(NaN))).toEqual(true);
    expect(ensureNumber(undefined)).toEqual(0);
    expect(ensureNumber(null)).toEqual(0);
    expect(ensureNumber('0')).toEqual(0);
    expect(ensureNumber('1')).toEqual(1);
    expect(ensureNumber('')).toEqual(0);
    expect(ensureNumber(' ')).toEqual(0);
    expect(Number.isNaN(ensureNumber('one'))).toEqual(true);

    // Returns the coerced default value.
    expect(ensureNumber(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensureNumber(null, NaN)).toEqual(NaN);
  });

  test('ensureFiniteNumber', () => {
    expect(ensureFiniteNumber()).toEqual(0);
    expect(ensureFiniteNumber({})).toEqual(0);
    expect(ensureFiniteNumber(true)).toEqual(1);
    expect(ensureFiniteNumber(false)).toEqual(0);
    expect(ensureFiniteNumber(0)).toEqual(0);
    expect(ensureFiniteNumber(1)).toEqual(1);
    expect(ensureFiniteNumber(2e+64)).toEqual(2e+64);
    expect(ensureFiniteNumber(Infinity)).toEqual(0);
    expect(ensureFiniteNumber(-Infinity)).toEqual(0);
    expect(ensureFiniteNumber(NaN)).toEqual(0);
    expect(ensureFiniteNumber(undefined)).toEqual(0);
    expect(ensureFiniteNumber(null)).toEqual(0);
    expect(ensureFiniteNumber('0')).toEqual(0);
    expect(ensureFiniteNumber('1')).toEqual(1);
    expect(ensureFiniteNumber('')).toEqual(0);
    expect(ensureFiniteNumber(' ')).toEqual(0);
    expect(ensureFiniteNumber('one')).toEqual(0);

    // Returns the coerced default value.
    expect(ensureFiniteNumber(null, NaN)).toEqual(0);

    // Returns the default value.
    expect(ensureFiniteNumber(null, 1)).toEqual(1);
  });
});

describe('Object', () => {
  test('ensurePlainObject', () => {
    expect(ensurePlainObject()).toEqual({});
    expect(ensurePlainObject({})).toEqual(({}));
    expect(ensurePlainObject({ one: 'two' })).toEqual(({ one: 'two' }));
    expect(ensurePlainObject(true)).toEqual({});
    expect(ensurePlainObject(false)).toEqual({});
    expect(ensurePlainObject(0)).toEqual({});
    expect(ensurePlainObject(1)).toEqual({});
    expect(ensurePlainObject(2e+64)).toEqual({});
    expect(ensurePlainObject(Infinity)).toEqual({});
    expect(ensurePlainObject(-Infinity)).toEqual({});
    expect(ensurePlainObject(NaN)).toEqual({});
    expect(ensurePlainObject(undefined)).toEqual({});
    expect(ensurePlainObject(null)).toEqual({});
    expect(ensurePlainObject('')).toEqual({});
    expect(ensurePlainObject(' ')).toEqual({});
    expect(ensurePlainObject('one')).toEqual({});

    // Returns the coerced default value.
    expect(ensurePlainObject(null, null)).toEqual({});

    // Returns the default value.
    expect(ensurePlainObject(null, { name: 'value' })).toEqual({ name: 'value' });
  });
});

describe('String', () => {
  test('ensureString', () => {
    expect(ensureString()).toEqual('');
    expect(ensureString({})).toEqual('[object Object]');
    expect(ensureString(true)).toEqual('true');
    expect(ensureString(false)).toEqual('false');
    expect(ensureString(0)).toEqual('0');
    expect(ensureString(1)).toEqual('1');
    expect(ensureString(2e+64)).toEqual('2e+64');
    expect(ensureString(Infinity)).toEqual('Infinity');
    expect(ensureString(-Infinity)).toEqual('-Infinity');
    expect(ensureString(NaN)).toEqual('NaN');
    expect(ensureString(undefined)).toEqual('');
    expect(ensureString(null)).toEqual('');
    expect(ensureString('')).toEqual('');
    expect(ensureString(' ')).toEqual(' ');

    // Returns the coerced default value.
    expect(ensureString(null, false)).toEqual('false');

    // Returns the default value.
    expect(ensureString(null, 'default')).toEqual('default');
  });
});
