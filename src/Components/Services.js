import React from "react";
import "./Services.css";

function Services() {
    return (
        <div className="services-container">
            <button id="Services">
                Student Service
            </button>
            <div className="dropdown">
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/accommodation"}>
                    Accommodation
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/airport-pickup"}>
                    Airport Pickup
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/how-to-apply"}>
                    How to Apply
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/one-to-one-consultancy"}>
                    One to One Consultancy
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/pre-arrival-guide"}>
                    Pre-Arrival Guide
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/visa-immigration"}>
                    Visa & Immigration
                </div>
            </div>
        </div>
    );
}

export default Services;