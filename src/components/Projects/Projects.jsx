import React from 'react';
import TraverseButton from '../TraverseButton/TraverseButton';
import './Projects.scss';

export default function Projects(){
  return(
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <TraverseButton text="MAINPAGE" position="left" target="/"/>
    </section>
  );
}