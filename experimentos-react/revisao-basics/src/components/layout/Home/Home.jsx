import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../layout/Card/Card.jsx'



export default function Home() {
    return (
        <div className='home'>
            <Link to = '/1' style={{ textDecoration: 'none' }} > 
                <Card title='Projeto #1 Calculadora simples'>
                    APP PREVIEW GOES HERE
                </Card>
            </Link>

            <Link to = '/2' style={{ textDecoration: 'none'}}>
                <Card title='Projeto #2 Lista de personagens: Rick and Morty'>
                    APP PREVIEW GOES HERE
                </Card>
            </Link>
           
        {/*
            <Card title='Projeto #2 Jogo da velha'>
            APP PREVIEW GOES HERE
            </Card>

            <Card title='Projeto #3 Relógio digital'>
            APP PREVIEW GOES HERE
            </Card>

            <Card title='Projeto #4 Lançador de dados simples'>
            APP PREVIEW GOES HERE
            </Card>

            <Card title='Projeto #5 Calculadora melhorada'>
            APP PREVIEW GOES HERE
            </Card>

            <Card title='Projeto #6 Lançador de dados melhorado'>
            APP PREVIEW GOES HERE
            </Card>

            <Card title='Projeto #7 Relógio analógico'>
            APP PREVIEW GOES HERE
            </Card>
        */}

        </div>
    )
}
