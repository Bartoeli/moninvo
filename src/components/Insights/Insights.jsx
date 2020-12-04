import React from 'react';
import './insights.css';

export const Insights = (props) => {
  const numArray = props.data.map((item) => Number(item.amount_total));

  const resultTotal = Math.floor(numArray.reduce((acc, curr) => acc + curr, 0));
  const resultMax = Math.max(...numArray);
  const resultCount = props.data.length;
  return (
    <>
      <ul className="insights">
        <li className="totalExpenses">
          Celkové výdaje
          <div>{resultTotal} Kč</div>
        </li>
        <li className="maxExpense">
          Nejvyšší výdaj
          <div>{resultMax} Kč</div>
        </li>
        <li className="countOfExpenses">
          Počet nahraných faktur
          <div>{resultCount}</div>
        </li>
      </ul>
    </>
  );
};
