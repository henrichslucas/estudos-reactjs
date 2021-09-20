import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/layout/Home/Home.jsx'
import SimpleCalculatorPage from './components/layout/SimpleCalculatorPage/SimpleCalculatorPage.jsx'
import RickAndMorty from './components/projects/RickAndMorty/RickAndMorty.jsx';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path = "/">
            <Home/>
          </Route>

          <Route exact path = "/1">
            <SimpleCalculatorPage/>
          </Route>

          <Route exact path = "/2">
            <RickAndMorty/>
          </Route>

        </Switch>

      </Router>
 
    </div>
  );
}

export default App;
