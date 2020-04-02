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
          <h1 className="projects__hero-title">REDESIGNED</h1>
        </div>
      </div>
      <section className="projects__showcase">
        <h2 className="projects__showcase-title">PROJECTS</h2>
        <ProjectsList />   
      </section>
      <TraverseButton text="MAINPAGE" position="left" target="/" targetDiv="#projects" history={props.history}/>
    </article>
  );
}