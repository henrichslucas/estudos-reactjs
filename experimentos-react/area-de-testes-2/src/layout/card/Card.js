import './Card.css'

export default function Card (props){
    return(
        <div className="card">
            <div className='cardContent'>
                <span>{props.children}</span>
            </div>

            <div className="cardTitle">
                <span>{props.cardTitle}</span>
            </div>
        </div>
    )
}