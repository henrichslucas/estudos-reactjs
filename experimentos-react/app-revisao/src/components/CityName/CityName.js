import React from 'react';

import './CityName.css'


const CityName = (props) => {
    
    return (
        <div className="title">
            <h2>{props.name}</h2>
        </div> 
    );
}
 
export default CityName;