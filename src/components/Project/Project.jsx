import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import pic from '../../assets/images/fatbird.png';
import './Project.scss';

export default function Project({project}){
  const linkHandler = () => window.open(project.link, '_blank')
  console.log(project)
  return(
    <div id="project" className="project" >
      <div className="project__left" onClick={linkHandler} >
        <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true} 
        showIndicators={false} 
        interval={5000}
        showArrows={false}
        >
          {project.photos.map(item=>(
            <div className="project__carousel-item">
            <img className="project__carousel-image" src={item} />
          </div>
          ))}
        </Carousel>
      </div>
      <div className="project__right">
        <strong className="project__title">{project.name}</strong> 
        {project.tech.map(item=><span className="project__tech">{item}</span>)} <br/>
        <span>{project.description}</span> <br/>
      </div>    
    </div>
  );
}