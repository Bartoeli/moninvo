import React, { useEffect } from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/Header/HeaderDash.jsx';
import { parseInvoiceData } from '../../utils/Rossum/parseInvoiceData.jsx';

export const Dashboard = () => {
  const context = useRossum();

  useEffect(() => {
    fetch(
      'https://api.elis.rossum.ai/v1/queues/71919/export?format=json&status=exported',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${context.token}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        /*         console.log(data);
         */ console.log(
          data.results.map((invoice) => parseInvoiceData(invoice)),
        );
      });
  }, []);

  return (
    <>
      <HeaderDash />
      <h1>Tady bude super Dashboard!</h1>
    </>
  );
};
