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

const ensureNegativeNumber = (value, defaultValue = 0) => {
  const negativeZero = -0;

  return Math.min(ensureNumber(value, defaultValue), negativeZero);
};

const ensurePositiveNumber = (value, defaultValue = 0) => {
  const positiveZero = +0;

  return Math.max(ensureNumber(value, defaultValue), potisiveZero);
};

const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value, defaultValue);

  return Number.isFinite(value) ? value : ensureFiniteNumber(defaultValue);
};

const ensureNegativeFiniteNumber = (value, defaultValue = 0) => {
  const negativeZero = -0;

  return Math.min(ensureFiniteNumber(value, defaultValue), negativeZero);
};

const ensurePositiveFiniteNumber = (value, defaultValue = 0) => {
  const positiveZero = +0;

  return Math.max(ensureFiniteNumber(value, defaultValue), positiveZero);
};

export {
  ensureNumber,
  ensureNegativeNumber,
  ensurePositiveNumber,
  ensureFiniteNumber,
  ensureNegativeFiniteNumber,
  ensurePositiveFiniteNumber,
};
