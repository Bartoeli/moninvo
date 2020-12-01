import React, { useEffect, useState } from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash.jsx';
import { parseInvoiceData } from '../../utils/Rossum/parseInvoiceData.jsx';
import { MainTable } from '../../components/MainTable/MainTable.jsx';
import { MainChart } from '../../components/MainChart/MainChart.jsx';
import { dtb } from '../../utils/Firebase/dtb';
import './dashboard.css';

export const Dashboard = () => {
  const rossumContext = useRossum();
  const [sourceData, setSourceData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.elis.rossum.ai/v1/queues/${rossumContext.queueId}/export?format=json&status=confirmed`,
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
        const parsedData = data.results.map((invoice) =>
          parseInvoiceData(invoice),
        );
        setSourceData(parsedData);
        parsedData.forEach(async (data) => {
          return dtb
            .collection('faktury')
            .add(data)
            .then((firebaseData) => {
              const fbID = firebaseData.id;
            });
        });
        fetch(
          `https://api.elis.rossum.ai/v1/queues/${rossumContext.queueId}/export?status=confirmed&to_status=exported`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${rossumContext.token}`,
            },
          },
        );
      });
  }, [rossumContext]);

  useEffect(() => {
    dtb.collection('faktury').onSnapshot((query) => {
      setSourceData(
        query.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []);

  return (
    <div className="dashboard">
      <HeaderDash />
      <MainChart data={sourceData} />
      <MainTable data={sourceData} />
    </div>
  );
};
