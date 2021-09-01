import './InsertNumbers.css'

export default function InsertNumbers(props) {
    
    return(
        <div className='insertNum'>
            <input className='num1' type="integer" placeholder='Numero'/>
             
            <input className='num2' type="integer" placeholder='Numero'/>
        </div> 
    )
}