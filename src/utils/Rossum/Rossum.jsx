import React, { createContext } from 'react';

let token = '';
const defaultValue = [(token = 'testB')];
const RossumToken = createContext(defaultValue);

export const RossumComponent = () => {
  return <RossumToken.Provider />;
};
