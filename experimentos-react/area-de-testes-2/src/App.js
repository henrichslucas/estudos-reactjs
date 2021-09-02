import './App.css';


import Card from './layout/card/Card.js'
//import NewCalculator from './components/calculator_2.0/NewCalculator';
import LerObjeto from './components/lerObjeto/lerObjeto.js'

const QUADRO_DE_MEDALHAS = [
  { pais: "Brazil", medalhas: "5" },
  { pais: "Canada", medalhas: "4" },
  { pais: "Japão", medalhas: "28" },
  { pais: "Franca", medalhas: "3" },
]

function App() {
  return (
    <div className="App">

      <Card cardTitle='Component #1'>
         {QUADRO_DE_MEDALHAS.map(item => <LerObjeto texto={item.pais} numero={item.medalhas} />)}
      </Card> 

      

    </div>
  );
}

export default App;
