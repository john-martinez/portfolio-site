import React, { useState, useEffect, useRef } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import city from '../../assets/images/toronto.png';
import IconBalloonContainer from '../../components/IconBallonContainer/IconBalloonContainer';

import './Contact.scss';

export default function Contact(props){
  const [didLoad, setDidLoad] = useState(false);
  const contact = useRef();

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true),100);
  })
  return(
    <section id="contact" className={`contact ${didLoad ? 'contact--normal' : ''}`} ref={contact}>
      <TraverseButton position="top" text="MAINPAGE" target="/" targetDiv="#contact" history={props.history}/>
      <img className="contact__background" src={city} alt="toronto skyline"/>
      <IconBalloonContainer />
    </section>
  );
}