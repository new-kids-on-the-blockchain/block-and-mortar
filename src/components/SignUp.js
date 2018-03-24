import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div className="form-login">
      <form onSubmit={handleSubmit} name={name}>
      <div>
          <label htmlFor="userName"><small>Username</small></label>
          <input name="userName" type="text" />
        </div>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <br />
        <div>
          <button type="submit" className="btn btn-warning">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <br />
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.currentUser.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.currentUser.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const userName = evt.target.userName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(userName, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

