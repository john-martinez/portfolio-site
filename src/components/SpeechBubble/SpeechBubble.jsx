import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PulseLoader from "react-spinners/PulseLoader";
import { faArrowLeft, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import './SpeechBubble.scss';

export default function SpeechBubble({speech, handler, showModalHandler }){
  const [line, setLine] = useState(0);
  useEffect(()=>{
    if (typeof speech !== "string"){
      const intervalId = setInterval(()=>{
        line === speech.length-1 ? setLine(0) : setLine(line+1);
      }, 20000)
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
          { speech.length 
        ? (<>
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
          </>)
          : <PulseLoader size="10px" color="black" />
        }
        </div>
        <div className="speech-bubble__arrow"></div>
        <div className="speech-bubble__call-to-action" onClick={showModalHandler}>
          <FontAwesomeIcon icon={faPlus} /> Add Testimonial
        </div>
      </div>
    );
  }
}