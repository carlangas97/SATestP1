import React, {useEffect, useState} from 'react';
import './GIF.css';
import logo from '../logo.svg';
import getsotra from "../services/get";

export default function Listadegif({params}){

    const  {keyword} = params

    const [loading, setLoading] = useState(false)
    const [valor, actualizar] = useState([]);

    useEffect(function (){
        setLoading(true)
        getsotra({keyword}).then(gifs => {
            actualizar(gifs)
            setLoading(false)
        })
    }, [keyword])

    if (loading) return <img src={logo} className="App-logo" alt="logo" />


    return <div>
        {
            valor.map(singlegif => {
                return <div className='GIF'>
                    <h2>Carlos Giovani Gil Chacón</h2>
                    <h2>201603067</h2>
                    <img src={singlegif.url}/>

                </div>
            })
        }
    </div>

}
