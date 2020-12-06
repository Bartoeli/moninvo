import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import './mainChart.css';

export const MainChart = (props) => {
  const [chartType, setChartType] = useState('line');

  const options = {
    title: {
      display: true,

      fontSize: 24,
    },
    legend: {
      position: 'bottom',
    },
  };

  const groupBy = (data) => {
    return data
      .map(({ date_issue, ...item }) => ({
        ...item,
        date_issue: date_issue.substring(0, 7),
      }))
      .reduce((acc, current) => {
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
    Object.keys(data)
      .sort((item1, item2) => item1.localeCompare(item2))
      .forEach((key) => {
        label.push(key);
        amounts.push(data[key]);
      });

    return { label, amounts };
  };

  const result = groupForChart(props.data);
  const basicData = {
    labels: result.label,
    datasets: [
      {
        responsive: true,
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
