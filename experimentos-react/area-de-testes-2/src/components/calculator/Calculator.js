
import './Calculator.css'


export default function Calculator (props){

    const soma = props.n1 + props.n2;
    const sub = props.n1 - props.n2;
    const divisao = props.n1 / props.n2;
    const mult = props.n1 * props.n2;


    return (
        <div className='calc'>

            <div>
                {`A soma entre os numeros ${props.n1} e ${props.n2} é de ${soma}`}
            </div> 
            
            <div>
                {`A subtração entre os numeros ${props.n1} e ${props.n2} é de ${sub}`}
            </div> 

            <div>
                {`A divisão entre os numeros ${props.n1} e ${props.n2} é de ${divisao}`}
            </div> 

            <div>
                {`A multiplicação entre os numeros ${props.n1} e ${props.n2} é de ${mult}`}
            </div> 

        </div>
    )
}