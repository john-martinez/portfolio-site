import React, { useEffect, useRef } from 'react';
import './LandingPage.scss';
import TraverseButton from '../../components/TraverseButton/TraverseButton';

export default function LandingPage(props){
  const landing = useRef();
  useEffect(()=>{
    //
  })
  return (
    <section ref={landing} id="landing" className="landing-page">
      <TraverseButton text="CONTACT " target="/contact" position="bottom" targetDiv="#landing" history={props.history} />
      <TraverseButton text="PROJECTS" target="/projects" position="right" targetDiv="#landing" history={props.history} />
      <TraverseButton text="ABOUT ME" target="/about" position="left" targetDiv="#landing" history={props.history} />
      <div className="landing-page__title">
        <h1 className="landing-page__title--name">JOHN RAY MARTINEZ</h1>
        <span>WEB DEVELOPER</span> <br/>
      </div>
    </section>
  );
}