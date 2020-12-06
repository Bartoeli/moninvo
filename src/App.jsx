import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { SignIn } from './pages/SignIn/SignIn.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { RossumProvider } from './utils/Rossum/Rossum.jsx';
import { UploadInvoice } from './pages/UploadInvoice/UploadInvoice.jsx';
import { AddInvoice } from './pages/AddInvoice/AddInvoice.jsx';
import { Profile } from './pages/Profile/Profile.jsx';
import { Edit } from './pages/Edit/Edit.jsx';
import { Settings } from './pages/Settings/Settings.jsx';

function App() {
  return (
    <RossumProvider>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/uploadinvoice">
            <UploadInvoice />
          </Route>
          <Route path="/addinvoice">
            <AddInvoice />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </RossumProvider>
  );
}

export default App;
