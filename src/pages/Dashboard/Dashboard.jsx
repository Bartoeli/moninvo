import React from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';

export const Dashboard = () => {
  console.log(useRossum());
  return <h1>Tady bude super Dashboard!</h1>;
};
