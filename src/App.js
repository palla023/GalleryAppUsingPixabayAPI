import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './Search';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/search/:imgname' exact component ={Search} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
