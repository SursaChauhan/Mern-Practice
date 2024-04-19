// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './About';
import DashboardPage from './Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
      
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
     
    </Router>

  );
};

export default App;
