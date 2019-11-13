import React, { useState } from "react";
import FormComponent from "../../components/FormComponent/FormComponent";
import ValuesComponent from "../../components/ValuesComponent/ValuesComponent";
import SalaryComponent from "../../components/SalaryComponent/SalaryComponent";
import { marginRates } from "../../constants/rates";
import { payCalc, termCalc } from "../../utils.js";
import "./styles.scss"

const BillRate = () => {
  const [ data, setData ] = useState({
    margin: "0",
    rate: "0"
  });

  const { rate, margin } = data;
  const payRate = payCalc(rate, margin);

  return (
    <div className="bill-rate-container">
      <p>Use these fields if you have a Bill Rate and Margin, and want to know Pay Rate and Term Rates</p>
      <FormComponent rateType="Bill Rate" percentType="Margin" setData={setData} percentageRates={marginRates} />
      <ValuesComponent billRate={rate} percentage={margin} termRate={termCalc(payRate)} payRate={payRate} type="Margin" />
      <SalaryComponent payRate={payRate} termRate={termCalc(payRate)} />
    </div>
  );
};

export default BillRate;