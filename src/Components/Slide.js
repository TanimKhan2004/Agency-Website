     
     // src/Components/Slideshow.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles for carousel
import London from "../Assets/London.jpg"; 
import Australia from "../Assets/Australia.jpg";
// import Canada from "../Assets/Canada.jpg";

function Slideshow() {
  return (
        <div className="slideshow-container">
        <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        dynamicHeight={true}
        className="carousel"
      >

{/* // Add Countries  */}

  <div className="carousel-item">
    <img src={London} alt="London" />
    <div className="carousel-content">
      <div className="carousel-message">Study in London</div>
      <button className="apply-button">Apply Now</button>
    </div> 
  </div>

  {/* <div className="carousel-item">
    <img src={Canada} alt="Canada" />
    <div className="carousel-content">
      <div className="carousel-message">Study in Canada</div>
      <button className="apply-button">Apply Now</button>
    </div>
  </div> */}

  <div className="carousel-item">
    <img src={Australia} alt="Australia" />
    <div className="carousel-content">
      <div className="carousel-message">Study in Sydney</div>
      <button className="apply-button">Apply Now</button>
    </div>
  </div>
</Carousel>
        </div>

);
}

export default Slideshow;
   