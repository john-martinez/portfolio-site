import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import myPic from '../../assets/images/me.jpg';
import FatBird from '../../components/FatBird/FatBird';
import './AboutMe.scss';

export default function Projects(props){
  const [testimonials, setTestimonials] = useState([]);
  const [didLoad, setDidLoad] = useState(false);
  const about = useRef();

  useEffect(()=>{
    if (!didLoad) setDidLoad(true);
    if (!testimonials.length){
      axios.get('https://cors-anywhere.herokuapp.com/https://johnraymartinez.herokuapp.com/api/testimonials')
      .then(data=>setTestimonials(data.data))
      .catch(err=>console.log(err))
    }
  })
  return(
    <article id="aboutMe" className={`about-me ${didLoad ? 'about-me--normal' : ''}`} ref={about}>
      <TraverseButton position="right" text="MAINPAGE" target="/" targetDiv="#aboutMe" history={props.history}/>
      <section className="about-me__bio">
        <div className="about-me__box">
          <FatBird />
          <div className="about-me__img-container">
            <img className="about-me__img" src={myPic} alt="handsome young man"/>
          </div>
          <div className="about-me__bio-blurb">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nisi tenetur corporis sapiente, incidunt eos non quidem nam tempore laborum, voluptatibus laudantium autem fugit libero. Iure recusandae fuga perferendis quam.
          </div>
        </div>
      </section>
      <section className="about-me__testimonials">

      </section>
    </article>
  );
}