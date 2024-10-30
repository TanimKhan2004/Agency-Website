import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom"; 
import Officiallogo from "./Assets/Officiallogo.jpg";
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={Officiallogo} alt="Official Logo" className="Official-logo" />
        <div className="Name">Budget Education and Consultancy</div>
      </header>

      {/* Main Navigation */}
      <Header />
      <nav className="App-nav">
        <Link className="nav-link" to="/">Home</Link> 
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/Abroad">Abroad</Link>
        <Link className="nav-link" to="/Courses">Courses</Link>
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
