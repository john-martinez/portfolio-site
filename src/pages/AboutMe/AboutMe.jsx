import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import axios from 'axios';
import Modal from 'react-modal';
import myPic from '../../assets/images/me.jpg';
import FatBird from '../../components/FatBird/FatBird';
import cloud from '../../assets/images/cloud.png';
import './AboutMe.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '90%',
    maxWidth              : '500px'
  }
};
 
Modal.setAppElement('#root')

export default function Projects(props){
  const [testimonials, setTestimonials] = useState([]);
  const [didLoad, setDidLoad] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [success, setSuccess] = useState(false);
 
   
  useEffect(()=>{
    if (!testimonials.length){
      axios.get('https://cors-anywhere.herokuapp.com/https://johnraymartinez.herokuapp.com/api/testimonials')
      .then(data=>{
        let newData = data.data;
        newData.shift()
        setTestimonials(newData);
      })
      .catch(err=>console.log(err))
    }
  }, [testimonials.length])

  useEffect(()=>{
    if (!didLoad) setTimeout(()=>setDidLoad(true),100)
  }, [didLoad])

  useEffect(()=>{
    if (success) {
      setTimeout(()=>{
        setSuccess(false);
        setShowModal(false);
      },3000)
    }
  },[success])

  const formHandler = e => {
    e.preventDefault();
    const {author, company, position, headline, message } = e.target;
    author.classList.remove('about-me__form--right-invalid');
    headline.classList.remove('about-me__form--right-invalid');
    message.classList.remove('about-me__form--right-invalid-textarea');
    if (author.value.length && headline.value.length && message.value.length){
      const obj = {
        author: author.value, 
        company: company.value,
        position: position.value,
        headline: headline.value,
        message: message.value
      }
      axios.post('https://cors-anywhere.herokuapp.com/https://johnraymartinez.herokuapp.com/api/testimonials', obj)
      .then(res=>{
        setSuccess(true);
        setWaiting(false);
      })
      .catch(err=>console.log(err)) 
      setWaiting(true);
    } else {
      if (!author.value.length) setInvalid(author)
      if (!headline.value.length) setInvalid(headline)
      if (!message.value.length) setInvalid(message, 'about-me__form--right-invalid-textarea')
    }
  }
  const hideModal = () => setShowModal(false);
  const showModalHandler = () => setShowModal(true);
  const showTestimonials = () => {if (!clicked) setClicked(true)};
  const setInvalid = (elem, newClass='about-me__form--right-invalid') => {
      elem.classList.add('about-me__form--right-shake');
      elem.classList.add(newClass);
      setTimeout(()=>elem.classList.remove('about-me__form--right-shake'),250);
  }
  const retrieveBlurb = () => {
    return clicked 
    ? "These are the things that these wonderful people said about me..." 
    : "Hi! My name is John Ray and I am a Web Developer. I enjoy and love programming in general but during the past year, I was attracted to Web Development and decided to pursue it as a career. My spirit animal is a stork because I treat all of my projects like babies and I try my best to deliver."
  }
  return (
    <main id="aboutMe" className="about-me">
      <section className={`about-me__bio  ${didLoad ? 'about-me__bio--normal' : ''} ${clicked ? 'about-me__bio--bottom' : ''}`}>
        <div className="about-me__box">
          <FatBird 
            handler={showTestimonials} 
            speech={clicked ? testimonials : "Hello there! Want to see what people say about me?"} 
            showModalHandler={showModalHandler}
            waiting={waiting}
          />
          <div className="about-me__img-container">
            <img className="about-me__img" src={myPic} alt="handsome young man"/>
          </div>
          <div className="about-me__bio-blurb">
            {retrieveBlurb()}
          </div>
        </div> 
        {showModal && (
          <Modal
            isOpen={showModal}
            onRequestClose={hideModal}
            style={customStyles}
            contentLabel="Add Testimonials"
          >
            {!waiting 
              ? success 
                ? <h2>Thank you, your testimonial has been sent for review!</h2>
                : (<>
              <h2>Add Testimonial</h2>
              <form className="about-me__form" onSubmit={formHandler}>
                <div className="about-me__form-row">
                  <label className="about-me__form--left" htmlFor="author">Author<span className="red">*</span> </label>
                  <input className="about-me__form--right" type="text" name="author" />  
                </div>
                <div className="about-me__form-row">
                  <label className="about-me__form--left" htmlFor="company">Company </label> 
                  <input className="about-me__form--right"type="text" name="company" />
                </div>
                <div className="about-me__form-row">
                  <label className="about-me__form--left"  htmlFor="position">Position </label>
                  <input className="about-me__form--right"type="text" name="position" />
                </div>
                <div className="about-me__form-row">
                  <label className="about-me__form--left"  htmlFor="headline">Headline<span className="red">*</span> </label>
                  <input className="about-me__form--right" type="text" name="headline" />
                </div>
                <div className="about-me__form-row">
                  <label className="about-me__form--label about-me__form--left"  htmlFor="message">Message<span className="red">*</span> </label>
                  <textarea className="about-me__form--textarea about-me__form--right" name="message" ></textarea>
                </div>
                <div className="about-me__form-row">
                  <div className="about-me__form--left"></div>
                  <button className="about-me__form-submit">SUBMIT</button>
                </div>
              </form>
              </>)
              : <PulseLoader size="10px" color="black" />
            }
          </ Modal>
        )}
      </section>
      <>
        <img className="sky__cloud" src={cloud} alt="cloud"/>
        <img className="sky__cloud sky__cloud--right" src={cloud} alt="cloud"/>
      </>
    </main> 
  )

}