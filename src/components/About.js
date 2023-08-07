import React from "react";
import "./About.css"
import { BsPeopleFill } from "react-icons/bs";
import { GiDogHouse } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import Faqs from "./Faqs";

function About(){
    return(
        <div className="about">
            <div className="container about-container">
                <div className="row ">
                    <div className="col-lg-4 about-col">
                        <img id="about-img" src="./assets/about.jpg" alt="..."></img>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="text-center mt-5">About Company</h1>
                        <p className="about-text text-muted mt-4">Welcome to Paws Klub, where we believe that every pet deserves to be treated with love, care, and respect. 
                            We are a leading provider of comprehensive dog care services, including training, grooming, and dog daycare, 
                            all under one roof. At Paws Klub, we have created a haven for our four-legged friends, offering a safe and nurturing 
                            environment that prioritizes their well-being and happiness.
                        </p>
                        <p className="about-text text-muted">Paws Klub was born out of a genuine love and passion for dogs. Our founder, Milton Oboke, 
                            a dedicated dog enthusiast, envisioned a place where dogs could receive the highest level of care while fostering positive 
                            relationships with their owners. As a team of experienced and compassionate dog lovers, we are committed to making a positive difference 
                            in the lives of both dogs and their human companions.
                        </p>
                        <div className="about-facts">
                            <div className="about-facts-col">
                                <div  className="text-center facts-heading1">
                                    <BsPeopleFill className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">8</h2>
                                    <p className="text-muted facts-text">Dedicated staff members</p>
                                </span>
                            </div>

                            <div className="about-facts-col">
                                <div  className="text-center facts-heading2">
                                    <GiDogHouse className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">1</h2>
                                    <p className="text-muted facts-text">Acre of land for operation</p>
                                </span>
                            </div>

                            <div className="about-facts-col">
                                <div  className="text-center facts-heading3">
                                    <GiSittingDog className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">9</h2>
                                    <p className="text-muted facts-text">Dog breeds up for adoption</p>
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-facts-repeat">
                            <div className="about-facts-col">
                                <div  className="text-center facts-heading1">
                                    <BsPeopleFill className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">8</h2>
                                    <p className="text-muted facts-text">Dedicated staff members</p>
                                </span>
                            </div>

                            <div className="about-facts-col">
                                <div  className="text-center facts-heading2">
                                    <GiDogHouse className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">1</h2>
                                    <p className="text-muted facts-text">Acre of land for operation</p>
                                </span>
                            </div>

                            <div className="about-facts-col">
                                <div  className="text-center facts-heading3">
                                    <GiSittingDog className="icons"/>
                                </div>
                                <span className="facts-all-text">
                                    <h2 className="facts-no">15</h2>
                                    <p className="text-muted facts-text">Dog breeds for adoptions</p>
                                </span> 
                            </div>
                        </div>
                        <div className="about-faqs">
                            <Faqs/>
                        </div>
                        
        </div>
    )
}

export default About;