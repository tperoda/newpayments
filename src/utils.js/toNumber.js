const toNumber = string => {
  const num = parseFloat(string).toFixed(2);
  return num;
};

module.exports = { toNumber };