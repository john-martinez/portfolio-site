import React from 'react';
import './IconBalloon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import balloon from '../../assets/images/balloon.png';

export default function IconBalloon(props){
  return(
    <div className="icon-balloon">
      <img className="icon-balloon__icon" src={balloon} alt="balloons"/> 
      <div onClick={props.handler}>
        <FontAwesomeIcon icon={props.icon} size='3x' />     
      </div>   
    </div>
  );
}