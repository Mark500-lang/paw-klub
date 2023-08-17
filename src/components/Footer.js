import "./Footer.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
function Footer(){
    return(
        <footer className="Footer">
            <img className="hero-image" src="./assets/stoic-dog.jpg" alt="..."></img>
            <div className="footer-text">
                <div className="footer-text-contacts">
                    <h3 className="text-center mb-4">The <span className="hero-letter">P</span>aw's <span className="hero-letter">K</span>lub</h3>
                    <div className="text-center">
                        <h6 className="mb-3">We will be happy to here from you</h6>
                        <h5><a href="tel:123456789"><span className="hero-letter"><BsFillTelephoneFill/></span> +2547-4380-8069</a></h5>
                        <h5><a href="mailto:markkantet@gmail.com"><span className="hero-letter"><AiFillMail/></span> pawsklub@gmail.com</a></h5>
                    </div>
                </div>
                <p className="text-center">Copyright © 2023 by PAW'S KLUB, Inc.</p>
            </div>
            
        </footer>
    )
}

export default Footer;