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
    <section id="projects" className={`projects ${didLoad ? 'projects--normal' : ''}`}>
      <div className="projects__container">
        <ProjectsList />
        
      </div>
      
      <TraverseButton text="MAINPAGE" position="left" target="/" targetDiv="#projects" history={props.history}/>
    </section>
  );
}