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
        <Link className="nav-link" to="/"></Link>
        <Link className="nav-link" to="/About"></Link>
        <Link className="nav-link" to="/Abroad"></Link>
        <Link className="nav-link" to="/Courses"></Link>
        <Link className="nav-link" to="/Portal"></Link>
        <Link className="nav-link" to="/Search"></Link>
        <Link className="nav-link" to="/Services"></Link>
        <Link className="nav-link" to="/Updates"></Link>
        <Link className="nav-link" to="/Terms"></Link>
      </nav>

      {/* Main Content */}
      <main className="App-main">
        <Outlet /> {/* Outlet will render the child routes */}
      </main>
      {/* Body of the app */}
    <div className="App-body">

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
