import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props
  return (
    <div className="avenir form-login">

    <div className="avenir flex items-center justify-center pa4 bg-lightest-gray navy fl w-30">
    <form onSubmit={handleSubmit} name={name} className="avenir lh-title ml3">
        <div>
          <label htmlFor="userName"><large>Username</large></label>
          <input name="userName" type="text" />
        </div>
        <div>
          <label htmlFor="password"><large>Password</large></label>
          <input name="password" type="password" />
        </div>
        <br />
        <div>
          <button type="submit" className="btn btn-warning">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      </div>
      <div className="avenir flex items-center justify-center pa4 bg-lightest-blue navy fl w-70">
      <div className="avenir lh-title ml3">
        <h2>Get started today: When you join Block & Mortar, you can start buying and selling goods immediately.</h2>
        <p>If you are new to blockchain technology, check out our beginner's guide.</p>
        <p>If you’re already familiar with Ethereum, be sure to log into your <a href="https://metamask.io/">Metamask account</a>, create an account or log in below, and you’ll be ready to get started.</p>
      </div>
        </div>
      
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
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const userName = evt.target.userName.value
      const password = evt.target.password.value
      dispatch(auth(userName, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

