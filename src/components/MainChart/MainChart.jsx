import React from 'react';
import { Chart } from 'primereact/chart';

export const MainChart = (props) => {
  const options = {
    title: {
      display: true,
      text: 'Náklady',
      fontSize: 16,
    },
    legend: {
      position: 'bottom',
    },
  };

  return (
    <>
      <Chart type="line" data={props.data} options={options} />
    </>
  );
};
