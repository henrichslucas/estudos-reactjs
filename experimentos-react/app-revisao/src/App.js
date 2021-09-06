import React from "react";
import Header from './components/Header/Header.js'
import './App.css'
import CityWeather from './components/CityWeather/CityWeather.js'

function App (){
    return(
        <div className="App">
           <Header titulo='App do Clima!'/>
           <div className="appContent">
               <CityWeather/>
           </div>
        </div>
    )
}

export default App;