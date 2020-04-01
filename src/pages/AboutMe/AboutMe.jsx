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
      .then(data=>{
        let newData = data.data;
        newData.shift()
        setTestimonials(newData);
      })
      .catch(err=>console.log(err))
    }
  }, [testimonials.length])

  useEffect(()=>{
    if (!didLoad)
      setTimeout(()=>setDidLoad(true),200);
  }, [didLoad])

  return (
    <main id="aboutMe" className="about-me" >
      <section className={`about-me__bio  ${didLoad ? 'about-me__bio--normal' : ''}`}>
      {testimonials.length  
      ? <div className="about-me__box">
            <FatBird speech={testimonials} />
            <div className="about-me__img-container">
              <img className="about-me__img" src={myPic} alt="handsome young man"/>
            </div>
            <div className="about-me__bio-blurb">
              Hi! My name is John Ray and I am a Web Developer. I enjoy and love programming in general but during the past year, I was attracted to Web Development and decided to pursue it as a career.
            </div>
        </div> 
      : <></>
      }
      </section>
      <TraverseButton position="right" text="MAINPAGE" target="/" targetDiv="#aboutMe" history={props.history}/>
    </main> 
  )

}