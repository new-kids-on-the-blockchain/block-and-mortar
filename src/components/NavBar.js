import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = props => (
  <div>
    <nav>
        <Link to="/">
          <div>
            <h1 className="avenir white f1">Block &amp; Mortar</h1>
          </div>
        </Link>
        <div>
        {props.isLoggedIn ? (
          <div className="dtc v-mid w-75 tr">
          <Link to="/home" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns ">Home</Link>
          <Link to="/services" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Marketplace</Link>
          <Link to="/services/new" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Create a Posting</Link>
          <Link to="/faq" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">FAQs</Link>
          <Link to="/messages" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Inbox</Link>
          <Link to="/my-profile" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">My Profile</Link>
          <a href="#" onClick={props.handleClick} className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">
          Logout</a>
        </div>
        ) : (
        <div>
          <Link to="/login" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Login</Link>
          <Link to="/signup" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Sign Up</Link>
          <Link to="/faq" className="avenir link dim dark-gray f6 f5-ns dib mr3 mr4-ns">FAQs</Link>
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

