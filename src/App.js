import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* create a field for text */}
        <input className='Text-field' type="text" placeholder="Enter your name" />
      </header>
    </div>
  );
}

export default App;
