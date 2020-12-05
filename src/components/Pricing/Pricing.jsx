import React from 'react';
import './pricing.css';
import { PricingModel } from './PricingComponents/PricingModel';

export const Pricing = () => {
  return (
    <>
      <h2>Ceník</h2>
      <PricingModel
        modelName="Donald"
        price="150Kč"
        priceDetail="měsíční platba"
      />
      <PricingModel
        modelName="McQuack"
        price="300 Kč"
        priceDetail="měsíční platba"
      />
      <PricingModel
        modelName="Scrooge"
        price="600 Kč"
        priceDetail="měsíční platba"
      />
    </>
  );
};
