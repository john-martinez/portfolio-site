import React from 'react';
import { Link } from 'react-router-dom';
import './TraverseButton.scss';

export default function TraverseButton(props){
  return(
    <div className={`traverse-button__${props.position}`}>
      <Link to={props.target}>{props.text}</Link>
    </div>
  );
}