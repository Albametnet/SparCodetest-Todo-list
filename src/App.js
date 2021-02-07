import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent'
import LoggedComponent from './components/LoggedComponent'
import AuthComponent from './components/AuthComponent'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <LoginComponent />
        </Route>
        <Route path='/home'>
          <AuthComponent>
            <Home />
          </AuthComponent>

        </Route>
      </Switch>
    </div>
  );
}

export default App;