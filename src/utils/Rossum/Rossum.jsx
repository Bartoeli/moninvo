import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultValue = { token: null, queueId: 71919 };
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
        setState((prevState) => ({ ...prevState, token: data.key }));
      });
  }, []);

  return (
    <RossumContext.Provider value={state}>
      {state.token === null ? <div>Stránka se načítá</div> : props.children}
    </RossumContext.Provider>
  );
};
