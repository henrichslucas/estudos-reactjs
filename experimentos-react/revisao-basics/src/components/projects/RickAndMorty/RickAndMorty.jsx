import React from 'react'

import useFetch from '../../utils/useFetch/useFetch'

export default function RickAndMorty() {

    const {data , isLoading, error} = useFetch('https://rickandmortyapi.com/api/character/1')
    
   
    console.log(data.id)

    return (
        <div className='rickAndMortyPageContainer'>
            
            <div className="characterList">

                <ul>
                    <li className="singleCharacterInfo" >
                    
                    </li>
                </ul>

            </div>

        </div>
    )
}
