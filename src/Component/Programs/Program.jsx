import React from 'react'
import "./Program.css"
import Program1 from "../../assets/program-1.png";
import Program2 from "../../assets/program-2.png";
import Program3 from "../../assets/program-3.png";
import Programicon_1 from "../../assets/program-icon-1.png";
import Programicon_2 from "../../assets/program-icon-2.png";
import Programicon_3 from "../../assets/program-icon-3.png";


const Program = () => {
  return (
    <div className='programs' id="Program">
        <div className="program">
            <img src={Program1} alt="program" />
            <div className="caption">
                <img src={Programicon_1} alt="icon"/>
                <p>Graduation Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={Program2} alt="program" />
            <div className="caption">
                <img src={Programicon_2} alt="icon"/>
                <p>Master Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={Program3} alt="program" />
            <div className="caption">
                <img src={Programicon_3} alt="icon"/>
                <p> PostGraduation </p>
            </div>
        </div>
    </div>
  )
}

export default Program