import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Menu'>
          Hello World
        </div>
           <Menu></Menu> 
      </header>
    </div>
  );
}

export default App;
