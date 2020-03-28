import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route exact path="/about" component={AboutMe}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </BrowserRouter>
      </main>
    );
  }
}


