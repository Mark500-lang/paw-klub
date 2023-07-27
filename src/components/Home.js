import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import './Home.css'
import Faqs from "./Faqs";

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


            <div className="testimonials" >
                <div className="container">
                    <div className="testimonials-title">
                        <h4>Reviewed by people</h4>
                        <h1>Client Testimonials</h1>
                        <p className="text-muted">Discover the impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their experiences with you.</p>
                    </div>
                    <div className="all-testimonials">
                        <div className="testimonial-card">
                            <span>
                                <img src="./assets/keith.png" alt="..."></img>
                                <h6>Keith Timon</h6>   
                            </span>
                            <BiSolidQuoteAltRight className="qoute-icon"/>
                            <p>"From the moment I stepped into their facility, it was evident that it is more than just a dog care center; it's a true haven for our four-legged companions. The staff's genuine love for dogs was palpable, and it put me at ease knowing my furry family member was in caring and capable hands."</p>
                        </div>

                        <div className="testimonial-card">
                        <span>
                                <img src="./assets/viola.png" alt="..."></img>
                                <h6>Diola Vasiv</h6>   
                            </span>
                            <BiSolidQuoteAltRight className="qoute-icon"/>
                            <p>" As a busy professional, I sometimes struggle to find enough time to give Max the attention he deserves. However, with Paw Klub, I can leave him there knowing he'll have a blast with his canine friends and receive all the attention and affection he needs. The facility is clean, safe, and engaging, making it the perfect place for dogs to socialize and have fun."</p>
                        </div>
                    </div>
                </div>
            </div>
            <Faqs/>
        </div>
    )
}

export default Home;