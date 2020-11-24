import React from 'react';
import "./whyArgument.css"

export const WhyArgument = (props) => {
  return (
    <div className="whyArgument">
      <img className="whyIcon" src={props.iconSrc} alt={props.iconAlt}/>
  <p className="whyText">{props.whyText}</p>
    </div>
  )
}