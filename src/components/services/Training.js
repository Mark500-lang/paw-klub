import React from "react";
import './Training.css';
import { Link } from "react-router-dom";

function Training(){
    return(
        <div className="training">
            <div className="container training-container">
                <div className="row ">
                    <div className="col-lg-4 training-col">
                        <img id="about-img" src="./assets/training-dog.jpg" alt="..."></img>
                    </div>
                    <div className="col-lg-8">
                        <div className="training-header">
                            <h3 className="text-center mt-5">Paw Klub's Training</h3>
                            <h1 className="text-center">Unleash Your Dog's <span className="hero-letter">Full</span> Potential</h1>
                        </div>
                        
                        <p className="training-text text-muted mt-4">At Paws Klub, we believe that a well-trained dog is a happy and confident companion.
                         Our professional dog training services are designed to empower both dogs and their owners, fostering a strong bond built on 
                         trust, respect, and effective communication. Whether you have a mischievous puppy, a rambunctious adolescent, or an adult dog 
                         with behavior challenges, our experienced trainers are here to guide you on the path to success.
                        </p>
                        <div className="training-program">
                            <h4>Our Training Program</h4>
                            <ul>
                                <li>Basic Obedience Training</li>
                                <li>Puppy Preschool</li>
                                <li>Advanced Training and Tricks</li>
                                <li>Behavior Modification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid training-cards-container">
                <h1 className="text-center mt-4 mb-2">Why choose Us for dog training?</h1>
                <h5 className="text-center mb-2"> We offer...</h5>
                <div className="row">
                    <div className="training-card col-lg-4">
                        <h4 className="text-center mb-4">Positive Reinforcement Techniques</h4>
                        <p className="">We are proud advocates of positive reinforcement training, a scientifically proven and humane approach 
                        that rewards desired behaviors with treats, praise, or affection. This gentle and effective method helps build your dog's confidence 
                        and encourages them to repeat the behaviors you desire.
                        </p>
                    </div>
                    <div className="training-card col-lg-4">
                        <h4 className="text-center mb-4">Individualized Training Plans</h4>
                        <p className="">Every dog is unique, and our training programs are tailored to cater to your dog's specific needs, 
                        personality, and learning style. Whether your goal is basic obedience, advanced tricks, or behavior modification, we will 
                        create a customized training plan to address your dog's specific challenges and enhance their strengths.
                        </p>
                    </div>
                    <div className="training-card col-lg-4">
                        <h4 className="text-center mb-4">Experienced and Certified Trainers</h4>
                        <p className="">Our team of trainers consists of passionate dog enthusiasts with extensive experience in dog behavior and 
                        training. They are certified professionals who keep up-to-date with the latest industry techniques and advancements to 
                        provide the best possible training experience for your furry friend.
                        </p>
                    </div>
                    <div className="training-card col-lg-4">
                        <h4 className="text-center mb-4">Positive Reinforcement Beyond the Classroom</h4>
                        <p className="">We believe that training is not limited to the classroom. Our trainers will equip you with the tools and 
                        knowledge needed to continue reinforcing positive behaviors at home. Consistency and positive reinforcement in your daily 
                        interactions with your dog will strengthen the training progress and create lasting results.
                        </p>
                    </div>
                </div>
                <div className="book-training">
                    <p className="text-center"><span><Link to='/contact' style={{textDecoration: 'none'}}>Contact us</Link></span> today to book training session...</p>
                </div>
            </div>
        </div>
    )
}

export default Training;