import {
  ensureFunction,
} from '../src';

describe('Function', () => {
  const defaultFunction = function() {};

  test('ensureFunction', () => {
    expect(ensureFunction()).toBeInstanceOf(Function);
    expect(ensureFunction({})).toBeInstanceOf(Function);
    expect(ensureFunction({ one: 'two' })).toBeInstanceOf(Function);
    expect(ensureFunction(true)).toBeInstanceOf(Function);
    expect(ensureFunction(false)).toBeInstanceOf(Function);
    expect(ensureFunction(0)).toBeInstanceOf(Function);
    expect(ensureFunction(1)).toBeInstanceOf(Function);
    expect(ensureFunction(2e+64)).toBeInstanceOf(Function);
    expect(ensureFunction(Infinity)).toBeInstanceOf(Function);
    expect(ensureFunction(-Infinity)).toBeInstanceOf(Function);
    expect(ensureFunction(NaN)).toBeInstanceOf(Function);
    expect(ensureFunction(undefined)).toBeInstanceOf(Function);
    expect(ensureFunction(null)).toBeInstanceOf(Function);
    expect(ensureFunction('')).toBeInstanceOf(Function);
    expect(ensureFunction(' ')).toBeInstanceOf(Function);

    // Returns the coerced default value.
    expect(ensureFunction(null, null)).toBeInstanceOf(Function);

    // Returns the default value.
    expect(ensureFunction(null, defaultFunction)).toEqual(defaultFunction);
  });
});
