import React, {useState, useEffect} from 'react';
import './SpeechBubble.scss';

export default function SpeechBubble({speech}){
  const [line, setLine] = useState(speech[0]);
  let ctr = 1;
  useEffect(()=>{
    console.log(speech);
    setInterval(()=>{
      if (ctr === speech.length)
        ctr = 1;
      setLine(speech[ctr++]);
    }, 10000)
  },[false])
  return(
    <div className="speech-bubble">
      <div className="speech-bubble__blurb">
        <span>{`${line.author} ${line.company ? ' from ' + line.company : ''} said: `}</span>
        <h5>{`"${line.headline}`}</h5>
        <p className="speech-bubble__blurb-message">
          {`${line.message}"`}
        </p>
      </div>
      <div className="speech-bubble__arrow"></div>
    </div>
  );
}