import React from 'react';
import './pricing.css';
import { PricingModel } from './PricingComponents/PricingModel';

export const Pricing = () => {
  return (
    <div className="pricingComp">
      <h2>Ceník</h2>
      <div className="pricingModels">
        <PricingModel
          modelName="Donald"
          price="150Kč"
          priceDetail="měsíční platba"

        />
        <PricingModel
          modelName="McQuack"
          price="300 Kč"
          priceDetail="měsíční platba"
          classNameModel="backgroundModel"
        />
        <PricingModel
          modelName="Scrooge"
          price="600 Kč"
          priceDetail="měsíční platba"
        />
      </div>
    </div>
  );
};
