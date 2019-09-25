import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/characters' component={Characters}></Route>
      </Switch>
    </div>
  );
}

export default App;
