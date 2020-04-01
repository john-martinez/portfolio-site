import React, { useEffect, useState, useRef } from 'react';
import TraverseButton from '../../components/TraverseButton/TraverseButton';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import pic from '../../assets/images/fatbird.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.scss';

export default function Projects(props){
  const [didLoad, setDidLoad] = useState(false);
  const [modalIsOpen,setIsOpen] = useState(false);
  const projects = useRef();
  let subtitle;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const afterOpenModal = () => subtitle.style.color = '#f00';

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true), 100)
  }, [didLoad])

  return(
    <section id="projects" className={`projects ${didLoad ? 'projects--normal' : ''}`} ref={projects}>
      <div className="projects__container">
        <ProjectsList />
        <button className="projects__modal-button" onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Projects"
        >
          <h2 className="projects__modal-subtitle" ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <span className="projects__modal-close" onClick={closeModal}>x</span>
          <div className="projects__carousel"> 
            <Carousel>
              <div className="projects__carousel-item">
                  <img src={pic} />
                  <p className="legend">Legend 1</p>
              </div>
              <div className="projects__carousel-item">
                  <img className="projects__carousel-item"src={pic} />
                  <p className="legend">Legend 2</p>
              </div>
              <div className="projects__carousel-item">
                  <img src={pic} />
                  <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </Modal>
      </div>
      
      <TraverseButton text="MAINPAGE" position="left" target="/" targetDiv="#projects" history={props.history}/>
    </section>
  );
}