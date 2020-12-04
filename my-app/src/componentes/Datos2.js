import React, {useEffect, useState} from 'react';
import './GIF.css';
import logo from '../logo.svg';
import Datos2m from "../services/Datos22";

export default function Mensajes2(){

    const [loading, setLoading] = useState(false)
    const [valor, actualizar] = useState([]);

    useEffect(function (){
        setLoading(true)
        Datos2m().then(res => {
            actualizar(res)
            setLoading(false)
        })


    }, [])

    if (loading) return <img src={logo} className="App-logo" alt="logo" />

    return <div>
        {
            valor.map(singlegif => {
                return <div className='GIF'>
                    <h4>Autor: {singlegif.autor}</h4>
                    <h5>Mensaje:</h5>
                    <h6>{singlegif.nota}</h6>
                </div>
            })
        }
    </div>

}
