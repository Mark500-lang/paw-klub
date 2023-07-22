import React,{ useState, useEffect } from "react";
import useScrollListener from "./hooks/useScrollListener";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";
// import { VscListSelection } from "react-icons/bs";
import './Navbar.css';

function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    //update classList of nav on scroll
    useEffect(() => {
    const _classList = [];

    if (scroll.y > 30 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return(
        <nav className={navClassList.join(" ")} href="#">
                <List className="hamburger"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                    }}
                />
                <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'> 
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/services'> 
                                Services
                            </NavLink> 
                            
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/Adoption'> 
                                Adoption
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/training'> 
                                Training
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/more'>
                                More...
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
        </nav>
    )
}

export default Navbar;