import React from 'react';
import TraverseButton from '../TraverseButton/TraverseButton';
import './Contact.scss';

export default function Contact(){
  return(
    <section id="contact" className="contact">
      <TraverseButton position="top" text="MAINPAGE" target="/"/>
      <h2>CONTACT ME</h2>
    </section>
  );
}