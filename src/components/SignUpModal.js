import React from "react"
import { connect } from "react-redux"
import { auth } from "../store"

const AuthFormModal = props => {
  const { name, displayName, handleSubmit } = props;
  return (
    <div className="avenir form-login" id="topMarginLogin">
      <div className="modalBox">
        <div className="avenir lh-title tc">
          <h2>Sign up and get started today!</h2>
          <form onSubmit={handleSubmit} name={name} className="avenir lh-title">
            <div>
              <label htmlFor="userName" className="f5 b db mb2" />
              <input name="userName" className="input-reset ba b--black-20 pa2 mb2 db w-70 center" type="text" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="password" className="f5 b db mb2" />
              <input name="password" className="input-reset ba b--black-20 pa2 mb2 db w-70 center" type="password" placeholder="Password"/>
            </div>
            <div>
              <button type="submit" className="f4 link dim br-pill pv2 mb2 dib white bg-main-blue b" id="signUpButton">
                {displayName}
              </button>
            </div>
          </form>

          <p className="w-80 center">
            If you are new to blockchain technology, check out our  <a href="/faq" className="b dim" >beginner's
            guide</a>.
          </p>
          <p className="w-80 center">
            If you're already familiar with Ethereum, be sure to log into your{" "}
            <a href="https://metamask.io/" className="b dim" >Metamask account</a>, create an
            account or log in below, and you’ll be ready to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.currentUser.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const userName = evt.target.userName.value;
      const password = evt.target.password.value;
      dispatch(auth(userName, password, formName));
    }
  };
};

export const Signup = connect(mapSignup, mapDispatch)(AuthFormModal);
