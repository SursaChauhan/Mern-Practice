// DashboardPage.js
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const DashboardPage = ({ match }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={`${match.url}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`${match.url}/settings`}>Settings</Link>
        </li>
      </ul>
      {/* <Switch> */}
        <Route path={`${match.path}/profile`} component={Profile} />
        <Route path={`${match.path}/settings`} component={Settings} />
        <Route exact path={match.path}>
          <div>Please select a sub-route.</div>
        </Route>
      {/* </Switch> */}
    </div>
  );
};

export default DashboardPage;
