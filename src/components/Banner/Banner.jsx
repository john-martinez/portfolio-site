import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faAddressCard, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../../assets/images/logo-white.png';
import logo from '../../assets/images/logo.png';

export default withRouter(function Banner(props){
  let bannerColor = '';
  let baseColor = '';
  let logoContainer = logoWhite;
  if (props.location.pathname==='/contact'){
    bannerColor = 'banner--orange';
    baseColor = 'banner__links--black';
    logoContainer = logo;
  } 
  else if (props.location.pathname!=='/projects') bannerColor = 'banner--blue'; 
  return(
    <header className={`banner ${bannerColor}`}>
      <div className={`banner__logo-container ${props.location.pathname === '/' ? '' : `banner__logo-container--right`}`}>
        <img className="banner__logo" src={logoContainer} alt="stork delivering a baby" onClick={()=>props.history.push('/')} />
      </div>
      <div className="banner__links">
        <Link className={`${props.location.pathname === '/' ? 'banner__links--active' : ''} ${baseColor}`} to="/" ><FontAwesomeIcon icon={faHome} /></Link>
        <Link className={`${props.location.pathname === '/projects' ? 'banner__links--active' : ''} ${baseColor}`} to="/projects"><FontAwesomeIcon icon={faBriefcase} /></Link>
        <Link className={`${props.location.pathname === '/about' ? 'banner__links--active' : ''} ${baseColor}`} to="/about"><FontAwesomeIcon icon={faAddressCard} /></Link>
        <Link className={`${props.location.pathname === '/contact' ? 'banner__links--active' : ''} ${baseColor}`} to="/contact"><FontAwesomeIcon icon={faPhone} /></Link>
      </div>
    </header>
  );
})