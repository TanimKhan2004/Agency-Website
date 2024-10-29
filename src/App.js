import React from "react";
import './App.css';

import Officiallogo from './Assests/Officiallogo.jpg'
import HomeButton from './Components/HomeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      

         {/* Display the Officiallogo image */}
         
         <img src={Officiallogo} alt="Official Logo" className="Official-logo" />

        <div className='Name'>
           Budget Education and Consultancy
        </div>

        <div classname='HomeButton'>
          <HomeButton />
        </div>  

      </header>
    </div>
  );
}

export default App;
