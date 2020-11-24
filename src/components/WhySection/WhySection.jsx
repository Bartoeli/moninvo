import React from 'react';
import { WhyArgument } from './whySectionComponents/WhyArgument.jsx/WhyArgument';
import { Blob } from '../Blob/Blob.jsx';
import Dashboard_white from '../../Images/Icons/Dashboard_white.svg';
import Time_white from '../../Images/Icons/Time_white.svg';
import Upload_white from '../../Images/Icons/Upload_white.svg';
import Dashboard_grey from '../../Images/Icons/Dashboard_grey.svg';
import Time_grey from '../../Images/Icons/Time_grey.svg';
import Upload_grey from '../../Images/Icons/Upload_grey.svg';
import './whySection.css';

export const WhySection = () => {
  return (
    <>
      <section className="whySectionMobil">
        <WhyArgument
          iconSrc={Upload_white}
          iconAlt="Ikona nahrávání"
          whyText="Automatické čtení dat z faktur"
        />
        <WhyArgument
          iconSrc={Time_white}
          iconAlt="Ikona hodin"
          whyText="Jednoduché ovládání"
        />
        <WhyArgument
          iconSrc={Dashboard_white}
          iconAlt="Ikona grafu"
          whyText="Přehledné zobrazení výsledků"
        />
        <Blob className="whyBlob" />
      </section>
      <section className="whySectionDesktop">
        <WhyArgument
          iconSrc={Upload_grey}
          iconAlt="Ikona nahrávání"
          whyText="Automatické čtení dat z faktur"
        />
        <WhyArgument
          iconSrc={Time_grey}
          iconAlt="Ikona hodin"
          whyText="Jednoduché ovládání"
        />
        <WhyArgument
          iconSrc={Dashboard_grey}
          iconAlt="Ikona grafu"
          whyText="Přehledné zobrazení výsledků"
        />
        <Blob className="whyBlob" />
      </section>
    </>
  );
};
