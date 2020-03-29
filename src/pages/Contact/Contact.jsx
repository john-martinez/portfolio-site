import React, { useState, useEffect, useRef } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import city from '../../assets/images/toronto.png';
import IconBalloonContainer from '../../components/IconBallonContainer/IconBalloonContainer';

import './Contact.scss';

export default function Contact(props){
  const [didLoad, setDidLoad] = useState(false);
  const [score, addScore] = useState(0);
  const contact = useRef();
  const scoreHandler = () => addScore(score + 1);
  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true),100);
  })
  return(
    <section id="contact" className={`contact ${didLoad ? 'contact--normal' : ''}`} ref={contact}>
      <h2>POPPED: {score}</h2>
      <TraverseButton position="top" text="MAINPAGE" target="/" targetDiv="#contact" history={props.history}/>
      <img className="contact__background" src={city} alt="toronto skyline"/>
      <IconBalloonContainer addScore={scoreHandler}/>
    </section>
  );
}