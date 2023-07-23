import React,{ useState, useEffect } from "react";
import useScrollListener from "./hooks/useScrollListener";
import { NavLink } from "react-router-dom";
import { LuListMinus } from "react-icons/lu";
// import { List } from "react-bootstrap-icons";
// import { VscListSelection } from "react-icons/bs";
import './Navbar.css';

function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    //update classList of nav on scroll
    useEffect(() => {
    const _classList = [];

    if (scroll.y > 130 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return(
        <nav className={navClassList.join(" ")} href="#">
                <LuListMinus className="hamburger"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                    }}
                />
                <div className={isNavExpanded ? "nav-menus expanded" : "nav-menus"}>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/' activeclassname='active'> 
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/daycare' activeclassname='active'> 
                                Daycare
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/grooming' activeclassname='active'> 
                                Grooming
                            </NavLink> 
                            
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/training' activeclassname='active'> 
                                Adoption&Training
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/contact' activeclassname='active'>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-linker" to='/more' activeclassname='active'>
                                More...
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
        </nav>
    )
}

export default Navbar;