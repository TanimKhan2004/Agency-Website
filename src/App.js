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
        {/* <Link className="nav-link" to="/">Home</Link> */}
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/abroad">Abroad</Link>
        <Link className="nav-link" to="/courses">Courses</Link>
        <Link className="nav-link" to="/portal">Portal</Link>
        <Link className="nav-link" to="/search">Search</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/updates">Updates</Link>
        <Link className="nav-link" to="/terms">Terms</Link>
      </nav>

      {/* Main Content */}
      <main className="App-main">
        <Outlet />
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
