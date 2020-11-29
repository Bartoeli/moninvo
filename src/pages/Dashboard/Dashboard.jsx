import React, { useEffect, useState } from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/Header/HeaderDash.jsx';
import { parseInvoiceData } from '../../utils/Rossum/parseInvoiceData.jsx';
import { Firebase } from '../../utils/Firebase/Firebase.jsx';
import { MainTable } from '../../components/MainTable/MainTable.jsx';

export const Dashboard = () => {
  const rossumContext = useRossum();
  const [sourceData, setSourceData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.elis.rossum.ai/v1/queues/${rossumContext.queueId}/export?format=json&status=exported`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${rossumContext.token}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.map((invoice) => parseInvoiceData(invoice)));
        setSourceData(data.results.map((invoice) => parseInvoiceData(invoice)));
      });
  }, [rossumContext]);

  return (
    <>
      <HeaderDash />
      <h1>Tady bude super Dashboard!</h1>
      <Firebase />
      <MainTable data={sourceData} />
    </>
  );
};
