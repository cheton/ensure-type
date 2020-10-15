/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
const isPlainObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
};

const ensureArray = (value, defaultValue = []) => {
  if (value === undefined || value === null) {
    return [].concat(defaultValue);
  }

  return Array.isArray(value) ? value : [].concat(value);
};

const ensureBoolean = (value, defaultValue = false) => {
  if (value === undefined || value === null) {
    return Boolean(defaultValue);
  }

  return (typeof value === 'boolean') ? value : Boolean(value); // boolean coercible value
};

const ensureNumber = (value, defaultValue = 0) => {
  if (value === undefined || value === null) {
    return ensureNumber(defaultValue);
  }

  value = Number(value);

  if (Number.isNaN(value)) {
    return ensureNumber(defaultValue);
  }

  return value;
};

const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value, defaultValue);

  return Number.isFinite(value) ? value : ensureFiniteNumber(defaultValue);
};

const ensurePlainObject = (value, defaultValue = {}) => {
  if (value === undefined || value === null) {
    return ensurePlainObject(defaultValue);
  }

  return isPlainObject(value) ? value : ensurePlainObject(defaultValue);
};

const ensureString = (value, defaultValue = '') => {
  if (value === undefined || value === null) {
    return String(defaultValue);
  }

  return (typeof value === 'string') ? value : String(value); // string coercible value
};

export {
  ensureArray,
  ensureBoolean,
  ensureNumber,
  ensureFiniteNumber,
  ensurePlainObject,
  ensureString,
};
