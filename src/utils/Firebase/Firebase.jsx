import React, { useState, useEffect } from 'react';
import { dtb } from './dtb';
import { parseInvoiceData } from '../Rossum/parseInvoiceData.jsx';

export const Firebase = () => {
  const [faktury, setFaktury] = useState([]);

  useEffect(() => {
    dtb.collection('faktury').onSnapshot((query) => {
      setFaktury(
        query.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []);

  return (
    <section>
      <h2>Data z Firebase</h2>
      <ul>
        {faktury.map((fa, i) => (
          <li key={i}>
            {fa.dodavatel}: {fa.amount}
          </li>
        ))}
      </ul>
    </section>
  );
};
