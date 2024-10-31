import React from "react";
import "./Cources.css";

function Cources() {
    return (
        <div className="Cources-container">
            <button id="Cources">
                Our Cources
            </button>
            <div className="dropdown">
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/ielts"}>
                    IELTS
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/toefl"}>
                        TOEFL
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/pte"}>
                     PTE
                </div>
            </div>
        </div>
    );
}

export default Cources;