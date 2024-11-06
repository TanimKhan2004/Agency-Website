import React, { useState } from "react";
import "./Portal.css"; 

function Portal() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true); // Show the form when the button is clicked
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // Get form values
        const formData = {
            studentName: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            country: event.target.country.value,
            qualification: event.target.qualification.value,
            academicYear: event.target.academicYear.value,
            completedIelts: event.target.completedIelts.checked,
            ieltsScore: event.target.ieltsScore.value,
        };
        
        console.log("Form Data:", formData);
        // Here you would add code to save this information to Firebase

        setShowForm(false); // Hide the form after submission
    };

    return (
        <div>
            <button id="Portal" onClick={handleButtonClick}>
                Students Portal
            </button>

            {showForm && (
                <form onSubmit={handleFormSubmit} className="student-form">
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="country">Country of Residence:</label>
                    <input type="text" id="country" name="country" required />

                    <label htmlFor="qualification">Last Qualification:</label>
                    <input type="text" id="qualification" name="qualification" required />

                    <label htmlFor="academicYear">Last Academic Year:</label>
                    <input type="text" id="academicYear" name="academicYear" required />

                    <label htmlFor="completedIelts">
                        <input type="checkbox" id="completedIelts" name="completedIelts" />
                        Have you completed IELTS?
                    </label>

                    <label htmlFor="ieltsScore">IELTS Score (if applicable):</label>
                    <input type="number" id="ieltsScore" name="ieltsScore" min="0" max="9" step="0.5" />

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default Portal;
