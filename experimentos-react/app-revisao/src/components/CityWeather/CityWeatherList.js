import './CityWeatherList.css'

const CityWeatherList = (props) => {
    const weatherInfo = props.infos
    return ( 
        <div className="weatherList">
            {weatherInfo.map((info) =>(
                <div key={ info.day }>
                    <h3 className='contentBody'>Previsão para { info.day } dia(s):</h3>
                    <h4>{ info.temperature } com ventos de { info.wind }</h4>
                </div>
            ))}
        </div>
        
     );
}
 
export default CityWeatherList;