import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css'

function App() {

  const [contador, setContador] = useState(0)

  alert('contador: ' + contador)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Iae RCROOKS
        </p>
        <button
          onClick={() => setContador(contador + 1)}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
