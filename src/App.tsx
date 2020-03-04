import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import MealPlans from './components/MealPlans';
import MealPlan from './components/MealPlan';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/meal-plans']} exact>
          <MealPlans/>
        </Route>
        <Route path={'/meal-plans/:id'} exact>
          <MealPlan/>
        </Route>
        <Route path={'/login'} exact>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
