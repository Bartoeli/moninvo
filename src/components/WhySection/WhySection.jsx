import React from 'react';
import { WhyArgument } from './whySectionComponents/WhyArgument.jsx/WhyArgument';
import Dashboard from '../../Images/Icons/Dashboard.svg';
import Time from '../../Images/Icons/Time.svg';
import Upload from '../../Images/Icons/Upload.svg';
import './whySection.css';

export const WhySection = () => {
  return (
    <section className="whySection">
      <div className="whyBlob"></div>
      <div className="whyArguments">
        <WhyArgument
          iconSrc={Upload}
          iconAlt="Ikona nahrávání"
          whyText="Automatické čtení dat z faktur"
        />
        <WhyArgument
          iconSrc={Time}
          iconAlt="Ikona hodin"
          whyText="Jednoduché ovládání"
        />
        <WhyArgument
          iconSrc={Dashboard}
          iconAlt="Ikona grafu"
          whyText="Přehledné zobrazení výsledků"
        />
      </div>
    </section>
  );
};
