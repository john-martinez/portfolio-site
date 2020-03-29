import React from 'react';
import './IconBalloon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import balloon from '../../assets/images/balloon.png';
import pop from '../../assets/sounds/pop.mp3';

export default function IconBalloon(props){
  let popSound = new Audio(pop);
  popSound.volume = 0.2;
  const fallingHandler = e => {
    const balloon = e.target;
    const parent = e.target.parentNode;
    popSound.play();
    balloon.classList.add("icon-balloon__balloon--popped");
    parent.classList.add("icon-balloon--falling");
    props.addScore();
    setTimeout(()=>{
      balloon.classList.remove("icon-balloon__balloon--popped");
      parent.classList.remove("icon-balloon--falling");
    }, 1000)
  }
  return(
    <div className="icon-balloon">
      <img className="icon-balloon__balloon" src={balloon} alt="balloons" onClick={fallingHandler}/> 
      <div onClick={props.handler}>
        <FontAwesomeIcon icon={props.icon} size='3x' />     
      </div>   
    </div>
  );
}