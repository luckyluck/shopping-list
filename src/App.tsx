import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <ShoppingList/>
        </Route>
        <Route path={'/login'} exact>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
