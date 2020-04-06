import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.scss';

export default function Projects(props){
  const [didLoad, setDidLoad] = useState(false);
  const target = useRef();
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
            <span className="projects__fade-in projects__fade-in-2">R</span>
            <span className="projects__fade-in projects__fade-in-3">O</span>
            <span className="projects__fade-in projects__fade-in-4">J</span>
            <span className="projects__fade-in projects__fade-in-5">E</span>
            <span className="projects__fade-in projects__fade-in-6">C</span>
            <span className="projects__fade-in projects__fade-in-7">T</span>
            <span className="projects__fade-in projects__fade-in-8">S</span>
          <div className="projects__hero-circle"></div>
          <div className="projects__hero-circle-2"></div>
          <div className="projects__hero-circle-3"></div>
          <div className="projects__arrow" onClick={()=>target.current.scrollIntoView()}> <FontAwesomeIcon icon={faCaretDown}/></div>
          </h1>
        </div>
      </div>
      <section className="projects__showcase" ref={target}>
        <ProjectsList />   
      </section>
    </article>
  );
}