import React from 'react'
import { useState } from 'react';
import '../App.css'

const CardWeather = ({ weather }) => {
    const hoy = new Date();
    const fecha = hoy.toDateString()
    const hour = hoy.toLocaleTimeString()
    setInterval(() => {
        fecha,
            hour
    }, 1000);

    const [gradesOrF, setGradesOrF] = useState(true)
    const toggleBoolean = () => setGradesOrF(!gradesOrF)
    console.log(weather);

    return (
        <div>
            <container className="container-weather">
                <main className='card-info'>
                    <article className="card-name-speed">
                        <h1 className="card-tittle">Weather App</h1>
                        <p>{weather?.name}, {weather?.sys.country}</p>
                        {/* <h3>{fecha}</h3>
                        <h2><span>{hour}</span></h2> */}
                    </article>
                    <article className='card-info-change'>
                        <container className="card-img">
                            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="aqui se supone va un icon" />
                            <h3 className='card-temperature'>
                                {gradesOrF ?
                                    (weather?.main.temp - 273.15).toFixed(1) + " °C"
                                    :
                                    (((weather?.main.temp - 273.15) * 1.8) + 32).toFixed(1) + " °F"
                                }
                            </h3>
                        </container>
                        <article className='card-dat'>
                            <ul>
                                <li>"{weather?.weather[0].description}"</li>
                                <li><span>Wind Speed  </span>{weather?.wind.speed} M/S</li>
                                <li><span>Humidity  </span>{weather?.main.humidity} %</li>
                                <li><span>Pressure  </span>{weather?.main.pressure} hPa</li>
                                <li><span>cloudiness  </span>{weather?.clouds.all} %</li>
                            </ul>
                        </article>
                    </article>
                    <article className='change-Button'>
                        <a onClick={toggleBoolean} className="btn">
                            <svg width="277" height="62">
                                <defs>
                                    <linearGradient id="grad1">
                                        <stop offset="0%" stop-color="#27ebe1e1" />
                                        <stop offset="100%" stop-color="#E178ED" />
                                    </linearGradient>
                                </defs>
                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                            </svg>
                            <span>
                                {gradesOrF ?
                                    "Change to ° F"
                                    :
                                    "Change to ° C"
                                }
                            </span>
                        </a>
                    </article>
                </main>
            </container>
        </div>
    )
}

export default CardWeather