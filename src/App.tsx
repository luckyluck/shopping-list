import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import MealPlans from './components/MealPlans';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <MealPlans/>
        </Route>
        <Route path={'/login'} exact>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
