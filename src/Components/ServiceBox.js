import React from "react";
import "./ServiceBox.css";
import ProfessionalImage from "../Assets/Professional.jpg"
import VisaCounsellingImage from "../Assets/Visa.jpg"
import OnetoOneImage from "../Assets/Onetoone.jpg"
import ApplicationImage from "../Assets/Application.jpg"
import AccomodationImage from "../Assets/Accomodation.jpg"


const ServiceBox = () => {
  return (
    <section className="service-container" aria-label="Student Services">
      <h1 className="service-title">Services for Students</h1>
      <p className="service-description">
        Explore our range of services designed to support your academic journey and personal needs.
      </p>
      <div className="service-boxes">
        <div className="service-box" role="button" tabIndex="0">
          <img
            src={ProfessionalImage}
            alt="Professional Advice"
            className="service-image"
          />
          <h3 className="service-heading">Professional Advice</h3>
          <p className="service-text">
            Get expert guidance on academic and career planning to set you up for success.
          </p>
        </div>

        <div className="service-box" role="button" tabIndex="0">
          <img
            src={VisaCounsellingImage}
            alt="Visa Counselling"
            className="service-image"
          />
          <h3 className="service-heading">Visa Counselling</h3>
          <p className="service-text">
            Receive personalized visa advice to ensure smooth travel and study abroad.
          </p>
        </div>
        <div className="service-box" role="button" tabIndex="0">
          <img
            src={OnetoOneImage} 
            alt="One to One Consultation"
            className="service-image"
          />
          <h3 className="service-heading">One to One Consultation</h3>
          <p className="service-text">
            Book a private session with our experts for tailored solutions to your concerns.
          </p>
        </div>
        <div className="service-box" role="button" tabIndex="0">
          <img
            src={ApplicationImage}
            alt="Application Preparation"
            className="service-image"
          />
          <h3 className="service-heading">Application Preparation</h3>
          <p className="service-text">
            Get help with preparing your application for universities and scholarships.
          </p>
        </div>
        <div className="service-box" role="button" tabIndex="0">
          <img
            src= {AccomodationImage}
            alt="Accommodation"
            className="service-image"
          />
          <h3 className="service-heading">Accommodation</h3>
          <p className="service-text">
            Find the best student accommodation options near your institution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;
