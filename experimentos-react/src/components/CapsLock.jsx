import React from 'react'


export default props =>

    <div>
        <h1>Texto com letras minúsculas</h1>
        <h2>{props.children}</h2>
        <h1>Texto com letras maiúsculas</h1>
        <h2>{props.children.toUpperCase()}</h2>
    </div>