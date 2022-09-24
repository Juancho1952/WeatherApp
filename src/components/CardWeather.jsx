import React from 'react'
import { useState } from 'react';

const CardWeather = ({ weather }) => {
    const hoy = new Date();
    const fecha = hoy.toDateString()
    const hour =hoy.toLocaleTimeString()

    const [gradesOrF, setGradesOrF] = useState(true)
    const toggleBoolean = ()=> setGradesOrF (!gradesOrF)

    return (
        <div>
            <container className="container">
                <navbar className="card-name-speed">{weather?.name} <span>{weather?.wind.speed} m/s</span></navbar>
                <main className='card-info'>
                    <article className='card-dat'>
                        <p>{fecha}</p>
                        <h2>{ hour}</h2>
                        <p><span>Humedad: </span>{weather?.main.humidity}%</p>
                    </article>
                    <article>
                        <container className="card-img">
                            <img src="https://play-lh.googleusercontent.com/xnp4bOz1uV-AzKnEqz1LPNJ4Q3P2GAxFqSfXCanCH0AzEBzUGNqM9VtNU5K_QCxUYVSG" alt="aqui se supone va un icon" />
                            <h1>{gradesOrF ?(weather?.main.temp - 273.15).toFixed(1) + "°C" : (((weather?.main.temp - 273.15) * 1.8) + 32).toFixed(1) + "°F"} </h1>

                            <button className="change" onClick={toggleBoolean}>°C / °F</button>
                        </container>
                    </article>
                </main>
            </container>
        </div>
    )
}

export default CardWeather