import React from 'react'
import './Card.css'

export default props =>

    <div className="Card">
        
        <div className='header'>
            {props.titulo}
        </div>

        <div className='conteudo'>
            {props.children}
        </div>

    </div>