import React, { useState } from 'react';

export const InputCheck = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {props.text}
      </label>
    </>
  );
};
