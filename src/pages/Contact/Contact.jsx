import React, { useState, useEffect, useRef } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
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
      <h2>CONTACT ME</h2>
    </section>
  );
}