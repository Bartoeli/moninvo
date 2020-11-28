import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { SignIn } from './pages/SignIn/SignIn.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { UploadInvoice } from './pages/UploadInvoice/UploadInvoice.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/uploadinvoice">
          <UploadInvoice />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
