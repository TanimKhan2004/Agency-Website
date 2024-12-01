import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      {/* New Div for the Top Heading */}
      <div className="footer-heading">
        <h2>We are helping students globally</h2>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>London Office</h4>
          <p>119 Hamlets Way, Mile End, E3 4TY</p>
          <p>+44 (0) 20 8066 1679</p>
          <p>+44 (0) 7446 030 707</p>
          <p>budgeteducation.co.uk</p>
          <a
            href="https://www.google.com/maps?q=25+Edmund+Road,+Southsea+Portsmouth,+PO4+0LL"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            View on Map
          </a>
        </div>
        <div className="footer-section">
          <h4>Bangladesh Office</h4>
          <p>Road 11, Sector 12, Uttara, Dhaka-1230</p>
          <p>+8801843469397</p>
          <p>budgeteducation.co.uk</p>
          <p>budgeteducation@gmail.com</p>
          <a
            href="https://www.google.com/maps?q=Road+11,Sector+12,+Uttara+Dhaka,+Dhaka+1230"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            View on Map
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2024 © All rights reserved by Budget Education Ltd.</p>
        <nav className="footer-nav">
          <Link className="nav-link" to="/privacy">Privacy Policy</Link>
          <Link className="nav-link" to="/terms">Terms and Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
