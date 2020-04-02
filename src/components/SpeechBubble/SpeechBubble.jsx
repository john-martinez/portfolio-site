import React, {useState, useEffect} from 'react';
import './SpeechBubble.scss';

export default function SpeechBubble({speech, handler}){
  const [line, setLine] = useState(0);
  useEffect(()=>{
    if (typeof speech !== "string"){
      const intervalId = setInterval(()=>{
        line === speech.length-1 ? setLine(0) : setLine(line+1);
      }, 10000)
      return () => clearInterval(intervalId)
    }
  },[line, speech.length,speech])

  const getPreviousMessage = () => {
    if (line) setLine(line-1);
    else setLine(speech.length-1);
  }
  const getNextMessage = () => {
    if (line !== speech.length-1) setLine(line+1);
    else setLine(0);
  }

  if (typeof speech === "string"){
    return(
      <div className="speech-bubble">
        <div className="speech-bubble__blurb">
          <h4>Hello Visitor!</h4>
          <span>Are you interested at what people are saying about John Ray?</span>
          <button className="speech-bubble__button" onClick={handler}>Yes</button>
        </div>
        <div className="speech-bubble__arrow"></div>
      </div>
    );
  } 
  else {
    return(
      <div className="speech-bubble">
        <div className="speech-bubble__blurb">
          <span>{`${speech[line].author} ${speech[line].company ? ' from ' + speech[line].company : ''} said: `}</span>
          <h5>{`${speech[line].headline}`}</h5>
          <p className="speech-bubble__blurb-message">
            {`"${speech[line].message}"`}
          </p>
          <button onClick={getPreviousMessage}>prev</button>
          <button onClick={getNextMessage}>next</button>
        </div>
        <div className="speech-bubble__arrow"></div>
      </div>
    );
  }
}