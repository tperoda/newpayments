import React, { useState } from "react";
import FormComponent from "../../components/FormComponent/FormComponent";
import ValuesComponent from "../../components/ValuesComponent/ValuesComponent";
import { marginCalc } from "../../utils.js";
import "./styles.scss"

const BillRate = () => {
  const [ data, setData ] = useState({
    margin: "",
    rate: ""
  });

  const { rate, margin } = data;

  return (
    <div className="bill-rate-container">
      <p>Use these fields if you have a Bill Rate and Margin, and want to know Pay Rate and Term Rates</p>
      <FormComponent rateType="Bill Rate" percentType="Margin" setData={setData} />
      <ValuesComponent billRate={rate} margin={margin} termRate={0} payRate={marginCalc(rate, margin)} />
    </div>
  );
};

export default BillRate;