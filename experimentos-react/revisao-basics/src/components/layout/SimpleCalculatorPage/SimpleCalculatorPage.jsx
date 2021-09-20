import React from 'react'
import SimpleCalculator from '../../projects/SimpleCalculator/SimpleCalculator.jsx'
export default function SimpleCalculatorPage(props) {

    //'1'+'1'+'2' * '2'+'2'+'3'

    return (
        <div className='simpleCalculatorContainer'>
            <div className='simpleCalculatorArea'>
                <SimpleCalculator/> 
            </div> 
        </div>
    )
}
