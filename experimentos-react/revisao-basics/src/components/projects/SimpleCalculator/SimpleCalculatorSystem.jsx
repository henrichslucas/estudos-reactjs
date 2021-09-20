import React from 'react'

export default function SimpleCalculatorSystem() {

    const calcDisplay = document.querySelector(".simpleCalcDisplay") 
    const sumButton = document.querySelector(".sumBTN") 
    const num1Button = document.querySelector(".numpad1")
    const solveButton = document.querySelector(".solveBTN")

    return (
        <div className="simpleCalcArea">

            <div className="simpleCalcDisplayArea">
                <input className="simpleCalcDisplay" type="text"/>
            </div>

            <div className="simpleCalcButtonPad">
                
                <button className="numpad7" value='7' >7</button>  
                <button className="numpad8" value='8' >8</button>  
                <button className="numpad9" value='9' >9</button> 
                <button className="numpad4" value='4' >4</button>  
                <button className="numpad5" value='5' >5</button>  
                <button className="numpad6" value='6' >6</button>  
                <button className="numpad1" value='1' >1</button>
                <button className="numpad2" value='2' >2</button>  
                <button className="numpad3" value='3' >3</button>  
                <button className="numpad0" value='0' >0</button>

                <button className="sumBTN">+</button>
                <button className="solveBTN" type="submit" >=</button>
            </div>

        </div>      
    )
}
