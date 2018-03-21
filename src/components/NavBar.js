import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = props => (
  <div>
    <nav>
        <Link to="/">
          <div>
            <img src="https://st.depositphotos.com/1742172/1490/v/950/depositphotos_14907315-stock-illustration-cartoon-bricks.jpg" alt='logo' />
            <h1>Block Party</h1>
          </div>
        </Link>
        <div>
        {props.isLoggedIn ? (
          <div>
          <Link to="/home">Home</Link>
          <Link to="/services">All Services</Link>
          <a href="#" onClick={props.handleClick}>
          Logout</a>
        </div>
        ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
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

