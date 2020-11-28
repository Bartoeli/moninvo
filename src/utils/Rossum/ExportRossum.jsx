import React, { useEffect } from 'react';
import { useRossum } from './Rossum';

export const ExportRossum = () => {
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
        console.log(data.json);
      });
  }, []);

  return 'result';
};
