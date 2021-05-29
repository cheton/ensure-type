const ensureFunction = (value, defaultValue) => {
  defaultValue = defaultValue ?? function() {};

  if (value === undefined || value === null) {
    return ensureFunction(defaultValue);
  }

  return (typeof value === 'function') ? value : ensureFunction(defaultValue);
};

export {
  ensureFunction,
};
