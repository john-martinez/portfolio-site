import React from 'react';
import fatBird from '../../assets/images/fatbird.png';
import eye from '../../assets/images/eye.png';
import './FatBird.scss';

export default function FatBird(){
  return(
    <div className="fatbird">
      <img className="fatbird__img" src={fatBird} alt="fat purple bird" />
      <img className="fatbird__left-eye" src={eye} alt="eye"/>
      <img className="fatbird__right-eye" src={eye} alt="eye"/>
    </div>
  );
}