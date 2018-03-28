import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props
  return (
    <div className="home" id="background">
      <div className="avenir form-login" id="topMarginLogin">
        <div className="avenir flex items-center justify-center pw4 pv2 bg-lightest-gray navy fl w-30">
          <form onSubmit={handleSubmit} name={name}>
            <div className="avenir f2 pa4 tc">{displayName}</div>
            <div className="pa3">
              <label for="userName" className="avenir f6 b db mb2"><large>Username</large></label>
              <input name="userName" type="text" className="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>

            <div className="pa3">
              <label for="password" className="avenir f6 b db mb2"><large>Password</large></label>
              <input name="password" type="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
            <div className="tc">
              <button type="submit" className="f5 b link dim br-pill dib white bg-dark-pink pv2 w-80 tc">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </div>
        <div className="avenir flex items-center justify-center pa4 bg-teal navy fl w-70">
          <div className="avenir lh-title ml3">
            <div className="avenir f2">Get started today</div>
            <div className="avenir f3">When you join Block & Mortar, you can start buying and selling goods immediately.</div>
            <div className="avenir f5 pv2">If you are new to blockchain technology, check out our beginner's guide.</div>
            <div className="avenir f5 pv2">If you're already familiar with Ethereum, be sure to log into your <a href="https://metamask.io/">Metamask account</a>, create an account or log in below, and you’ll be ready to get started.</div>
          </div>
        </div>
      </div>
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

