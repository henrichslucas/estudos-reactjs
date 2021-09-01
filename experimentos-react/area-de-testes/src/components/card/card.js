import React from 'react'

import './card.css'

function Card(props) {

    return (
        <div className='card'>

            <div className='content'>
                {props.children}
            </div>

            <div className='title'>
                {props.title}
            </div>
        </div>
    )
}

export default Card;
