import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from '../history'
import SimpleStorage from './SimpleStorage'
import AllServices from './AllServices'
import MyAgreements from './MyAgreements'
import AllUsers from './AllUsers'
import SingleUser from './SingleUser'
import SingleService from './SingleService'
import AddService from './AddService'

const Routes = () =>
  <Router history={history}>
      <div>
        <span>
          <h1 id="main-header">Barter Block</h1>
        </span>
        <Switch>
          <Route exact path='/' component={SimpleStorage} />
          <Route exact path='/services' component={AllServices} />
          <Route exact path='/services/new' component={AddService} />
          <Route path='/services/:id' component={SingleService} />
          <Route exact path='/agreements' component={MyAgreements} />
          <Route exact path='/users' component={AllUsers} />
          <Route exact path='/users/:id' component={SingleUser} />
        </Switch>
      </div>
  </Router>

export default Routes;
