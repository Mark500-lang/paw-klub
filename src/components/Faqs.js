import React from "react";
import "./Faqs.css";

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className="accordion-wrapper">
            
            <div
            className={`accordion-title ${isOpen ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
            >
            {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
            <div className="accordion-content text-muted">{children}</div>
            </div>
        </div>
    );
  };
  function Faqs (){
    return(
        <div className="faqs">
            <h1 className="text-center mt-5 mb-3">FAQs</h1>
            <p className="text-muted text-center">Frequently Asked Questions About the pet boarding Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            <div className="wrapper">
                <Accordion title="What types of training programs do you offer for dogs?">
                At Paws Klub, we offer a wide range of training programs tailored to meet the specific needs and goals of each dog and owner.
                 Our experienced trainers employ positive reinforcement techniques to address obedience training, behavioral challenges, socialization, and more. 
                 Whether you have a young puppy or an older dog, we have training solutions to help them become well-behaved, happy companions.
                </Accordion>
                <Accordion title="How often should I groom my dog, and what grooming services do you provide?">
                The frequency of grooming depends on your dog's breed, coat type, and lifestyle. 
                As a general guideline, most dogs benefit from regular grooming every 4 to 8 weeks. 
                At Paws Klub, we offer comprehensive grooming services, including bathing, brushing, nail trimming, ear cleaning, and breed-specific styling. 
                Our experienced groomers take the time to understand your dog's unique grooming needs and ensure they leave our salon looking and feeling their best.
                </Accordion>
                <Accordion title="What makes your dog daycare different from others">
                Our Paws Klub dog daycare is a one-of-a-kind haven for your furry friends. 
                 Unlike traditional daycare facilities, we prioritize individual attention and personalized care for each dog.
                 Our experienced staff supervises playtime to ensure a safe and fun environment for all dogs. Additionally,
                  our spacious play areas and carefully selected playmates allow for socialization and exercise, promoting a healthy and happy atmosphere. Rest assured that your dog will receive the love, attention, and mental stimulation they need while in our care.
                </Accordion>
            </div>
        </div>
        
    )
  }
  
  export default Faqs;