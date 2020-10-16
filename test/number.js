import {
  ensureNumber,
  ensureNegativeNumber,
  ensurePositiveNumber,
  ensureFiniteNumber,
  ensureNegativeFiniteNumber,
  ensurePositiveFiniteNumber,
  ensureInteger,
  ensureNegativeInteger,
  ensurePositiveInteger,
} from '../src';

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
    expect(ensureNegativeNumber()).toEqual(-0);
    expect(ensureNegativeNumber({})).toEqual(-0);
    expect(ensureNegativeNumber(true)).toEqual(-0);
    expect(ensureNegativeNumber(false)).toEqual(-0);
    expect(ensureNegativeNumber(-1)).toEqual(-1);
    expect(ensureNegativeNumber(0)).toEqual(-0);
    expect(ensureNegativeNumber(1)).toEqual(-0);
    expect(ensureNegativeNumber(2e+64)).toEqual(-0);
    expect(ensureNegativeNumber(Infinity)).toEqual(-0);
    expect(ensureNegativeNumber(-Infinity)).toEqual(-Infinity);
    expect(ensureNegativeNumber(NaN)).toEqual(-0);
    expect(ensureNegativeNumber(undefined)).toEqual(-0);
    expect(ensureNegativeNumber(null)).toEqual(-0);
    expect(ensureNegativeNumber('-1')).toEqual(-1);
    expect(ensureNegativeNumber('0')).toEqual(-0);
    expect(ensureNegativeNumber('1')).toEqual(-0);
    expect(ensureNegativeNumber('')).toEqual(-0);
    expect(ensureNegativeNumber(' ')).toEqual(-0);

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
    expect(ensureFiniteNumber(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensureFiniteNumber(null, 1)).toEqual(1);
  });

  test('ensureNegativeFiniteNumber', () => {
    expect(ensureNegativeFiniteNumber()).toEqual(-0);
    expect(ensureNegativeFiniteNumber({})).toEqual(-0);
    expect(ensureNegativeFiniteNumber(true)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(false)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(-1)).toEqual(-1);
    expect(ensureNegativeFiniteNumber(0)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(1)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(2e+64)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(Infinity)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(-Infinity)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(NaN)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(undefined)).toEqual(-0);
    expect(ensureNegativeFiniteNumber(null)).toEqual(-0);
    expect(ensureNegativeFiniteNumber('-1')).toEqual(-1);
    expect(ensureNegativeFiniteNumber('0')).toEqual(-0);
    expect(ensureNegativeFiniteNumber('1')).toEqual(-0);
    expect(ensureNegativeFiniteNumber('')).toEqual(-0);
    expect(ensureNegativeFiniteNumber(' ')).toEqual(-0);

    // Returns the coerced default value.
    expect(ensureNegativeFiniteNumber(null, '-1')).toEqual(-1);

    // Returns the default value.
    expect(ensureNegativeFiniteNumber(null, -1)).toEqual(-1);
  });

  test('ensurePositiveFiniteNumber', () => {
    expect(ensurePositiveFiniteNumber()).toEqual(0);
    expect(ensurePositiveFiniteNumber({})).toEqual(0);
    expect(ensurePositiveFiniteNumber(true)).toEqual(1);
    expect(ensurePositiveFiniteNumber(false)).toEqual(0);
    expect(ensurePositiveFiniteNumber(-1)).toEqual(0);
    expect(ensurePositiveFiniteNumber(0)).toEqual(0);
    expect(ensurePositiveFiniteNumber(1)).toEqual(1);
    expect(ensurePositiveFiniteNumber(2e+64)).toEqual(2e+64);
    expect(ensurePositiveFiniteNumber(Infinity)).toEqual(0);
    expect(ensurePositiveFiniteNumber(-Infinity)).toEqual(0);
    expect(ensurePositiveFiniteNumber(NaN)).toEqual(0);
    expect(ensurePositiveFiniteNumber(undefined)).toEqual(0);
    expect(ensurePositiveFiniteNumber(null)).toEqual(0);
    expect(ensurePositiveFiniteNumber('-1')).toEqual(0);
    expect(ensurePositiveFiniteNumber('0')).toEqual(0);
    expect(ensurePositiveFiniteNumber('1')).toEqual(1);
    expect(ensurePositiveFiniteNumber('')).toEqual(0);
    expect(ensurePositiveFiniteNumber(' ')).toEqual(0);

    // Returns the coerced default value.
    expect(ensurePositiveFiniteNumber(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensurePositiveFiniteNumber(null, 1)).toEqual(1);
  });

  test('ensureInteger', () => {
    expect(ensureInteger()).toEqual(0);
    expect(ensureInteger(undefined)).toEqual(0);
    expect(ensureInteger(null)).toEqual(0);
    expect(ensureInteger(true)).toEqual(1);
    expect(ensureInteger(false)).toEqual(0);
    expect(ensureInteger(Infinity)).toEqual(0);
    expect(ensureInteger(-Infinity)).toEqual(0);
    expect(ensureInteger(NaN)).toEqual(0);
    expect(ensureInteger({})).toEqual(0);
    expect(ensureInteger([])).toEqual(0);
    expect(ensureInteger('')).toEqual(0);
    expect(ensureInteger(' ')).toEqual(0);
    expect(ensureInteger('0')).toEqual(0);
    expect(ensureInteger('-0')).toEqual(-0);
    expect(ensureInteger('1')).toEqual(1);
    expect(ensureInteger('-1')).toEqual(-1);
    expect(ensureInteger(0)).toEqual(0);
    expect(ensureInteger(-0)).toEqual(-0);
    expect(ensureInteger(1)).toEqual(1);
    expect(ensureInteger(-1)).toEqual(-1);
    expect(ensureInteger(99999999999999999999999)).toEqual(99999999999999999999999);
    expect(ensureInteger(2e+64)).toEqual(2e+64);
    expect(ensureInteger(Math.PI)).toEqual(3);
    expect(ensureInteger(Number.MIN_SAFE_INTEGER)).toEqual(Number.MIN_SAFE_INTEGER);
    expect(ensureInteger(Number.MAX_SAFE_INTEGER)).toEqual(Number.MAX_SAFE_INTEGER);
    expect(ensureInteger(0.2)).toEqual(0);
    expect(ensureInteger(-0.2)).toEqual(-0);
    expect(ensureInteger(0.7)).toEqual(0);
    expect(ensureInteger(-0.7)).toEqual(-0);
    expect(Number.isInteger(5.0)).toBe(true);
    expect(Number.isInteger(5.000000000000001)).toBe(false);
    expect(Number.isInteger(5.0000000000000001)).toBe(true);
    expect(ensureInteger(5.0)).toEqual(5);
    expect(ensureInteger(5.000000000000001)).toEqual(5);
    expect(ensureInteger(5.0000000000000001)).toEqual(5);

    // Returns the coerced default value.
    expect(ensureInteger(null, '1')).toEqual(1);
    expect(ensureInteger(null, '-1')).toEqual(-1);

    // Returns the default value.
    expect(ensureInteger(null, 1)).toEqual(1);
    expect(ensureInteger(null, -1)).toEqual(-1);
  });

  test('ensureNegativeInteger', () => {
    expect(ensureNegativeInteger()).toEqual(-0);
    expect(ensureNegativeInteger(undefined)).toEqual(-0);
    expect(ensureNegativeInteger(null)).toEqual(-0);
    expect(ensureNegativeInteger(true)).toEqual(-0);
    expect(ensureNegativeInteger(false)).toEqual(-0);
    expect(ensureNegativeInteger(Infinity)).toEqual(-0);
    expect(ensureNegativeInteger(-Infinity)).toEqual(-0);
    expect(ensureNegativeInteger(NaN)).toEqual(-0);
    expect(ensureNegativeInteger({})).toEqual(-0);
    expect(ensureNegativeInteger([])).toEqual(-0);
    expect(ensureNegativeInteger('')).toEqual(-0);
    expect(ensureNegativeInteger(' ')).toEqual(-0);
    expect(ensureNegativeInteger('0')).toEqual(-0);
    expect(ensureNegativeInteger('-0')).toEqual(-0);
    expect(ensureNegativeInteger('1')).toEqual(-0);
    expect(ensureNegativeInteger('-1')).toEqual(-1);
    expect(ensureNegativeInteger(0)).toEqual(-0);
    expect(ensureNegativeInteger(-0)).toEqual(-0);
    expect(ensureNegativeInteger(1)).toEqual(-0);
    expect(ensureNegativeInteger(-1)).toEqual(-1);
    expect(ensureNegativeInteger(-99999999999999999999999)).toEqual(-99999999999999999999999);
    expect(ensureNegativeInteger(-2e+64)).toEqual(-2e+64);
    expect(ensureNegativeInteger(-Math.PI)).toEqual(-3);
    expect(ensureNegativeInteger(Number.MIN_SAFE_INTEGER)).toEqual(Number.MIN_SAFE_INTEGER);
    expect(ensureNegativeInteger(Number.MAX_SAFE_INTEGER)).toEqual(-0);
    expect(ensureNegativeInteger(0.2)).toEqual(-0);
    expect(ensureNegativeInteger(-0.2)).toEqual(-0);
    expect(ensureNegativeInteger(0.7)).toEqual(-0);
    expect(ensureNegativeInteger(-0.7)).toEqual(-0);
    expect(Number.isInteger(-5.0)).toBe(true);
    expect(Number.isInteger(-5.000000000000001)).toBe(false);
    expect(Number.isInteger(-5.0000000000000001)).toBe(true);
    expect(ensureNegativeInteger(-5.0)).toEqual(-5);
    expect(ensureNegativeInteger(-5.000000000000001)).toEqual(-5);
    expect(ensureNegativeInteger(-5.0000000000000001)).toEqual(-5);

    // Returns the coerced default value.
    expect(ensureNegativeInteger(null, '-1')).toEqual(-1);

    // Returns the default value.
    expect(ensureNegativeInteger(null, -1)).toEqual(-1);
  });

  test('ensurePositiveInteger', () => {
    expect(ensurePositiveInteger()).toEqual(0);
    expect(ensurePositiveInteger(undefined)).toEqual(0);
    expect(ensurePositiveInteger(null)).toEqual(0);
    expect(ensurePositiveInteger(true)).toEqual(1);
    expect(ensurePositiveInteger(false)).toEqual(0);
    expect(ensurePositiveInteger(Infinity)).toEqual(0);
    expect(ensurePositiveInteger(-Infinity)).toEqual(0);
    expect(ensurePositiveInteger(NaN)).toEqual(0);
    expect(ensurePositiveInteger({})).toEqual(0);
    expect(ensurePositiveInteger([])).toEqual(0);
    expect(ensurePositiveInteger('')).toEqual(0);
    expect(ensurePositiveInteger(' ')).toEqual(0);
    expect(ensurePositiveInteger('0')).toEqual(0);
    expect(ensurePositiveInteger('-0')).toEqual(0);
    expect(ensurePositiveInteger('1')).toEqual(1);
    expect(ensurePositiveInteger('-1')).toEqual(0);
    expect(ensurePositiveInteger(0)).toEqual(0);
    expect(ensurePositiveInteger(-0)).toEqual(0);
    expect(ensurePositiveInteger(1)).toEqual(1);
    expect(ensurePositiveInteger(-1)).toEqual(0);
    expect(ensurePositiveInteger(99999999999999999999999)).toEqual(99999999999999999999999);
    expect(ensurePositiveInteger(2e+64)).toEqual(2e+64);
    expect(ensurePositiveInteger(Math.PI)).toEqual(3);
    expect(ensurePositiveInteger(Number.MIN_SAFE_INTEGER)).toEqual(0);
    expect(ensurePositiveInteger(Number.MAX_SAFE_INTEGER)).toEqual(Number.MAX_SAFE_INTEGER);
    expect(ensurePositiveInteger(0.2)).toEqual(0);
    expect(ensurePositiveInteger(-0.2)).toEqual(0);
    expect(ensurePositiveInteger(0.7)).toEqual(0);
    expect(ensurePositiveInteger(-0.7)).toEqual(0);
    expect(Number.isInteger(5.0)).toBe(true);
    expect(Number.isInteger(5.000000000000001)).toBe(false);
    expect(Number.isInteger(5.0000000000000001)).toBe(true);
    expect(ensurePositiveInteger(5.0)).toEqual(5);
    expect(ensurePositiveInteger(5.000000000000001)).toEqual(5);
    expect(ensurePositiveInteger(5.0000000000000001)).toEqual(5);

    // Returns the coerced default value.
    expect(ensurePositiveInteger(null, '1')).toEqual(1);

    // Returns the default value.
    expect(ensurePositiveInteger(null, 1)).toEqual(1);
  });
});
