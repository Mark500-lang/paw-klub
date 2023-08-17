import "./Contact.css"

function Contact(){
    return(
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div>
                            <h1>Contact Us</h1>
                            <h6>Thank you for your interest. We look forward to hearing from you soon.</h6>
                        </div>
                        <div>
                            <legend>Phone</legend>
                            <p>+254743808069</p>
                            <p>+254712345678</p>
                        </div>
                        <div>
                            <legend>Hours of operation</legend>
                            <p>Mon - Fri : 7am - 7pm</p>
                            <p>Sat - Sun : 9am - 6pm</p>
                        </div>
                        <div>
                            <legend>Address</legend>
                            <p>70321-103 Langata, Nairobi</p>
                        </div>
                        <div>
                            <legend>Service Areas</legend>
                            <p>area 1</p>
                            <p>area 2</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label><strong>First Name</strong></label>
                                    <input type="text" className="form-control mt-2 rounded-0 input-lg"/>
                                </div>
                                <div className="col-sm-6">
                                    <label><strong>Last Name</strong></label>
                                    <input type="email" className="form-control mt-2 rounded-0 input-lg"/>
                                </div>
                            </div>
                            <div className="col">
                                <label><strong>Address/Location</strong></label>
                                <input type="text" className="form-control mt-2 rounded-0 input-lg"/>
                            </div>
                            <div className="col mt-4">
                                <label><strong>Email</strong></label>
                                <input type="text" className="form-control mt-2 rounded-0 input-lg"/>
                            </div>
                            <div className="col mt-4">
                                <label><strong>Phone Number</strong></label>
                                <input type="text" className="form-control mt-2 rounded-0 input-lg"/>
                            </div>
                            <div className="mt-4">
                                <label><strong>General Comments</strong></label>
                                <textarea className="form-control mt-2 rounded-0" rows="5" id="comment" name="text" placeholder="...."></textarea>
                            </div>
                            <div className="buttons mt-5">
                                <button type="button" className="btn btn-primary" >Send</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;