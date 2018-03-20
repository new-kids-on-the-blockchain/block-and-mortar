import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = props => (
  <div>
    <nav>
        <Link to="/">
          <div>
            <img src="" alt='logo' />
          </div>
        </Link>
        <div className="all-nav">
          <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#">
            Logout
          </a>
          <Link to="/services">Available Services</Link>
          <Link to="">My Transactions</Link>
        </div>
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
       </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.currentUser.id,
//   }
// }

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatch)(Navbar)

