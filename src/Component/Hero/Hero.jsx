import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='Hero container' name="Hero">
        <div className="hero-text">
            <h1>
                We Ensure better Education for a Better World
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore tempore, odit, culpa laborum labore repellendus totam suscipit sit voluptates laboriosam .</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="icon" /></button>
        </div>
    </div>
  )
}

export default Hero