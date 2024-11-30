import React from "react";
import "./FeedbackBox.css";
import TrustpilotLogo from "../Assets/Trustpilot.jpg";
import GoogleLogo from "../Assets/Google.jpg";
import FacebookLogo from "../Assets/Facebook.jpg";

const FeedbackBox = () => {
  const reviewPlatforms = [
    { image: TrustpilotLogo, alt: "Trustpilot", link: "#" },
    { image: GoogleLogo, alt: "Google", link: "#" },
    { image: FacebookLogo, alt: "Facebook", link: "#" },
  ];

  return (
    <section className="feedback-container">
      <div className="feedback-text">
        <p className="feedback-label">STUDENT EXPERIENCE</p>
        <h1 className="feedback-heading">We would like to hear from our students</h1>
      </div>
      <div className="review-section">
        <p className="review-label">Review Us</p>
        <div className="review-buttons">
          {reviewPlatforms.map((platform, index) => (
            <a
              href={platform.link}
              key={index}
              className="review-button"
              aria-label={`Review us on ${platform.alt}`}
            >
              <img
                src={platform.image}
                alt={platform.alt}
                className="review-logo"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackBox;
