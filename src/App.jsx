import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import Banner from './components/Banner/Banner';
import './App.scss';

export default class App extends Component {
  render(){
    document.title = "John Ray Martinez | Web Developer";
    return (
      <main className="app">
          <BrowserRouter>
            <Banner />
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


