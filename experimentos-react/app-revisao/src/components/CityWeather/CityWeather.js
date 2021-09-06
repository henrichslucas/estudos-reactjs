import React from "react";
import { useState, useEffect } from "react";

import CityWeatherList from "./CityWeatherList";
import './CityWeather.css'

const cityName = prompt('Nome da cidade:')

const CityWeather = () => {

    const[weatherInfo, setWeather] = useState(null)
    //const[isPending, setIsPending] = useState(true)

    useEffect(() => {

        fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
            .then(response => {
                return (response.json())
            })
            .then(data => {
                setWeather(data.forecast)
            });
    }, [])

    return(
        <>
            <h2>Previsões para a cidade de {cityName}</h2>
            <div className="cityWeather">
                {weatherInfo && <CityWeatherList infos = {weatherInfo}/>}
            </div>
        </>
    )    
}


export default CityWeather