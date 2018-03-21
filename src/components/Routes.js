import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from '../history'
import SimpleStorage from './SimpleStorage'
import AllServices from './AllServices'
import SingleUser from './SingleUser'
import SingleService from './SingleService'
import AddService from './AddService'
import NavBar from './NavBar'
import { Login, Signup } from './SignUp'

const Routes = () =>
  <Router history={history}>
      <div>
        <span>
         <NavBar />
        </span>
        <Switch>
          <Route exact path='/' component={SimpleStorage} />
          <Route exact path='/services' component={AllServices} />
          <Route exact path='/services/new' component={AddService} />
          <Route path='/services/:id' component={SingleService} />
          <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        </Switch>
      </div>
  </Router>

export default Routes;
