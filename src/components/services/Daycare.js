import React from "react";
import "./Daycare.css"

function Daycare(){
    return(
        <div className="daycare">
            <div className="container daycare-container">
                <div className="row">
                    <img src="./assets/dogs-walk2.jpg" alt="..."></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="daycare-header"><span className="hero-letter">Exciting</span> Playtime For Your Pup</h1>
                    </div>
                    <div className="col daycare-text-div">
                        <p className="daycare-text text-center">Let your dog socialize with doggie play day services in Langata, Nairobi. The <strong className="daycare-text">Paw Klub</strong> provides a safe and constructive environment where your pet will be with experienced dog handlers while interacting with other dogs in both a play and learning atmosphere. Contact us at +2547-2815-2815 for more information about how our play day services can help your pet become better rounded.</p>
                    </div>
                </div>
            </div>
            
            <div className="container sub-daycare">
                <div className="row">
                    <div className="col-sm">
                        <h1>Play Day Services</h1>
                        <p className="daycare-text text-muted">Play days are offered every Monday through Friday. Reservations are not required to partake in these events but space is limited. Both indoor and outdoor activities, including games and play equipment are featured during these fun and exciting events. It is required that all dogs are either neutered or spayed within 6 months of age before being allowed to participate in our doggie play days.  All dogs must be current on Flea and Tick Preventative.</p>
                    </div>
                    <div className="col-sm daycare-dogwball text-center">
                        <img src="./assets/dogwithball.png" alt="dog with red ball">

                        </img> 
                    </div>
                    
                    
                </div>
                
            </div>
            <div className="mt-5 mb-5">
                <h3><u>Day Care Price List</u></h3>
                <ul className="mt-3">
                    <li>Per hour @Ksh 150</li>
                    <li>Half Day (7am - 1pm / 1pm -7pm) @Ksh 800</li>
                    <li>Full Day (7am - 7pm) @Ksh 1,500</li>
                </ul>
            </div>
        </div>
    )
}

export default Daycare;