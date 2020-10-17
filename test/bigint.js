import {
  ensureBigInt
} from '../src';

describe('BigInt', () => {
  test('ensureBigInt', () => {
    expect(ensureBigInt()).toEqual(0n);
    expect(ensureBigInt(undefined)).toEqual(0n);
    expect(ensureBigInt(null)).toEqual(0n);
    expect(ensureBigInt(true)).toEqual(1n);
    expect(ensureBigInt(false)).toEqual(0n);
    expect(ensureBigInt(Infinity)).toEqual(0n);
    expect(ensureBigInt(-Infinity)).toEqual(0n);
    expect(ensureBigInt(NaN)).toEqual(0n);
    expect(ensureBigInt({})).toEqual(0n);
    expect(ensureBigInt([])).toEqual(0n);
    expect(ensureBigInt('')).toEqual(0n);
    expect(ensureBigInt(' ')).toEqual(0n);
    expect(ensureBigInt('0')).toEqual(0n);
    expect(ensureBigInt('-0')).toEqual(-0n);
    expect(ensureBigInt('1')).toEqual(1n);
    expect(ensureBigInt('-1')).toEqual(-1n);
    expect(ensureBigInt('9007199254740991')).toEqual(9007199254740991n);
    expect(ensureBigInt(0)).toEqual(0n);
    expect(ensureBigInt(-0)).toEqual(-0n);
    expect(ensureBigInt(1)).toEqual(1n);
    expect(ensureBigInt(-1)).toEqual(-1n);
    expect(ensureBigInt(9007199254740991)).toEqual(9007199254740991n);
    expect(ensureBigInt(Number.MIN_SAFE_INTEGER)).toEqual(-9007199254740991n);
    expect(ensureBigInt(Number.MAX_SAFE_INTEGER)).toEqual(9007199254740991n);
    expect(ensureBigInt(0x1fffffffffffff)).toEqual(9007199254740991n);
    expect(ensureBigInt(0b11111111111111111111111111111111111111111111111111111)).toEqual(9007199254740991n);
    expect(ensureBigInt(0.2)).toEqual(0n);
    expect(ensureBigInt(-0.2)).toEqual(-0n);
    expect(ensureBigInt(0.7)).toEqual(0n);
    expect(ensureBigInt(-0.7)).toEqual(-0n);
    expect(Number.isInteger(5.0)).toBe(true);
    expect(Number.isInteger(5.000000000000001)).toBe(false);
    expect(Number.isInteger(5.0000000000000001)).toBe(true);
    expect(ensureBigInt(5.0)).toEqual(5n);
    expect(ensureBigInt(5.000000000000001)).toEqual(0n);
    expect(ensureBigInt(5.0000000000000001)).toEqual(5n);

    // Returns the coerced default value.
    expect(ensureBigInt(null, '0n')).toEqual(0n);
    expect(ensureBigInt(null, '-0n')).toEqual(-0n);

    // Returns the default value.
    expect(ensureBigInt(null, 0n)).toEqual(0n);
    expect(ensureBigInt(null, -0n)).toEqual(-0n);
  });
});
