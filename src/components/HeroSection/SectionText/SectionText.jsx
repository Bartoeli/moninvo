import React, { useState, useEffect } from 'react';
import './sectionText.css';

export const SectionText = () => {
  const mottos = ['JEDNODUŠE', 'PŘEHLEDNĚ', 'EFEKTIVNĚ'];
  const [stavMotto, setStavMotto] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStavMotto((stavMotto + 1) % mottos.length);
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [stavMotto]);

  return (
    <div className="section-text">
      <div className="titles">
        <h1>
          Kontrolujte <br /> své náklady
        </h1>
        <h1 className="motto">{mottos[stavMotto]}</h1>
      </div>
      <div className="picture"></div>
    </div>
  );
};
