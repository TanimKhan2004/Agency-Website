import React from "react";
import "./Updates.css"; 

function Updates() {
    const navigateToUpdates = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <button id="Updates" onClick={navigateToUpdates}>
           Updates
        </button>
    );
}

export default Updates;