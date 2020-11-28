import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultValue = { token: null };
const RossumContext = createContext(defaultValue);
export const useRossum = () => useContext(RossumContext);
const credentials = {
  username: 'bara@moninvo.cz',
  password: 'KuABo125rossum',
};
export const RossumProvider = (props) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    fetch('https://api.elis.rossum.ai/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        setState({ token: data.key });
      });
  }, []);

  return useRossum() === null ? (
    <div>Stránka se načítá</div>
  ) : (
    <RossumContext.Provider value={state}>
      {props.children}
    </RossumContext.Provider>
  );
};
