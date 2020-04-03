import React, { useEffect, useState } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.scss';

export default function Projects(props){
  const [didLoad, setDidLoad] = useState(false);

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true), 100)
  }, [didLoad])

  return(
    <article id="projects" className={`projects ${didLoad ? 'projects--normal' : ''}`}>
      <div className="projects__hero">
        <div className="projects__hero-img"></div>
        <div className="projects__hero-overlay">
          <h1 className="projects__hero-title">
            <span className="projects__fade-in projects__fade-in-1">P</span>
            <span className="projects__fade-in projects__fade-in-3">R</span>
            <span className="projects__fade-in projects__fade-in-2">O</span>
            <span className="projects__fade-in projects__fade-in-1">J</span>
            <span className="projects__fade-in projects__fade-in-3">E</span>
            <span className="projects__fade-in projects__fade-in-1">C</span>
            <span className="projects__fade-in projects__fade-in-3">T</span>
            <span className="projects__fade-in projects__fade-in-2">S</span>
          <div className="projects__hero-circle"></div>
          </h1>
        </div>
      </div>
      <section className="projects__showcase">
        <ProjectsList />   
      </section>
      <TraverseButton targetDiv="#projects" text="MAINPAGE" position="left" target="/" history={props.history} />
    </article>
  );
}