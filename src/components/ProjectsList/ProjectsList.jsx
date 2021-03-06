import React from 'react';
import Project from '../Project/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import suber1 from '../../assets/images/suber1.png';
import suber2 from '../../assets/images/suber2.png';
import suber3 from '../../assets/images/suber3.png';
import suber4 from '../../assets/images/suber4.png';
import suber5 from '../../assets/images/suber5.png';
import suber6 from '../../assets/images/suber6.png';
import bttw1 from '../../assets/images/bttw1.jpg';
import bttw2 from '../../assets/images/bttw2.jpg';
import bttw3 from '../../assets/images/bttw3.jpg';
import ca1 from '../../assets/images/ca1.jpg';
import ca2 from '../../assets/images/ca2.jpg';
import fb1 from '../../assets/images/fb-icon.png';
import './ProjectsList.scss';

export default function ProjectsList(){
  let projects = [
    {
      name: "Süber",
      description: "An arcade driving game that punishes players for falling asleep or getting drunk in game. An effort to raise awareness on DUI",
      tech: [
        <FontAwesomeIcon icon={faNode}/>, 
        <FontAwesomeIcon icon={faReact}/>, 
        <FontAwesomeIcon icon={faSass}/>
      ],
      otherTech: [],
      link: "https://subergame.netlify.com/",
      photos: [suber1,suber2,suber3,suber4,suber5,suber6],
      construction: false,
      demoLink: "https://www.loom.com/share/c3b15d35e7874d2e8ec41575a4e7a229"
    },
    {
      name: "BetterThanTheWeather",
      description: "A dashboard app that shows your local time and changes the background depending on the weather and time in your area",
      tech: [
        <FontAwesomeIcon icon={faNode}/>, 
        <FontAwesomeIcon icon={faReact}/>, 
        <FontAwesomeIcon icon={faSass}/>
      ],
      otherTech: [],
      link: "https://bttweather.netlify.com/",
      construction: false,
      photos: [bttw1,bttw2,bttw3]
    },
    {
      name: "Untitled Chat-app",
      description: "A looking for group chat app that can be used by people to connect to other people with the same interests. ",
      tech: [
        <FontAwesomeIcon icon={faNode}/>, 
        <FontAwesomeIcon icon={faReact}/>, 
        <FontAwesomeIcon icon={faSass}/>
      ],
      otherTech: [fb1],
      link: "https://chat-app-22717.web.app/",
      construction: true,
      photos: [ca1,ca2],
      
    }
  ]
  return(
    <div className="projects-list">
      {projects.map((project,i)=><Project key={i} project={project}/>)}
    </div>
  );
}