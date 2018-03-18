import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from '../history';
import SimpleStorage from './SimpleStorage';
import AllServices from './AllServices'
import MyAgreements from './MyAgreements';

const Routes = () =>
  <Router history={history}>
      <div>
        <span>
          <h1 id="main-header">Boilaaa</h1>
        </span>
        <Switch>
          <Route exact path='/' component={SimpleStorage} />
          <Route exact path='/services' component={AllServices} />
          <Route exact path='/agreements' component={MyAgreements} />
        </Switch>
      </div>
  </Router>

export default Routes;
