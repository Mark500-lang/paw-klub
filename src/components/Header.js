import React from "react";
import "./Header.css"
import { GiPawFront } from "react-icons/gi";

function Logo(){
    return(
        <div className="logo" style={{ backgroundImage: "url(/assets/paw-print1.jpeg)"}}>
            <h1 className="logo-text"><GiPawFront id="hero-icon"/> <span className="hero-letter">P</span>aws <span className="hero-letter">K</span>lub</h1>
            <div className='color-overlay'>
                
            </div>                     
        </div>
    )
}

export default Logo;