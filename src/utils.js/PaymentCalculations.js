const { markupRates } = require("../constants/rates")

const payCalc = (billRate, margin) => {
  if (billRate !== "0" && margin !== "0") {
    const billRateNumber = parseFloat(billRate).toFixed(2);
    const marginNumber = parseFloat(margin).toFixed(2);
    const marginMultiplier = (100 - marginNumber) / 100;
    const payRate = (billRateNumber * marginMultiplier).toFixed(2);
    return payRate.toString();
  }
  return "0";
}

const termCalc = payRate => {
  if (payRate !== "0" && payRate !== "") {
    const termRate = (payRate * 0.83).toFixed(2);
    return termRate.toString();
  }
  return "0";
}

const billCalc = (payRate, markupKey) => {
  let markupVal = 0;
  let payRateNumber = parseFloat(payRate).toFixed(2);

  const filtered = markupRates.filter(item => {
    if (item.key === markupKey) {
      markupVal = item.markup;
    }
  });
  
  return (payRateNumber * markupVal).toString();
}

module.exports = { payCalc, termCalc, billCalc };