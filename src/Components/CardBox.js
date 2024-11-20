// src/Components/CardBox.js
import React from 'react';
import './CardBox.css';

function CardBox() {
  const boxContent = [
    { heading: "London Office", text: "We have established our main branch in the heart of London" },

    { heading: "70 + Universities", 
      text: "We have established our precious relationship with more than 70 universities across the land of United Kingdom" },

    { heading: "10000+ Courses", text: "We help choose the best courses out of the best for you" }, 

    { heading: "100% Free Service", text: "All of our consultations are free of charge" },

    { heading: "70+ Nationalities", text: "We have helped more than 70 nationalities along the journey" },

    { heading: "100% Satisfaction", text: "We have track record of making our Student totally satisfied with our service" },
    
  ];

  return (
    <div className="card-container">
      {/* Title box */}
      <div className="title-box">
        <h2>Why Choose Us</h2>
      </div>

      {/* Cards */}
      {boxContent.map((content, index) => (
        <div key={index} className="square-box">
          <h3 className="box-heading">{content.heading}</h3>
          <p className="box-text">{content.text}</p>
        </div>
      ))}
    </div>
  );
}


export default CardBox;
