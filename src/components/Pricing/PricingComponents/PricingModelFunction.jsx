import React from 'react';

export const PricingModelFunction = () => {
  return (
    <div className="pricingModelFunctions">
      <span className="pricingModelFunctions_name">{props.functionName}</span>
      <img
        className="pricingModelFunctions_check"
        src={props.check}
        alt="ikona zašktnutého políčka"
      />
    </div>
  );
};
