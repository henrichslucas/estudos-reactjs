import React from 'react'


import If from './if'

export default props => {

    return (
        <div>
            <h2>O número {props.numero}</h2>
            <If test={props.numero % 2 == 0}>
                <span>é par</span>
            </If>
            
            <If test={props.numero % 2 == 1}>
                <span>é impar</span>
            </If>
            
        </div>
    )

}