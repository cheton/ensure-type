const negativeZero = -0;
const positiveZero = 0;

const ensureNumber = (value, defaultValue = positiveZero) => {
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

const ensurePositiveNumber = (value, defaultValue = positiveZero) => {
  return Math.max(ensureNumber(value, defaultValue), positiveZero);
};

const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value, defaultValue);

  return Number.isFinite(value) ? value : ensureFiniteNumber(defaultValue);
};

const ensureNegativeFiniteNumber = (value, defaultValue = negativeZero) => {
  return Math.min(ensureFiniteNumber(value, defaultValue), negativeZero);
};

const ensurePositiveFiniteNumber = (value, defaultValue = positiveZero) => {
  return Math.max(ensureFiniteNumber(value, defaultValue), positiveZero);
};

const ensureInteger = (value, defaultValue = positiveZero) => {
  value = ensureFiniteNumber(value, defaultValue);

  return (value > positiveZero) ? Math.floor(value) : Math.ceil(value);
};

const ensureNegativeInteger = (value, defaultValue = negativeZero) => {
  return Math.min(ensureInteger(value, defaultValue), negativeZero);
};

const ensurePositiveInteger = (value, defaultValue = positiveZero) => {
  return Math.max(ensureInteger(value, defaultValue), positiveZero);
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
