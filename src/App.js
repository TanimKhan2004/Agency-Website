
import './App.css';

import Menu from './Components/Menu'

import Officiallogo from './Assests/Officiallogo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      

         {/* Display the Officiallogo image */}
         
         <img src={Officiallogo} alt="Official Logo" className="Official-logo" />

        <div className='Name'>
           Budget Education and Consultancy
        </div>

        <div className='Menu'>
           
        </div>

         <Menu>  </Menu> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
