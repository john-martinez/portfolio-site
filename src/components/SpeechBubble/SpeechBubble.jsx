import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
          <h4 className="speech-bubble__blurb-headline">Hello Visitor!</h4>
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
          <h5 className="speech-bubble__blurb-headline">{`${speech[line].headline}`}</h5>
          <p className="speech-bubble__blurb-message">
            {`"${speech[line].message}"`}
          </p>
          <p className="speech-bubble__author">
            {`${speech[line].author}${speech[line].company ? `, ${speech[line].company}` : ''}`} <br/>
            {` ${speech[line].position}`}
          </p>
          <div className="speech-bubble__button-container">
            <span className="speech-bubble__arrow-button" onClick={getPreviousMessage}>
              <FontAwesomeIcon icon={faArrowLeft} />  
            </span>
            <span className="speech-bubble__arrow-button" onClick={getNextMessage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
        <div className="speech-bubble__arrow"></div>
      </div>
    );
  }
}