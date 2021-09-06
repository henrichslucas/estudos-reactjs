import React from "react";
import './Header.css'

function Header(props) {

    return(
        <>
            <div className="headerArea">
                <h1>{props.titulo}</h1>
            </div>
        </>
        
    )
}

export default Header

