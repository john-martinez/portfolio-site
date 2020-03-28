import React from 'react';
import './TraverseButton.scss';

export default function TraverseButton({target, text, position, targetDiv, history}){
  const traverseHandler = () => {
    let trans = '';
    switch(position){
      case 'top': trans = "translateY(100%)"; break;
      case 'bottom': trans = "translateY(-100%)"; break;
      case 'left': trans = "translateX(100%)"; break;
      case 'right': trans = "translateX(-100%)"; break;
    }
    document.querySelector(`${targetDiv}`).style.transform = trans;
    setTimeout(()=>history.push(target), 400);
  }
  return(
    <div className={`traverse-button__${position}`} onClick={traverseHandler}>
      <span to={target}>{text}</span>
    </div>
  );
}