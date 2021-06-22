import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom';
import Home from './Pages/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" exact component={Home} />   
              <Route path="*" component={NotFound} />  
          </Switch>
        </Router>    
    </div>
  );
}

export default App;
