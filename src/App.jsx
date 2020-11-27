import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { SignIn } from './pages/SignIn/SignIn.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
