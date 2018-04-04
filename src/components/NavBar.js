import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  navigationLinks() {
    return (
      <div>
        <nav className="navBar">
          <div id="subNav">
            {this.props.isLoggedIn ? (
              <div className="dtc v-mid w-75 tr" id="subNavItem">
                <Link to="/home" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns ">
                  My Dashboard
                </Link>
                <Link to="/services" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Marketplace
                </Link>
                <Link to="/services/new" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Create a Post
                </Link>
                <Link to="/messages" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Inbox
                </Link>
                <Link to="/my-profile" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  My Profile
                </Link>
                <Link to="/faq" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  FAQs
                </Link>
                <Link to="/about" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  About the Project
                </Link>
                <a href="#" onClick={this.props.handleClick} className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Logout
                </a>
              </div>
            ) : (
              <div id="subNav">
                <Link to="/signup" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Sign Up
                </Link>
                <Link to="/faq" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  FAQs
                </Link>
                <Link to="/about" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  About the Project
                </Link>
                <Link to="/login" className="avenir link dim white f6 f5-ns dib mr3 mr4-ns">
                  Login
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }

  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  }

  renderNavigation() {
    if (this.state.windowWidth <= 414) {
      return (
        <div className="nav_container2">
          <img
            role="presentation"
            id="hamburgerLogo"
            src="https://www.screeninnovations.com/wp-content/themes/screeninnovations/images/icons/menu-icons/misc/icon-hamburger-menu.svg"
            onClick={this.handleNavClick.bind(this)}
          />
          {this.renderMobileNav()}
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navBar">
            <div id="subNav">
              {this.props.isLoggedIn ? (
                <div className="dtc v-mid w-75 tr" id="subNavItem">
                  <Link
                    to="/home"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns "
                  >
                    My Dashboard
                  </Link>
                  <Link
                    to="/services"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Marketplace
                  </Link>
                  <Link
                    to="/services/new"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Create a Post
                  </Link>
                  <Link
                    to="/messages"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Inbox
                  </Link>
                  <Link
                    to="/faq"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/my-profile"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    My Profile
                  </Link>
                  <a
                    href="#"
                    onClick={this.props.handleClick}
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div id="subNav">
                  <Link
                    to="/about"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    About
                  </Link>
                  <Link
                    to="/login"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/faq"
                    className="avenir link dim white f6 f5-ns dib mr3 mr4-ns"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav_container">
        <Link to="/" id="link">
          <div id="logoTitle">
            <img id="logo" className="" src="/assets/logo1.png" />
            <div className="dim avenir white f1 siteTitle" id="link">
              Block &amp; Mortar
            </div>
          </div>
        </Link>
        {this.renderNavigation()}
      </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.currentUser.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);
