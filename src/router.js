import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Dashboard from './components/Dashboard.js';
import W1 from './components/Wizard/W1.js';
import W2 from './components/Wizard/W2.js';
import W3 from './components/Wizard/W3.js';
import W4 from './components/Wizard/W4.js';
import W5 from './components/Wizard/W5.js';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/W1" component={W1} />
    <Route exact path="/W2" component={W2} />
    <Route exact path="/W3" component={W3} />
    <Route exact path="/W4" component={W4} />
    <Route exact path="/W5" component={W5} />
  </Switch>
);
