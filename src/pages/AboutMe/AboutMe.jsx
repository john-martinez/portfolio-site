import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import myPic from '../../assets/images/me.jpg';
import FatBird from '../../components/FatBird/FatBird';
import './AboutMe.scss';

export default function Projects(props){
  const [testimonials, setTestimonials] = useState([]);
  const [didLoad, setDidLoad] = useState(false);

  useEffect(()=>{
    if (!testimonials.length){
      axios.get('https://cors-anywhere.herokuapp.com/https://johnraymartinez.herokuapp.com/api/testimonials')
      .then(data=>setTestimonials(data.data))
      .catch(err=>console.log(err))
    }
  }, [testimonials.length])

  useEffect(()=>{
    if (!didLoad)
      setDidLoad(true);
  }, [didLoad])

  return(
    <article id="aboutMe" className={`about-me ${didLoad ? 'about-me--normal' : ''}`} >
      <TraverseButton position="right" text="MAINPAGE" target="/" targetDiv="#aboutMe" history={props.history}/>
      <section className="about-me__bio">
        <div className="about-me__box">
          <FatBird />
          <div className="about-me__img-container">
            <img className="about-me__img" src={myPic} alt="handsome young man"/>
          </div>
          <div className="about-me__bio-blurb">
            Hi! My name is John Ray and I am a Web Developer. I enjoy and love programming in general but during the past year, I was attracted to Web Development and decided to pursue it as a career.
          </div>
        </div>
      </section>
      <section className="about-me__testimonials">
      
      </section>
     </article> 
  );
}