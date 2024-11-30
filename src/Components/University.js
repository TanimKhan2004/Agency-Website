import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './University.css';
import Brunel from '../Assets/Brunel.jpg';
import Greenwich from '../Assets/Greenwich.jpg';
import Portsmouth from '../Assets/Portsmouth.jpg';

function University() {
  return (
    <div className="university-box">
      <h2>Partner Universities</h2>
      <p>We have partnerships with various universities worldwide to offer the best opportunities for our students.</p>
      <div className="university-images">
        <div className="university-image-box">
          <img src={Brunel} alt="Brunel" />
        </div>
        <div className="university-image-box">
          <img src={Greenwich} alt="Greenwich" />
        </div>
        <div className="university-image-box">
          <img src={Portsmouth} alt="Portsmouth" />
        </div>
      </div>
    </div>
  );
}

export default University;