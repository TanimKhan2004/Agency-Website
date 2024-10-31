import React from "react";
import "./Portal.css"; 

function Portal() {
    const navigateToPortal = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <button id="Portal" onClick={navigateToPortal}>
            Students Portal
        </button>
    );
}

export default Portal;