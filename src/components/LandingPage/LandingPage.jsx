import React, { Component } from 'react';
import './LandingPage.scss';
import TraverseButton from '../TraverseButton/TraverseButton';

export default class LandingPage extends Component {
  componentDidMount(){
    this.refs.landing.scrollIntoView();
  }
  render(){
    return (
      <section ref="landing" id="landing" className="landing-page">
        <TraverseButton text="CONTACT " target="/contact" position="bottom"/>
        <TraverseButton text="PROJECTS" target="/projects" position="right"/>
        <TraverseButton text="ABOUT ME" target="/about" position="left"/>
        <div className="landing-page__title">
          <h1 className="landing-page__title--name">JOHN RAY MARTINEZ</h1>
          <span>WEB DEVELOPER</span> <br/>
        </div>
      </section>
    );
  }
}