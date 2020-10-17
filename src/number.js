/**
 * The trunc() function returns the integer part of a number by removing any fractional digits.
 */
const trunc = (v) => {
  return (v < 0) ? Math.ceil(v) : Math.floor(v);
};

const ensureNumber = (value, defaultValue = 0) => {
  if (value === undefined || value === null) {
    return ensureNumber(defaultValue);
  }

  value = Number(value); // number coercible value

  if (Number.isNaN(value)) {
    return ensureNumber(defaultValue);
  }

  return value;
};

const ensureNegativeNumber = (value, defaultValue = -0) => {
  return Math.min(ensureNumber(value, defaultValue), -0);
};

const ensurePositiveNumber = (value, defaultValue = 0) => {
  return Math.max(ensureNumber(value, defaultValue), 0);
};

const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value, defaultValue);

  return Number.isFinite(value) ? value : ensureFiniteNumber(defaultValue);
};

const ensureNegativeFiniteNumber = (value, defaultValue = -0) => {
  return Math.min(ensureFiniteNumber(value, defaultValue), -0);
};

const ensurePositiveFiniteNumber = (value, defaultValue = 0) => {
  return Math.max(ensureFiniteNumber(value, defaultValue), 0);
};

const ensureInteger = (value, defaultValue = 0) => {
  value = ensureFiniteNumber(value, defaultValue);

  return trunc(value);
};

/**
 * An integer is negative if it is less than zero.
 */
const ensureNegativeInteger = (value, defaultValue = -1) => {
  return Math.min(ensureInteger(value, defaultValue), -1);
};

/**
 * An integer is positive if it is greater than zero.
 */
const ensurePositiveInteger = (value, defaultValue = 1) => {
  return Math.max(ensureInteger(value, defaultValue), 1);
};

/**
 * A non-negative integer is an integer that is either zero or positive.
 */
const ensureNonNegativeInteger = (value, defaultValue = 0) => {
  return Math.max(ensureInteger(value, defaultValue), 0);
};

/**
 * A non-positive integer is an integer that is either zero or negative.
 */
const ensureNonPositiveInteger = (value, defaultValue = -0) => {
  return Math.min(ensureInteger(value, defaultValue), -0);
};

export {
  ensureNumber,
  ensureNegativeNumber,
  ensurePositiveNumber,
  ensureFiniteNumber,
  ensureNegativeFiniteNumber,
  ensurePositiveFiniteNumber,
  ensureInteger,
  ensureNegativeInteger,
  ensurePositiveInteger,
  ensureNonNegativeInteger,
  ensureNonPositiveInteger,
};
