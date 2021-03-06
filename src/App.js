import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import './App.scss';
// CONTEXT
import PokemonState from './Context/Pokemon/PokemonState'
import Details from './Pages/Details/Details';

function App() {
    return <PokemonState>
        <div className="App"> {/* Aqui todos los componentes podran acceder al estado de context */}
            <Router>
                <Switch>
                    <Route path="/" exact
                        component={Home}/>
                    <Route path="/pokemon/:id" exact
                        component={Details}/>
                    <Route path="*"
                        component={NotFound}/>
                </Switch>
            </Router>
        </div>
    </PokemonState>;
}

export default App;
