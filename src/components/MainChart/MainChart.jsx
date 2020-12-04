import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './mainChart.css';

export const MainChart = (props) => {
  const [chartType, setChartType] = useState('line');

  const options = {
    title: {
      display: true,
      text: 'Náklady',
      fontSize: 24,
    },
    legend: {
      position: 'bottom',
    },
  };

  const groupBy = (data) => {
    return data.reduce((acc, current) => {
      return {
        ...acc,
        [current.date_issue]:
          (+acc[current.date_issue] || 0) + +current.amount_total,
      };
    }, {});
  };

  const groupForChart = (input) => {
    const data = groupBy(input);
    const label = [];
    const amounts = [];
    for (let prop in data) {
      label.push(prop);
      amounts.push(data[prop]);
    }

    return { label, amounts };
  };

  const result = groupForChart(props.data);
  const basicData = {
    labels: result.label,
    datasets: [
      {
        label: 'Moje náklady',
        data: result.amounts,
        fill: false,
        borderColor: '#BC73AD',
        backgroundColor: '#BC73AD',
      },
    ],
  };

  const handleChartType = (e) => {
    setChartType(e.target.value);
  };

  return (
    <>
      <label className="labelChart">
        Zvolte typ grafu:{' '}
        <select className="chartTypesSelect" onChange={handleChartType}>
          <option value="line">Lineární graf</option>
          <option value="bar">Sloupcový graf</option>
          <option value="horizontalBar">Horizontální sloupcový graf</option>
        </select>
      </label>
      <Chart type={chartType} data={basicData} options={options} />
    </>
  );
};

