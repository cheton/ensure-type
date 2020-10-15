import {
  ensureString,
} from '../src';

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
