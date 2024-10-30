import React from "react";
import "./About.css"; 

function About() {
    const navigateToAbout = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <button id="About" onClick={navigateToAbout}>
            About
        </button>
    );
}

export default About;