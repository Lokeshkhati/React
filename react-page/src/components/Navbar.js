import React from "react"
import images from "../images/react-logo.png"

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="nav-logo" src={images}/>
            <h3 className="nav-logo_text">React Facts </h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}