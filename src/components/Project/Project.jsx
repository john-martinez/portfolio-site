import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Project.scss';

export default function Project({project}){
  const linkHandler = () => window.open(project.link, '_blank');
  const demoHandler = () => window.open(project.demoLink, '_blank');
  return(
    <div id="project" className="project" >
      <div className="project__left" >
        <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true} 
        showIndicators={false} 
        interval={5000}
        >
          {project.photos.map((item,i)=>(
            <div key={i} className="project__carousel-item">
              <img className="project__carousel-image" src={item} alt="game screenshot on desktop" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="project__right">
        <strong className="project__title">{project.name}</strong> <br/>
        <span className="project__blurb">{project.description}</span> <br/>
        {project.tech.map((item,i)=><span key={i} className="project__tech">{item}</span>)}
        {project.otherTech.map((item,i)=><img key={i} className="project__tech-img" src={item} alt="tech" />)} <br/>
        <button className="project__button" onClick={linkHandler}>SITE</button>
          {project.demoLink ? <button className="project__button--blue" onClick={demoHandler}>DEMO REEL</button> : '' }
          {project.construction ?  <button className="project__button--gray" disabled>Building</button> : '' }
      </div>    
    </div>
  );
}