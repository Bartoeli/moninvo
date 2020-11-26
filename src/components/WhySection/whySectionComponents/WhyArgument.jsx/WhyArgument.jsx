import React from 'react';
import './whyArgument.css';

export const WhyArgument = (props) => {
  const className =
    typeof props.className !== 'undefined' ? props.className : 'whyArgument';

  return (
    <div className={className}>
      <img className="whyIcon" src={props.iconSrc} alt={props.iconAlt} />
      <p className="whyText">{props.whyText}</p>
    </div>
  );
};
