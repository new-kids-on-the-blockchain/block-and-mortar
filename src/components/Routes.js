import React, {Component} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import AllServices from './AllServices'
import SingleService from './SingleService'
import AddService from './AddService'
import SingleUser from './SingleUser'
import { Login, Signup } from './SignUp'
import NavBar from './NavBar'
import { me} from '../store'

class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props;
    return (
      <div>
        <NavBar />
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {
            isLoggedIn &&
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route exact path='/home' component={SingleUser} />
                <Route exact path='/services' component={AllServices} />
                <Route exact path='/services/new' component={AddService} />
                <Route exact path='/services/:id' component={SingleService} />
              </Switch>
          }
          {/* Displays our Login component as a fallback */}
          <Route component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.currentUser.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me());
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

