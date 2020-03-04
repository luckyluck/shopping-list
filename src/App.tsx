import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import MealPlans from './components/MealPlans';
import MealPlan from './components/MealPlan';

function App() {
  const token = sessionStorage.getItem('token');

  return (
    <Router>
      <nav className={'Navigation'}>
        <NavLink to={'/meal-plans'} activeClassName={'ActiveLink'}>Meal plans</NavLink>
        {!token && <NavLink to={'/login'} activeClassName={'ActiveLink'}>Login</NavLink>}
      </nav>
      <Switch>
        <Route path={['/meal-plans']} exact>
          <MealPlans/>
        </Route>
        <Route path={'/meal-plans/:id'} exact>
          <MealPlan/>
        </Route>
        <Route path={'/login'} exact>
          <Login/>
        </Route>
        <Redirect to={'/meal-plans'}/>
      </Switch>
    </Router>
  );
}

export default App;
