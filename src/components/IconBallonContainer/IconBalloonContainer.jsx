import React from 'react';
import IconBalloon from '../IconBalloon/IconBalloon';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import cloud from '../../assets/images/cloud.png';
import './IconBalloonContainer.scss';

export default function IconBalloonContainer(props) {
  const githubHandler = () => window.open('https://github.com/john-martinez', '_blank');
  const linkedInHandler = () => window.open('https://www.linkedin.com/in/john-ray-martinez/', '_blank');
  const emailHandler = () => window.location.href = "mailto:johnraymartinezwebdev@gmail.com";
  const resumeHandler = () => window.open('https://docs.google.com/document/d/1GufFLkE-u9PYio7KaJPro_9uryHJDTmPcNUTSaCTY20/edit#heading=h.je79nbfb7abe', '_blank');
  return(
    <div className="icon-balloon-container">
      <IconBalloon icon={faGithubSquare} handler={githubHandler} addScore={props.addScore} />
      <IconBalloon icon={faLinkedin} handler={linkedInHandler} addScore={props.addScore} />
      <IconBalloon icon={faEnvelopeSquare} handler={emailHandler} addScore={props.addScore} />
      <IconBalloon icon={faFileDownload} handler={resumeHandler}  addScore={props.addScore}/>
      <img className="icon-balloon-container__bg" src={cloud} alt="cloud"/>
    </div>

  );
}