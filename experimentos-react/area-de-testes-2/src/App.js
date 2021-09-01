import './App.css';


import Card from './layout/card/Card.js'
import NewCalculator from './components/calculator_2.0/NewCalculator';


function App() {
  return (
    <div className="App">

      <Card cardTitle='Component #1'>
        <NewCalculator/>
      </Card> 

      <Card cardTitle='Component #2'>
      </Card>
      
    </div>
  );
}

export default App;
