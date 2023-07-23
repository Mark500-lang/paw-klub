import React from "react";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import "./Common.css";

function Common(){
    return(
        <div id="common">
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Common;