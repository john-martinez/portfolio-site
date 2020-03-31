import React from 'react';
import './SpeechBubble.scss';

export default function SpeechBubble(){
  return(
    <div className="speech-bubble speech-bubble">
      <span className="speech-bubble__blurb">
        Hi! This is John!
      </span>
      <div className="speech-bubble__arrow"></div>
    </div>
  );
}