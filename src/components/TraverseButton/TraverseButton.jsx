import React from 'react';
import './TraverseButton.scss';

export default function TraverseButton({target, text, position, history}){
  return(
    <div className={`traverse-button__${position}`} onClick={()=>history.push(target)}>
      <span className="traverse-button__text" to={target}>{text}</span>
    </div>
  );
}