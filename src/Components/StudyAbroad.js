import React from "react";
import "./StudyAbroad.css";

function StudyAbroad() {
    return (
        <div className="StudyAbroad-container">
            <button id="StudyAbroad">
                Study Abroad
            </button>
            <div className="dropdown">
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/study-in-uk"}>
                    Study in UK
                </div>
                <div className="dropdown-item" onClick={() => window.location.href = "http://localhost:3000/study-in-usa"}>
                    Study in USA
                </div>
            </div>
        </div>
    );
}

export default StudyAbroad;