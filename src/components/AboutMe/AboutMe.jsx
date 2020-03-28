import React from 'react';
import TraverseButton from '../TraverseButton/TraverseButton';
import './AboutMe.scss';

export default function Projects(){
  return(
    <section id="aboutMe" className="about-me">
      <TraverseButton position="right" text="MAINPAGE" target="/"/>
      <h2>About Me</h2>
    </section>
  );
}