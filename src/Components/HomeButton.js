import React from "react";
import "./homeButton.css"; 

function HomeButton() {
    const navigateToHome = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <button id="homeButton" onClick={navigateToHome}>
            Home
        </button>
    );
}

export default HomeButton;
