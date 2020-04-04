import React, { useState, useEffect, useRef } from 'react';
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
      <div className="contact__overlay"></div>
      <IconBalloonContainer />
    </section>
  );
}