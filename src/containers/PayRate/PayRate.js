import React, { useState } from "react";
import FormComponent from "../../components/FormComponent/FormComponent";
import ValuesComponent from "../../components/ValuesComponent/ValuesComponent";
import SalaryComponent from "../../components/SalaryComponent/SalaryComponent";
import { markupRates } from "../../constants/rates";
import { termCalc, billCalc } from "../../utils.js"

const PayRate = () => {
  const [ data, setData ] = useState({
    rate: "0",
    markup: "0"
  });

  const { rate, markup } = data;
  const billRate = billCalc(rate, markup);

  return (
    <div className="bill-rate-container">
      <p>Use these fields if you have a Pay Rate and Markup, and want to know Bill Rate and Term Rates</p>
      <FormComponent rateType="Pay Rate" percentType="Markup" setData={setData} percentageRates={markupRates} />
      <ValuesComponent billRate={billRate} percentage={markup} termRate={termCalc(rate)} payRate={rate} type="Markup" />
      <SalaryComponent payRate={rate} termRate={termCalc(rate)} />
    </div>
  );
};

export default PayRate;