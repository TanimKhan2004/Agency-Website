import React from "react";
import "./Home.css"; 

function Home() {
    const navigateToHome = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <button id="Home" onClick={navigateToHome}>
            Home
        </button>
    );
}

export default Home;
