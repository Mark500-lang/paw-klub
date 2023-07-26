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
                            <p className="keep">We offer varied services to keep your beloved pet dog happy, healthy and safe... We are located at our pet resort in Langata, Nairobi.</p>                         
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

            <div className="container services-cards">
                <h1 className="text-center mb-5">Our <span className="hero-letter">Services</span></h1>

                <div className="row card-row">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="cards" style={{ backgroundImage: "url(/assets/dogs-walk.jpg)"}}>
                            <h3 className="fs-1 text-center card-text">Doggie Daycare</h3>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="cards" style={{ backgroundImage: "url(/assets/dog-grooming.jpg)"}}>
                            <h3 className="fs-1 text-center card-text">Grooming</h3>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row card-row">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="cards" style={{ backgroundImage: "url(/assets/winking-dog.jpg)"}}>
                            <h3 className="fs-1 text-center card-text">Adoption</h3>

                            <div className='card-color-overlay'>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="cards" style={{ backgroundImage: "url(/assets/dogs-training.jpg)"}}>
                            <h3 className="fs-1 text-center card-text">Training</h3>

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