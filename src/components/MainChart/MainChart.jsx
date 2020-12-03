import React, {useState} from 'react';
import { Chart } from 'primereact/chart';

export const MainChart = (props) => {
const [chartType, setChartType] = useState("line")

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

  console.log(groupForChart(props.data));

  const result = groupForChart(props.data);
  const basicData = {
    labels: result.label,
    datasets: [
      {
        label: 'Moje náklady',
        data: result.amounts,
        fill: false,
        borderColor: '#242F72',
      },
    ],
  };

  return (
    <>
    <select name="" id=""></select>
      <Chart type={chartType} data={basicData} options={options} />
    </>
  );
};
