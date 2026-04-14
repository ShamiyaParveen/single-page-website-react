import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";



const Testimonial = () => {
      const slider = useRef();
        let tx = 0;  //translatex

    const SlideForward= ()=>{
      if(tx > -50){ //Here -50 is last number means when transfor : translatex(-50) it get the last card  so when it less than -50 then it descrease by -25 
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`

    }
    const SlideBackward= ()=>{
          if(tx < 0){ 
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonial' id="Testimonial">
        <img src={next_icon} alt="" className='next-btn' onClick={SlideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={SlideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="img" />
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero magnam veniam autem ab. A ut officiis tempora, aspernatur dignissimos vero iste voluptatem nisi quisquam totam. Eveniet consequatur placeat similique.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="img" />
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero magnam veniam autem ab. A ut officiis tempora, aspernatur dignissimos vero iste voluptatem nisi quisquam totam. Eveniet consequatur placeat similique.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="img" />
                           <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero magnam veniam autem ab. A ut officiis tempora, aspernatur dignissimos vero iste voluptatem nisi quisquam totam. Eveniet consequatur placeat similique.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="img" />
                           <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero magnam veniam autem ab. A ut officiis tempora, aspernatur dignissimos vero iste voluptatem nisi quisquam totam. Eveniet consequatur placeat similique.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial