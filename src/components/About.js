import React from "react";
import "./About.css"
import { BsPeopleFill } from "react-icons/bs";
import { GiDogHouse } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";

function About(){
    return(
        <div className="about">
            <div className="container about-container">
                <div className="row ">
                    <div className="col-sm-4 about-col">
                        <img id="about-img" src="./assets/about.jpg" alt=""></img>
                    </div>
                    <div className="col-sm-8">
                        <h1 className="text-center mt-5">About Company</h1>
                        <p className="about-text text-muted mt-4">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

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
                                    <p className="text-muted facts-text">Acres of land for operation</p>
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
                                    <p className="text-muted facts-text">Acres of land for operation</p>
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
        </div>
    )
}

export default About;