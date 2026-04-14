import React from 'react'
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";


const About = ({setPlayState}) => {
  return (
    <div className='about' id="About">
        <div className="about-left">
        <img src={about_img} alt="about-img" className='about-img'/>
        <img src={play_icon} alt="about-img" className='play_icon' onClick={()=>{
          setPlayState(true)
        }} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit, amet perspiciatis delectus ipsam temporibus pariatur at assumenda quae et placeat quaerat aliquam earum nostrum nemo, harum dolorum possimus dolor.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit, amet perspiciatis delectus ipsam temporibus pariatur at assumenda quae et placeat quaerat aliquam earum nostrum nemo, harum dolorum possimus dolor.</p>
        </div>
    </div>
  )
}

export default About