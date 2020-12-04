import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [valor, actualizar] = useState(50);
  return (
    <div className="App">
      <header className="App-header">

        <img onClick={event =>{
          alert("clic");
          console.log("hola")
        }}
             src="https://randomuser.me/api/portraits/women/10.jpg"/*{logo}*/ className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <span> {valor} </span>
        <button onClick={() =>{
          actualizar(valor + 1)
        }}>
          Boton 1 +
        </button>

        <button onClick={() =>{
          actualizar(valor - 1)
        }}>
          Boton 2 -
        </button>


      </header>
    </div>
  );
}

export default App;
