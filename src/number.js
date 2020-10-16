const negativeZero = -0;

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

const ensureNegativeNumber = (value, defaultValue = negativeZero) => {
  return Math.min(ensureNumber(value, defaultValue), negativeZero);
};

const ensurePositiveNumber = (value, defaultValue = 0) => {
  return Math.max(ensureNumber(value, defaultValue), 0);
};

const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value, defaultValue);

  return Number.isFinite(value) ? value : ensureFiniteNumber(defaultValue);
};

const ensureNegativeFiniteNumber = (value, defaultValue = negativeZero) => {
  return Math.min(ensureFiniteNumber(value, defaultValue), negativeZero);
};

const ensurePositiveFiniteNumber = (value, defaultValue = 0) => {
  return Math.max(ensureFiniteNumber(value, defaultValue), 0);
};

const ensureInteger = (value, defaultValue = 0) => {
  value = ensureFiniteNumber(value, defaultValue);

  /**
   * Math.trunc = function (v) {
   *   return v < 0 ? Math.ceil(v) : Math.floor(v);
   * };
   */
  return (value < 0) ? Math.ceil(value) : Math.floor(value);
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
};
