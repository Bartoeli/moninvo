import React from 'react';
import './insights.css';

export const Insights = (props) => {
  const numArray = props.data.map((item) => Number(item.amount_total));
  const newFormat = new Intl.NumberFormat('cs-CS', {
    style: 'currency',
    currency: 'CZK',
    currencyDisplay: 'symbol',
  });

  const resultTotal = Math.floor(numArray.reduce((acc, curr) => acc + curr, 0));
  const newResultTotal = newFormat.format(resultTotal);

  const resultMax = Math.max(...numArray);
  const newResultMax = newFormat.format(resultMax);

  const resultCount = props.data.length;
  return (
    <>
      <ul className="insights">
        <li className="totalExpenses">
          Celkové výdaje
          <div>{newResultTotal}</div>
        </li>
        <li className="maxExpense">
          Nejvyšší výdaj
          <div>{newResultMax}</div>
        </li>
        <li className="countOfExpenses">
          Počet nahraných faktur
          <div>{resultCount}</div>
        </li>
      </ul>
    </>
  );
};
