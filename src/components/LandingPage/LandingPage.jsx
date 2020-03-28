import React, { Component } from 'react';
import './LandingPage.scss';

export default class LandingPage extends Component {
  componentDidMount(){
    this.refs.landing.scrollIntoView();
  }
  render(){
    return (
      <section ref="landing" id="landing" className="landing-page">
        <div className="landing-page__title">
          <h1 className="landing-page__title--name">JOHN RAY MARTINEZ</h1>
          <span>WEB DEVELOPER</span> <br/>
          <span>
            <a href="#contact">contact </a> <br/>
            <a href="#projects">projects </a> <br/>
            <a href="#aboutMe">about me </a> <br/>
          </span>
        </div>
      </section>
    );
  }
}