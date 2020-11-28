import React from 'react';
import { useRossum } from '../../utils/Rossum/Rossum.jsx';
import { HeaderDash } from '../../components/Header/HeaderDash.jsx';

export const Dashboard = () => {
  console.log(useRossum());
  return (
    <>
      <HeaderDash />
      <h1>Tady bude super Dashboard!</h1>;
    </>
  );
};
