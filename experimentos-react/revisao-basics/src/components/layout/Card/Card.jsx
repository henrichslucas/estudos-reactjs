

export default function Card(props) {
    return (
        <div className='card'>

            <div className="cardContent">
                {props.children}
            </div>

            <div className="cardTitle">
                {props.title}
            </div>

        </div>
       
    )
}
