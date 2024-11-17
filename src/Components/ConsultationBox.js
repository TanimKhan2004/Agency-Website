// src/Components/ConsultationBox.js
import React from 'react';
import './ConsultationBox.css'; // If you have styles for the consultation box

function ConsultationBox() {
  return (
    <div className="consultation-box">
      <div className="consultation-content">
        <h2>Apply for Free Consultation</h2>
        <p>More Than 5000 Students Are Happy With Us.</p>
        <p>
          Budget Education is an overseas educational consultant with a group of experienced
           counsellors who can guide students and their parents through the entire process of 
           arranging studies abroad from selecting a course, an institution, and ensuring that they arrive safely at their chosen destination.
        </p>
        <p>
          Budget Education counsellors provide free services to students from initial enquiry through enrolment, pre-departure, and post-arrival. The organization has dealt with various UK educational institutions and a large number of students who have been successfully placed in different institutions in London and various other counties in the UK.
        </p>
      </div>
    </div>
  );
}

export default ConsultationBox;
