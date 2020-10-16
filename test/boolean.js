import {
  ensureBoolean,
} from '../src';

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
