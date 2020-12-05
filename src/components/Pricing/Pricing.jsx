import React from 'react';
import './pricing.css';
import { PricingModelFunction } from './PricingComponents/PricingModelFunction.jsx';
import checked from '../../Images/Icons/checked.svg';
import unchecked from '../../Images/Icons/unchecked.svg';
import { PrimaryBtn } from '../Button/PrimaryBtn/PrimaryBtn';
import { useHistory } from 'react-router-dom';

export const Pricing = () => {
  const { push } = useHistory();
  return (
    <section id="pricing" className="pricing">
      <h2>Ceník</h2>

      <div className="pricingModels">
        <div className="pricingModel">
          <h3>Nejdřív zkouším, potom platím</h3>
          <div className="priceDetails">
            <h4>Zdarma</h4>
            <h5>Maximální objem: 5 faktur měsíčně</h5>
          </div>
          <div className="pricingModelFunctions">
            <PricingModelFunction
              functionName="Omezené nahrávání faktur (5 měsíčně)"
              check={checked}
            />
            <PricingModelFunction
              functionName="Zobrazení jednoho grafu"
              check={checked}
            />
            <PricingModelFunction
              functionName="Vlastní kategorie a štítky v grafu"
              check={checked}
            />
            <PricingModelFunction
              functionName="Export dat do Excelu"
              check={unchecked}
            />
            <PricingModelFunction
              functionName="Telefonická podpora"
              check={unchecked}
            />
          </div>
        </div>
        <div className="pricingModel backgroundModel">
          <h3>Spokojím se s málem</h3>
          <div className="priceDetails">
            <h4>1500Kč/měsíc</h4>
            <h5>Maximální objem: 50 faktur měsíčně.</h5>
          </div>
          <div className="pricingModelFunctions">
            <PricingModelFunction
              functionName="Omezené nahrávání faktur (50 měsíčně)"
              check={checked}
            />
            <PricingModelFunction
              functionName="Zobrazení tří grafů"
              check={checked}
            />
            <PricingModelFunction
              functionName="Vlastní kategorie a štítky v grafu"
              check={checked}
            />
            <PricingModelFunction
              functionName="Export dat do Excelu"
              check={checked}
            />
            <PricingModelFunction
              functionName="Telefonická podpora 24/7"
              check={unchecked}
            />
          </div>
        </div>
        <div className="pricingModel">
          <h3>Chci to všechno</h3>
          <div className="priceDetails">
            <h4>Cena na vyžádání</h4>
            <h5>Rádi vám sestavíme cenový plán na míru.</h5>
          </div>
          <div className="pricingModelFunctions">
            <PricingModelFunction
              functionName="Neomezené nahrávání faktur"
              check={checked}
            />
            <PricingModelFunction
              functionName="Neomezený počet grafů"
              check={checked}
            />
            <PricingModelFunction
              functionName="Vlastní kategorie a štítky v grafu"
              check={checked}
            />
            <PricingModelFunction functionName="Export dat" check={checked} />
            <PricingModelFunction
              functionName="Telefonická podpora 24/7"
              check={checked}
            />
          </div>
        </div>
      </div>

      <div className="pricingBtn">
        <PrimaryBtn
          className="primary"
          textBtn="Vyzkoušet"
          type="button"
          onClick={() => push('/signup')}
        />
      </div>
    </section>
  );
};
