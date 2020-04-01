import React from 'react';
import cloud from '../../assets/images/cloud.png';
import bird from '../../assets/images/bird.gif';
import './Sky.scss';

export default function Sky(){
  return(
    <>
      <img className="sky__cloud" src={cloud} alt="cloud"/>
      <img className="sky__cloud sky__cloud--right" src={cloud} alt="cloud"/>
      <img className="sky__cloud--bottom" src={cloud} alt="cloud"/>
      <img className="sky__cloud--bottom sky__cloud--right" src={cloud} alt="cloud"/>
      <img className="sky__bird--flying" src={bird} alt="bird" />
      <img className="sky__bird--flying-bottom" src={bird} alt="bird" />
    </>
  )
}