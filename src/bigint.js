const ensureBigInt = (value, defaultValue = 0n) => {
  if (value === undefined || value === null) {
    return ensureBigInt(defaultValue);
  }

  if (typeof value === 'bigint') {
    return value;
  }

  try {
    // A `BigInt` is created by appending `n` to the end of an integer literal or by calling the function `BigInt()`.
    value = BigInt(value); // big integer coercible value
  } catch (e) {
    value = ensureBigInt(defaultValue);
  }
  
  return value;
};

export {
  ensureBigInt,
};
