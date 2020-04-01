import React, {useState, useEffect} from 'react';
import './SpeechBubble.scss';

export default function SpeechBubble({speech}){
  const [line, setLine] = useState(0);
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      line === speech.length-1 ? setLine(0) : setLine(line+1);
    }, 10000)
    return () => clearInterval(intervalId)
  },[line, speech.length])

  const getPreviousMessage = () => {
    if (line) setLine(line-1);
    else setLine(speech.length-1);
  }
  const getNextMessage = () => {
    if (line !== speech.length-1) setLine(line+1);
    else setLine(0);
  }

  return(
    <div className="speech-bubble">
      <div className="speech-bubble__blurb">
        <span>{`${speech[line].author} ${speech[line].company ? ' from ' + speech[line].company : ''} said: `}</span>
        <h5>{`"${speech[line].headline}`}</h5>
        <p className="speech-bubble__blurb-message">
          {`${speech[line].message}"`}
        </p>
        <button onClick={getPreviousMessage}>prev</button>
        <button onClick={getNextMessage}>next</button>
      </div>
      <div className="speech-bubble__arrow"></div>
    </div>
  );
}