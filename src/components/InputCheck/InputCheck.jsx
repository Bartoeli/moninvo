import React, { useState } from 'react';
import './inputcheck.css';

export const InputCheck = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label className="label">
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
