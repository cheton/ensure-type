import {
  ensureNumber,
  ensureNegativeNumber,
  ensurePositiveNumber,
  ensureFiniteNumber,
} from '../src';

const negativeZero = -0;

describe('Number', () => {
  test('ensureNumber', () => {
    expect(ensureNumber()).toEqual(0);
    expect(ensureNumber({})).toEqual(0);
    expect(ensureNumber(true)).toEqual(1);
    expect(ensureNumber(false)).toEqual(0);
    expect(ensureNumber(-1)).toEqual(-1);
    expect(ensureNumber(0)).toEqual(0);
    expect(ensureNumber(1)).toEqual(1);
    expect(ensureNumber(2e+64)).toEqual(2e+64);
    expect(ensureNumber(Infinity)).toEqual(Infinity);
    expect(ensureNumber(-Infinity)).toEqual(-Infinity);
    expect(ensureNumber(NaN)).toEqual(0);
    expect(ensureNumber(undefined)).toEqual(0);
    expect(ensureNumber(null)).toEqual(0);
    expect(ensureNumber('-1')).toEqual(-1);
    expect(ensureNumber('0')).toEqual(0);
    expect(ensureNumber('1')).toEqual(1);
    expect(ensureNumber('')).toEqual(0);
    expect(ensureNumber(' ')).toEqual(0);

    // Returns the coerced default value.
    expect(ensureNumber(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensureNumber(null, 1)).toEqual(1);
  });

  test('ensureNegativeNumber', () => {
    expect(ensureNegativeNumber()).toEqual(negativeZero);
    expect(ensureNegativeNumber({})).toEqual(negativeZero);
    expect(ensureNegativeNumber(true)).toEqual(negativeZero);
    expect(ensureNegativeNumber(false)).toEqual(negativeZero);
    expect(ensureNegativeNumber(-1)).toEqual(-1);
    expect(ensureNegativeNumber(0)).toEqual(negativeZero);
    expect(ensureNegativeNumber(1)).toEqual(negativeZero);
    expect(ensureNegativeNumber(2e+64)).toEqual(negativeZero);
    expect(ensureNegativeNumber(Infinity)).toEqual(negativeZero);
    expect(ensureNegativeNumber(-Infinity)).toEqual(-Infinity);
    expect(ensureNegativeNumber(NaN)).toEqual(negativeZero);
    expect(ensureNegativeNumber(undefined)).toEqual(negativeZero);
    expect(ensureNegativeNumber(null)).toEqual(negativeZero);
    expect(ensureNegativeNumber('-1')).toEqual(-1);
    expect(ensureNegativeNumber('0')).toEqual(negativeZero);
    expect(ensureNegativeNumber('1')).toEqual(negativeZero);
    expect(ensureNegativeNumber('')).toEqual(negativeZero);
    expect(ensureNegativeNumber(' ')).toEqual(negativeZero);

    // Returns the coerced default value.
    expect(ensureNegativeNumber(null, '-1')).toEqual(-1);

    // Returns the default value.
    expect(ensureNegativeNumber(null, -1)).toEqual(-1);
  });

  test('ensurePositiveNumber', () => {
    expect(ensurePositiveNumber()).toEqual(0);
    expect(ensurePositiveNumber({})).toEqual(0);
    expect(ensurePositiveNumber(true)).toEqual(1);
    expect(ensurePositiveNumber(false)).toEqual(0);
    expect(ensurePositiveNumber(-1)).toEqual(0);
    expect(ensurePositiveNumber(0)).toEqual(0);
    expect(ensurePositiveNumber(1)).toEqual(1);
    expect(ensurePositiveNumber(2e+64)).toEqual(2e+64);
    expect(ensurePositiveNumber(Infinity)).toEqual(Infinity);
    expect(ensurePositiveNumber(-Infinity)).toEqual(0);
    expect(ensurePositiveNumber(NaN)).toEqual(0);
    expect(ensurePositiveNumber(undefined)).toEqual(0);
    expect(ensurePositiveNumber(null)).toEqual(0);
    expect(ensurePositiveNumber('-1')).toEqual(0);
    expect(ensurePositiveNumber('0')).toEqual(0);
    expect(ensurePositiveNumber('1')).toEqual(1);
    expect(ensurePositiveNumber('')).toEqual(0);
    expect(ensurePositiveNumber(' ')).toEqual(0);

    // Returns the coerced default value.
    expect(ensurePositiveNumber(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensurePositiveNumber(null, 1)).toEqual(1);
  });

  test('ensureFiniteNumber', () => {
    expect(ensureFiniteNumber()).toEqual(0);
    expect(ensureFiniteNumber({})).toEqual(0);
    expect(ensureFiniteNumber(true)).toEqual(1);
    expect(ensureFiniteNumber(false)).toEqual(0);
    expect(ensureFiniteNumber(-1)).toEqual(-1);
    expect(ensureFiniteNumber(0)).toEqual(0);
    expect(ensureFiniteNumber(1)).toEqual(1);
    expect(ensureFiniteNumber(2e+64)).toEqual(2e+64);
    expect(ensureFiniteNumber(Infinity)).toEqual(0);
    expect(ensureFiniteNumber(-Infinity)).toEqual(0);
    expect(ensureFiniteNumber(NaN)).toEqual(0);
    expect(ensureFiniteNumber(undefined)).toEqual(0);
    expect(ensureFiniteNumber(null)).toEqual(0);
    expect(ensureFiniteNumber('-1')).toEqual(-1);
    expect(ensureFiniteNumber('0')).toEqual(0);
    expect(ensureFiniteNumber('1')).toEqual(1);
    expect(ensureFiniteNumber('')).toEqual(0);
    expect(ensureFiniteNumber(' ')).toEqual(0);

    // Returns the coerced default value.
    expect(ensureFiniteNumber(null, NaN)).toEqual(0);

    // Returns the default value.
    expect(ensureFiniteNumber(null, 1)).toEqual(1);
  });
});
