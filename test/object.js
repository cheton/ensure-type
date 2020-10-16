import {
  ensurePlainObject,
} from '../src';

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

    // Returns the coerced default value.
    expect(ensurePlainObject(null, null)).toEqual({});

    // Returns the default value.
    expect(ensurePlainObject(null, { name: 'value' })).toEqual({ name: 'value' });
  });
});
