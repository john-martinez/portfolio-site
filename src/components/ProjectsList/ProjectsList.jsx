import React from 'react';
import Project from '../Project/Project';
import './ProjectsList.scss';

export default function ProjectsList(){
  return(
    <div className="projects-list">
      <Project />
      <Project />
    </div>
  );
}