import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import './App.scss';

export default class App extends Component {
  render(){
    document.title = "John Ray Martinez | Web Developer";
    return (
      <main className="app">
        <div className="app__inline-divs">
          <AboutMe />
          <LandingPage />
          <Projects />
        </div>
        <div className="app__inline-divs">
          <div className="app__div-filler"></div>
          <Contact /> 
        </div>
      </main>
    );
  }
}


