import React, { useEffect } from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/Header/HeaderDash.jsx';
import { ExportRossum } from './ExportRossum.jsx';

export const Dashboard = () => {
  const result = useRossum().token;

  useEffect(() => {
    fetch(
      'https://api.elis.rossum.ai/v1/queues/71919/export?format=json&status=exported',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${result}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <HeaderDash />
      <h1>Tady bude super Dashboard!</h1>
      <ExportRossum />
    </>
  );
};
