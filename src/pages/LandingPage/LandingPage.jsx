import React from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import './LandingPage.scss';
import Sky from '../../components/Sky/Sky';
import bird from '../../assets/images/bird.gif';
import rope from '../../assets/images/rope.png';


export default function LandingPage(props){

  return (
    <section id="landing" className="landing-page">
      <TraverseButton text="CONTACT " target="/contact" position="bottom" targetDiv="#landing" history={props.history} />
      <TraverseButton text="PROJECTS" target="/projects" position="right" targetDiv="#landing" history={props.history} />
      <TraverseButton text="ABOUT ME" target="/about" position="left" targetDiv="#landing" history={props.history} />
      <Sky />
      <div className="landing-page__title">
        <img className="landing-page__bird--left" src={bird} alt="bird" />
        <img className="landing-page__bird--right" src={bird} alt="bird" />
        <img className="landing-page__rope--left" src={rope} alt="rope" />
        <img className="landing-page__rope--right" src={rope} alt="rope" />
        <h1 className="landing-page__title--name">JOHN RAY MARTINEZ</h1>
        <span className="landing-page__subtitle">W E B &nbsp; D E V E L O P E R </span> <br/>
      </div>
    </section>
  );
}