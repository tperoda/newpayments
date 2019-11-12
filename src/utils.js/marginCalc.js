const marginCalc = (billRate, margin) => {
  const billRateNumber = parseFloat(billRate).toFixed(2);
  const marginNumber = parseFloat(margin).toFixed(2);
  const marginMultiplier = (100 - marginNumber) / 100;
  const payRate = (billRateNumber * marginMultiplier).toFixed(2);
  return payRate.toString();
}

module.exports = marginCalc;