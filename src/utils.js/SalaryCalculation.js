const salaryCalculation = (rate, type) => {
  switch (type) {
    case "inc": 
      return (rate * 2080).toFixed(2);
    case "term":
      return (rate * 1900).toFixed(2);
    default:
      return "0";
  };
};

module.exports = {salaryCalculation};