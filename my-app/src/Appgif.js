import React from 'react';
import './App.css';

import { Link, Route } from "wouter";
import Gifs from "./componentes/Gifs";


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>780 - Software Avanzado</h1>

                <Link to='/gif/gatos' className="links">Datos</Link>
                <Route
                    component={Gifs}
                    path="/gif/:keyword"/>
                {/*Gifs keyword='drift'/>*/}
            </header>
        </div>
    );
}

export default App;
