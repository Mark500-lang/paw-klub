import React from "react";
import './Ourteam.css';

function Ourteam(){
    return(
        <div className="our-team">
            <div className="team-container">
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-1.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Milton Oboke</h3>
                        <p className="text-muted">Business Owner</p>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-2.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Kevin Beef</h3>
                        <p className="text-muted">Handler</p>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-3.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Trent Overunder</h3>
                        <p className="text-muted">manager</p>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-4.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Mary Frittles</h3>
                        <p className="text-muted">groomer</p>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-5.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Henry Fisher</h3>
                        <p className="text-muted">assistant</p>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-image">
                        <img src="./assets/staff-6.png" alt="..."></img>
                    </div>
                    <div className="team-name">
                        <h3>Ray Hart</h3>
                        <p className="text-muted">trainer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ourteam;