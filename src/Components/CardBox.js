// src/Components/CardBox.js
import React from 'react';
import './CardBox.css';

function CardBox() {
  return (
    <div className="card-box">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="square-box">
          <h3>Heading {index + 1}</h3>
          <p>This is some text inside box {index + 1}.</p>
        </div>
      ))}
    </div>
  );
}

export default CardBox;
