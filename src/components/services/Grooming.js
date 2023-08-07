import React from "react";
import "./Grooming.css";
import { Link } from "react-router-dom";

function Grooming(){
    return(
        <div className="grooming">
            <div className="container grooming-container">
                <div className="row">
                    <div className="col-lg">
                        <img id="grooming-img" src="./assets/dog-grooming.jpg" alt="..."></img>
                    </div>
                    <div className="col-lg">
                        <h1 className="grooming-header text-center">Happy, Healthy & <span className="hero-letter">Clean</span> Pets</h1>
                        <p className="grooming-text">At Paws Klub, we understand that every dog deserves to look and feel their best. 
                        Our professional grooming services are designed to pamper your furry companion and enhance their well-being. 
                        With our team of experienced groomers and a passion for all things dogs, 
                        we are dedicated to providing top-quality grooming experiences for your beloved pets.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid our-grooming-services">
                <h1 className="text-center mt-3 mb-3">Our <span className="hero-groom-letter">Grooming</span> Services</h1>
                <div className="all-grooming-cards">
                    <div className="row">
                        <div className="grooming-card col-lg-4">
                            <div>
                                <h3 className="text-center">Bathing & Brushing</h3>
                            </div>
                            <p>Our signature bathing and brushing service will leave your dog with a fresh, 
                                clean coat that shines with health. We use premium, dog-friendly shampoos 
                                and conditioners suitable for all skin types, and our gentle brushing helps 
                                remove loose fur and tangles, promoting a healthy coat.
                            </p>            
                        </div>
                        <div className="grooming-card col-lg-4">
                            <div>
                                <h3 className="text-center"> Breed-Specific Styling</h3>
                            </div>
                            <p>Our skilled groomers are well-versed in breed-specific styling, creating looks that are not only fashionable 
                                but also practical for your dog's comfort. Whether it's a poodle's classic cut, a schnauzer's beard trim, 
                                or any other breed's signature style, we've got you covered.
                            </p>            
                        </div>
                        <div className="grooming-card col-lg-4">
                            <div>
                                <h3>Nail Trimming</h3>
                            </div>
                            <p>Trimming your dog's nails is essential for their comfort and mobility. Our experts will delicately trim your 
                                dog's nails to the appropriate length and provide paw care to keep their paws soft and healthy.
                            </p>            
                        </div>
                        <div className="grooming-card col-lg-4">
                            <div>
                                <h3>Ear Cleaning</h3>
                            </div>
                            <p>Proper ear cleaning is crucial to prevent infections and maintain your dog's hearing health. 
                                Our gentle ear cleaning service will ensure your dog's ears are clean and free of wax buildup.
                            </p>            
                        </div>
                        <div className="grooming-card col-lg-4">
                            <div>
                                <h3>Teeth Cleaning</h3>
                            </div>
                            <p>Oral health is paramount to your dog's overall well-being. Our teeth cleaning service helps combat plaque 
                                and tartar buildup, promoting healthy gums and a fresh breath.
                            </p>            
                        </div>
                    </div>
                </div>
            </div>
            <div className="book-grooming">
                <p className="text-center"><span><Link to='/contact' style={{textDecoration: 'none'}}>Contact us</Link></span> today to schedule an appointment...</p>
            </div>
        </div>
    )
}

export default Grooming;