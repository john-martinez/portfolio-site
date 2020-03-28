import React from 'react';
import { withRouter } from 'react-router-dom';
import './Banner.scss';
import logo from '../../assets/images/logo.png';

export default withRouter(function Banner(props){
  return(
    <header className="banner">
      <div className={`banner__logo-container ${props.location.pathname === '/' ? '' : 'banner__logo-container--right'}`}>
        <img className="banner__logo" src={logo} alt="story delivering a baby"/>
      </div>
    </header>
  );
})