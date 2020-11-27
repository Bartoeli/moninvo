import React from 'react';
import { WhyArgument } from './whySectionComponents/WhyArgument.jsx/WhyArgument';
import { Blob } from '../Blob/Blob.jsx';
/* import Dashboard_white from '../../Images/Icons/Dashboard_white.svg';
import Time_white from '../../Images/Icons/Time_white.svg';
import Upload_white from '../../Images/Icons/Upload_white.svg';
import Dashboard_grey from '../../Images/Icons/Dashboard_grey.svg';
import Time_grey from '../../Images/Icons/Time_grey.svg';
import Upload_grey from '../../Images/Icons/Upload_grey.svg'; */
import easy from '../../Images/Icons/easy.svg';
import graph from '../../Images/Icons/graph.svg';
import upload from '../../Images/Icons/upload.svg';
import './whySection.css';

export const WhySection = () => {
  return (
    <section className="whySection">
      <WhyArgument
        className="whyArgument"
        iconSrc={upload}
        iconAlt="Ikona nahrávání"
        whyText="Automatické čtení dat z faktur"
        whyInfo="Nahráním faktury získáte automaticky data z pdf a nemusíte ztrácet čas vypisováním."
      />
      <WhyArgument
        iconSrc={easy}
        iconAlt="Ikona hodin"
        whyText="Jednoduché ovládání"
        whyInfo="Uživatelsky příjemné a jednoduché rozhraní s intuitivním ovládáním."
      />
      <WhyArgument
        className="whyArgument"
        iconSrc={graph}
        iconAlt="Ikona grafu"
        whyText="Přehledné zobrazení výsledků"
        whyInfo="Zobrazte své náklady v přehledných grafech, jejichž zobrazení si můžete přizpůsobit vlastními kategoriemi a štítky."
      />
      <Blob className="whyBlob" />
    </section>
  );
};
