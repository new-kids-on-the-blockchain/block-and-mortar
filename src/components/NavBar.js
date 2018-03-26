import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = props => (
  <div>
    <nav>
        <Link to="/">
          <div>
            
            <h1 className="avenir green f1">Block and Mortar</h1>
          </div>
        </Link>
        <div>
        {props.isLoggedIn ? (
          <div className="dtc v-mid w-75 tr">
          <Link to="/home" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Home</Link>
          <Link to="/services" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">All Services</Link>
          <Link to="/messages" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Inbox</Link>
          <a href="#" onClick={props.handleClick} className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">
          Logout</a>
        </div>
        ) : (
        <div>
          <Link to="/login" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Login</Link>
          <Link to="/signup" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Sign Up</Link>
        </div>
        )}
       </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.currentUser.id,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

