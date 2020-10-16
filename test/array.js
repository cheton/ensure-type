import {
  ensureArray,
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
