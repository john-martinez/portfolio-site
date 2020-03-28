import React from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import './AboutMe.scss';

export default function Projects(props){
  return(
    <section id="aboutMe" className="about-me">
      <TraverseButton position="right" text="MAINPAGE" target="/" targetDiv="#aboutMe" history={props.history}/>
      <h2>About Me</h2>
    </section>
  );
}