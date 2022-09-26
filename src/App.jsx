import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import CardWeather from './components/CardWeather'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const success = pos => {
      const coord = pos.coords

      const position = {
        lat: coord.latitude,
        long: coord.longitude
      }
      setCoords(position)
    }
    const err = notPos => {
      alert ('Oye no me bloquees')
    }
    navigator.geolocation.getCurrentPosition(success, err)
  }, [])

  
  useEffect(() => {
    if (coords) {
      const APIKEY = 'a9cb35adc57ae071aba9b64062977f7e'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => setweather(res.data))
        .catch(err => console.log(err))
        setIsLoading(false)
    }
  }, [coords])
  
  return (
    <div className="App">
      {
        isLoading 
        ?
        <Loading />
        :
        <CardWeather weather={weather}/>
      }
    </div>
  )
}

export default App
