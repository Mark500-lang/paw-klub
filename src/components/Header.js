import React from "react";
import "./Header.css"

function Logo(){
    return(
        <div className="logo" style={{ backgroundImage: "url(/assets/paw-print1.jpeg)",
        }}>
            <h1 className="fs-1 text-center logo-text">Paws Klub</h1>
            <div className='color-overlay'>
                
            </div>                     
        </div>
    )
}

export default Logo;