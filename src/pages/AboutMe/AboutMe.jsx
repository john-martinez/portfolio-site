import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import './AboutMe.scss';

export default function Projects(props){
  const [testimonials, setTestimonials] = useState([]);
  const [didLoad, setDidLoad] = useState(false);
  const about = useRef();

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true),100);
    else console.log("TRU")
    if (testimonials.length){
      axios.get('https://cors-anywhere.herokuapp.com/https://johnraymartinez.herokuapp.com/api/testimonials')
      .then(data=>setTestimonials(data.data))
      .catch(err=>console.log(err))
    }
  })
  return(
    <section id="aboutMe" className={`about-me ${didLoad ? 'about-me--normal' : ''}`} ref={about}>
      <TraverseButton position="right" text="MAINPAGE" target="/" targetDiv="#aboutMe" history={props.history}/>
      {testimonials.map(item=><h2>{item.author}</h2>)}
      <h2>WASSAP</h2>
    </section>
  );
}