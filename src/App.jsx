import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Program from './Component/Programs/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Video from './Component/Video-Player/Video';


const App = () => {


  const [playState, setPlayState] = useState(false);


  return (
    <>
    
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle = "OUR PROGRAMS" title="What We Offer"/>
    <Program />
    <About setPlayState={setPlayState}/>
     <Title subTitle = "GALLERY" title="Campus Photos"/>
     <Campus />
    <Title subTitle = "TESTIMONIAL" title="What Student Says"/>
    <Testimonial />
    <Title subTitle = "CONTACT US" title="Get In Touch"/>
    <Contact />
    <Footer/>
    </div>
   <Video playState={playState} setPlayState={setPlayState}/>
    
    
    </>
  )
}

export default App