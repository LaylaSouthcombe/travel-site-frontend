import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = ({setBodyBlur, setzIndex}) => {
    const [display, setDisplay] = useState("none")
    const [iconImg, setIconImg] = useState("fa fa-bars")
    const [iconClassName, setIconClassName] = useState("navIcon navIconBorder")

    const openSideNav = (e) => {
        e.preventDefault()
        if (display === "block") {
            setDisplay("none");
            setIconImg("fa fa-bars")
            setIconClassName("navIcon navIconBorder")
            setBodyBlur("none")
            setzIndex("0")
        } else {
            setDisplay("block");
            setIconImg("fa-solid fa-xmark")
            setIconClassName("navIcon")
            setBodyBlur("blur(5px)")
            setzIndex("-1")
        }
    }
    
    return (
        <>
            <div className="topnav">
                <div className="logo">
                    <div className="square1"></div>    
                </div>
                <ul className="navBar" id="myLinks" >
                    <li><Link to="/" activeClass="active">Home</Link></li>
                </ul> 
            </div>
            <div className="sidenav">
                <div className="logo">
                    <div className="square1"></div>
                </div>
                <button className={iconClassName} onClick={openSideNav}>
                    <i className={iconImg}></i>
                </button>
            </div>
            <div className="sideModal" style={{display: display}}>
                <ul className="sideNavBar" >
                    <li><Link link to="/" activeClass="active">Home</Link></li>
                </ul> 
            </div>
            </>
    )
}

export default NavBar;