import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faAddressCard, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white.png';

export default withRouter(function Banner(props){
  let bannerColor = '';
  switch (props.location.pathname) {
    case '/': 
    case '/contact': bannerColor='banner--blue';
  }
  return(
    <header className={`banner ${bannerColor}`}>
      <div className={`banner__logo-container ${props.location.pathname === '/' ? '' : `banner__logo-container--right`}`}>
        <img className="banner__logo" src={logoWhite} alt="story delivering a baby" onClick={()=>props.history.push('/')} />
      </div>
      <div className="banner__links">
        <Link className={`${props.location.pathname === '/' ? 'banner__links--active' : ''} `} to="/" ><FontAwesomeIcon icon={faHome} /></Link>
        <Link className={`${props.location.pathname === '/projects' ? 'banner__links--active' : ''}`} to="/projects"><FontAwesomeIcon icon={faBriefcase} /></Link>
        <Link className={`${props.location.pathname === '/about' ? 'banner__links--active' : ''}`} to="/about"><FontAwesomeIcon icon={faAddressCard} /></Link>
        <Link className={`${props.location.pathname === '/contact' ? 'banner__links--active' : ''}`} to="/contact"><FontAwesomeIcon icon={faPhone} /></Link>
      </div>
    </header>
  );
})