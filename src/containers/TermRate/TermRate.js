import React, { useState } from "react";
import { getBillRateFromPay, getPayRateFromTerm } from "../../utils";
import { markupRates } from "../../constants/rates";
import ValuesComponent from "../../components/ValuesComponent";
import SalaryComponent from "../../components/SalaryComponent";
import FormComponent from "../../components/FormComponent";

const TermRate = () => {
  const [data, setData] = useState({
    rate: "0",
    markup: "0"
  });

  const { rate, markup } = data;
  const payRate = getPayRateFromTerm(rate);
  const billRate = getBillRateFromPay(rate, markup);

  return (
    <div className="bill-rate-container">
      <p>
        Use these fields if you have a Term Rate and Markup,
        and want to know Bill Rate and Pay Rates
      </p>
      <FormComponent
        rateType="Pay Rate"
        percentType="Markup"
        setData={setData}
        percentageRates={markupRates}
      />
      <ValuesComponent
        billRate={billRate}
        percentage={markup}
        termRate={rate}
        payRate={payRate}
        type="Markup"
      />
      <SalaryComponent payRate={payRate} termRate={rate} />
    </div>
  );
};

export default TermRate;
