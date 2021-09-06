import './CityWeatherList.css'

const CityWeatherList = (props) => {
    const weatherInfo = props.infos
   
    
    return ( 
        <div className="weatherList">
            {weatherInfo.map((info) =>(
                <div className="tempView" key={ info.id }>
                    <h1>Daqui a {info.day} dia(s)fará { info.temperature }</h1>
                    <h3 className='contentBody'>{info.body}</h3>
                </div>
            ))}
        </div>
        
     );
}
 
export default CityWeatherList;