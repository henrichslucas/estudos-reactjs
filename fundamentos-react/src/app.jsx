import React from 'react'
import './app.css'


import Primeiro from './components/primeiro' //o nome dos components tem q ter caps na primeira letra!!!!
import ComParametro from './components/comParametro'
import ComFilhos from './components/comFilhos'
import Card from './components/layout/card.jsx'
import Repeticao from './components/repeticao'
import Condicional from './components/condicional'
import CondicionalComIf from './components/condicionalComIf'


export default props =>
    <div className="app">

        <Card titulo="#05 - Componente Condicional.v2 ">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>        

        

        <Card titulo="#05 - Componente Condicional.v1 ">
            <Condicional numero={10}></Condicional>
        </Card>        


        <Card titulo="#04 - Componente com Repetição">
            <Repeticao></Repeticao>
        </Card>


        <Card titulo="#03 - Componente com Filhos(children)">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Danilo</li> 
                </ul>
            </ComFilhos>
        </Card>


        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Sou o titulo!" 
                subtitulo="Sou o subtitulo!">
            </ComParametro>
        </Card>


        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>

        
    </div>