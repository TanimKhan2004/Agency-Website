import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom"; 
import Officiallogo from "./Assets/Officiallogo.jpg";
import Header from "./Components/Header";
import Slide from "./Components/Slide";  
import Icons from "./Components/icons"; // Import the Icons component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Components/Slide.css';
import ConsultationBox from "./Components/ConsultationBox";
import CardBox from "./Components/CardBox";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={Officiallogo} alt="Official Logo" className="Official-logo" />
        <div className="Name">Budget Education and Consultancy</div>
        <div className="Contact">+44(0)7377139885</div>
        <div className="Contact2">+44(0)7932337375</div>

        {/* Use the Icons component */}
        <Icons />
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
        <Outlet />
      </main>

      {/* Body of the app */}
      <div className="App-body">
        <Slide />
        <ConsultationBox />
        <CardBox />
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
