import React, { useEffect, useState } from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash.jsx';
import { parseInvoiceData } from '../../utils/Rossum/parseInvoiceData.jsx';
import { MainTable } from '../../components/MainTable/MainTable.jsx';
import { MainChart } from '../../components/MainChart/MainChart.jsx';
import { dtb } from '../../utils/Firebase/dtb';
import './dashboard.css';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside.jsx';
import { Insights } from '../../components/Insights/Insights.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { ProgressBar } from 'primereact/progressbar';

export const Dashboard = () => {
  const rossumContext = useRossum();
  const [sourceData, setSourceData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
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
          return dtb.collection('faktury').add(data);
        });
        setLoad(false);
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
    const dtbListener = dtb.collection('faktury').onSnapshot((query) => {
      setSourceData(
        query.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
    return () => dtbListener();
  }, []);

  return (

    <>
      
    <div className="dashboard">
      <HeaderDash />
      <NavBarDashside />
      {load ? (
        <ProgressBar mode="indeterminate" style={{ height: '16px' }} />
      ) : (
        <>
          <div className="insightsDiv">
            <Insights data={sourceData} />
          </div>
          <div className="data_dash">
            <div className="table_dash">
              <MainChart data={sourceData} />
            </div>
            <div className="chart_dash">
              <MainTable data={sourceData} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
