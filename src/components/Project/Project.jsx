import React from 'react';
import './Project.scss';

export default function Project(){
  return(
    <div className="project">
        <div className="project__left">
          <div className="project__img"></div>
        </div>
        <div className="project__right">
          <p>Project Title: Suber</p>
          <p>Description: blurb</p>
        </div>
      </div>
  );
}