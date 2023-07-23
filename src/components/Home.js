import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import './Home.css'
function Home(){
    return(
        <div className="home">
            <div className="container hero">
                <div className="row ">
                    <div className="col-sm home-">
                        <div id="safe-home">
                            <h1 className="reliable">Safe and <span className="hero-letter">reliable</span> pet boarding</h1>
                            <p className="keep">Keep your beloved pet dog happy and safe while you are away with dog boarding from our pet resort in Langata, Nairobi.</p>                         
                        </div>
                        <div id="contact-us-today-btn">
                            <button>Contact Us Today <AiFillCheckCircle id="check-circle-icon"/></button>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img id="home-img" src="./assets/twin-puppies.jpg" alt="..."></img>
                    </div>
                </div>
                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
    <                   div className="card" style={{ backgroundImage: "url(/assets/dogs-walk.jpg)"}}>
                            <h1 className="fs-1 text-center card-text">Doggie Daycare</h1>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="card" style={{ backgroundImage: "url(/assets/dogs-walk.jpg)"}}>
                            <h1 className="fs-1 text-center card-text">Grooming</h1>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card" style={{ backgroundImage: "url(/assets/dogs-walk.jpg)"}}>
                            <h1 className="fs-1 text-center card-text">Adoption</h1>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={{ backgroundImage: "url(/assets/dogs-walk.jpg)"}}>
                            <h1 className="fs-1 text-center card-text">Training</h1>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Home;