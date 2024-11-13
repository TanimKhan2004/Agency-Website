import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom"; 
import Officiallogo from "./Assets/Officiallogo.jpg";
import Header from "./Components/Header";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles for carousel
import './Components/Slide.css';  // Correct path for Slide.css
import Slide from "./Components/Slide";  // Import the Slide component

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={Officiallogo} alt="Official Logo" className="Official-logo" />
        <div className="Name">Budget Education and Consultancy</div>
        <div className="Contact">+44(0)7377139885</div>
        <div className="Contact2">+44(0)7932337375</div>

        {/* Social Media and Contact Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:your-email@example.com">
            <MdEmail size={24} />
          </a>
          <a href="tel:+447377139885">
            <MdPhone size={24} />
          </a>
        </div>
      </header>

      {/* Main Navigation */}
      <Header />
      <nav className="App-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/Abroad">Abroad</Link>
        <Link className="nav-link" to="/StudyAbroad">Study Abroad</Link>
        <Link className="nav-link" to="/Portal">Portal</Link>
        <Link className="nav-link" to="/Search">Search</Link>
        <Link className="nav-link" to="/Services">Services</Link>
        <Link className="nav-link" to="/Updates">Updates</Link>
        <Link className="nav-link" to="/Terms">Terms</Link>
      </nav>

      {/* Main Content */}
      <main className="App-main">
        <Outlet /> {/* Outlet will render the child routes */}
      </main>

      {/* Body of the app */}
      <div className="App-body">
        {/* Add the Slide component here */}
        
        <Slide /> {/* Render the Slide component here */}

        <div className="consultation-box">
          <div className="line">Line 1</div>
          <div className="line">Line 2</div>
          <div className="line">Line 3</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="App-bottom-nav">
        <Link className="nav-link" to="/privacy">Privacy Policy</Link>
        <Link className="nav-link" to="/terms">Terms of Use</Link>
        <Link className="nav-link" to="/faq">FAQ</Link>
      </div>
    </div>
  );
}

export default App;
