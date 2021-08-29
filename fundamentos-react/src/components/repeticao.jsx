import React from 'react'

import products from '../data/products'

export default props =>{

    function getProducts() { //  o objetivo dessa funçao é pegar a array dentro do products.js e transformar em um trecho de codigo jsx 
        return products.map(prod =>{
            return <li key={prod.id}>
                {prod.id} - {prod.nome} = R$ {prod.preco}
            </li>
        })
    }

    return(
       <div>
           <h2>Repetição</h2>
            <ul>
                {getProducts()}
            </ul>
       </div>
    )   
}