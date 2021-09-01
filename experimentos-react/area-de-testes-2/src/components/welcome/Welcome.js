import './Welcome.css'


export default function Welcome(props) {
    return(
        <div className="welcome">
            <div>
                Welcome, {props.yourName}!
            </div>
            
        </div>
    )
}