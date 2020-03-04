import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <div>Main page</div>
        </Route>
        <Route path={'/login'} exact>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
