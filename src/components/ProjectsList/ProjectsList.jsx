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
import './ProjectsList.scss';

export default function ProjectsList(){
  let projects = [
    {
      name: "Süber",
      description: "An arcade driving game that punishes players for falling asleep or getting drunk in game",
      tech: [
        <FontAwesomeIcon icon={faNode}/>, 
        <FontAwesomeIcon icon={faReact}/>, 
        <FontAwesomeIcon icon={faSass}/>
      ],
      link: "https://subergame.netlify.com/",
      photos: [suber1,suber2,suber3,suber4,suber5,suber6]
    }
  ]
  return(
    <div className="projects-list">
      {projects.map((project,i)=><Project key={i} project={project}/>)}
    </div>
  );
}