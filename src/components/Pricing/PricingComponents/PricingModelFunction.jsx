import React from 'react';
import './pricingModelFunction.css';

export const PricingModelFunction = (props) => {
  return (
    <div className={`pricingModelFunction ${props.classNameDiv}`}>
      <span className="pricingModelFunction_name">{props.functionName}</span>
      <img
        className="pricingModelFunction_check"
        src={props.check}
        alt="ikona zašktnutého políčka"
      />
    </div>
  );
};
