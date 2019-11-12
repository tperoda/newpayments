import React from "react";
import "./styles.scss";

// TODO: Style component, possibly add modal or display for term rate calc
const ValuesComponent = ({ billRate, payRate, termRate, margin }) => {
  return (
    <div className="values-container">
        <span>Bill Rate: </span>
        <span>{billRate}</span>
        <span>Pay Rate: </span>
        <span>{payRate}</span>
        <span>Term Rate: </span>
        <span>{termRate}</span>
        <span>Margin: </span>
        <span>{margin}</span>
      </div>
  );
}

export default ValuesComponent;