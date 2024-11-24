import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>London Office</h4>
          <p>119 Hamlets Way, Mile End, E3 4TY</p>
          <p>+44 (0) 20 8066 1679</p>
          <p>+44 (0) 7446 030 707</p>
          <p>info@smartbeee.co.uk</p>
          <a
            href="https://www.google.com/maps?q=119+Hamlets+Way,+Mile+End,+E3+4TY"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            View on Map
          </a>
        </div>
        <div className="footer-section">
          <h4>Bangladesh Office</h4>
          <p>Mahi Hassan Tower, 263 Maibag mor, Malibag, Dhaka 1217</p>
          <p>+880 131 770 0050</p>
          <p>info@smartbeee.co.uk</p>
          <p>smartbeebd@gmail.com</p>
          <a
            href="https://www.google.com/maps?q=Mahi+Hassan+Tower,+263+Maibag+mor,+Malibag,+Dhaka+1217"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            View on Map
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2024 © All rights reserved by Smart Bee Education Ltd.</p>
        <nav className="footer-nav">
          <Link className="nav-link" to="/privacy">Privacy Policy</Link>
          <Link className="nav-link" to="/terms">Terms and Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
