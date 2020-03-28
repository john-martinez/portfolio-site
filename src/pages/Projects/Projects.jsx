import React, { useEffect, useState, useRef } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import './Projects.scss';

export default function Projects(props){
  const [didLoad, setDidLoad] = useState(false);
  const projects = useRef();

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true), 100)
  })
  return(
    <section id="projects" className={`projects ${didLoad ? 'projects--normal' : ''}`} ref={projects}>
      <h2 className="projects__title">Projects</h2>
      <TraverseButton text="MAINPAGE" position="left" target="/" targetDiv="#projects" history={props.history}/>
    </section>
  );
}