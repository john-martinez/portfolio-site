import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';

function App() {
  document.title = "John Ray Martinez | Web Developer";
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}

export default App;
