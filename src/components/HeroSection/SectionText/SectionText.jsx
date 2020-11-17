import React, { useState, useEffect } from 'react';

export const SectionText = () => {
  const mottos = ['JEDNODUŠE', 'PŘEHLEDNĚ', 'EFEKTIVNĚ'];
  const [stavMotto, setStavMotto] = useState(0);

  const changeText = () => {
    setTimeout(() => {
      setStavMotto((stavMotto + 1) % mottos.length);
    }, 3000);
  };

  useEffect(changeText, [stavMotto]);

  return (
    
      <h1>KONTROLUJTE své náklady <br> {mottos[stavMotto]}</h1>
    
  );
};
