import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import './App.scss';
// CONTEXT
import MoviesState from './Context/Movies/MoviesState'
import Movie from './Pages/Movies/Movie';

function App() {
    return <MoviesState>
        <div className="App"> {/* Aqui todos los componentes podran acceder al estado de context */}
            <Router>
                <Switch>
                    <Route path="/" exact
                        component={Home}/>
                    <Route path="/movie/:idMovie" 
                        component={Movie}/>
                    <Route path="*"
                        component={NotFound}/>
                </Switch>
            </Router>
        </div>
    </MoviesState>;
}

export default App;
