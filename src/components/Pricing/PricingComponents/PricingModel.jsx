import React from 'react';
import './pricingModel.css';
import checked from '../../../Images/Icons/checked.svg';
import unchecked from '../../../Images/Icons/unchecked.svg';

import { PricingModelFunction } from './PricingModelFunction.jsx';

export const PricingModel = (props) => {
  return (
    <>
      <div className={`pricingModel ${props.classNameModel}`}>
        <h3>{props.modelName}</h3>
        <div className="priceDetails">
          <h4>{props.price}</h4>
          <h5>{props.priceDetail}</h5>
        </div>
        <div className="pricingModelFunctions">
          <PricingModelFunction
            functionName="Neomezené nahrávání faktur"
            check={checked}
          />
          <PricingModelFunction
            functionName="Zobrazení jednoho grafu"
            check={checked}
            classNameDiv="background"
          />
          <PricingModelFunction
            functionName="Vlastní kategorie a štítky v grafu"
            check={checked}
          />
          <PricingModelFunction
            functionName="Export dat do Excelu"
            check={checked}
            classNameDiv="background"
          />
          <PricingModelFunction
            functionName="Neomezený počet grafů"
            check={unchecked}
          />
          <PricingModelFunction
            functionName="Telefonická podpora"
            check={unchecked}
            classNameDiv="background"
          />
        </div>
      </div>
    </>
  );
};
