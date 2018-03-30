import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserById, fetchServices } from "../store";

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0,0)
    this.props.handleFetchUserById(this.props.currentUser.id);
    this.props.fetchServices();
  }

  render() {
    const user = this.props.user;
    console.log(user, "USERRRR");
    const boughtServices = this.props.user.Buyer || [];
    const soldServices = this.props.user.Seller || [];
    const availableServices = soldServices.filter(
      item => item.isAvailable === true
    );
    const pastServices = soldServices.filter(
      item => item.isAvailable === false
    );
    const servicesCompleted = pastServices.filter(
      item => item.status === "Completed"
    );
    console.log(servicesCompleted, "servicesCompleted");

    if (!user.id)
      return (
        <div className="avenir dark-red">
          <h2>Oh no! No user found.</h2>
        </div>
      );
    return user.id ? (

      <div className="home" id="background">
        <div
          className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns"
          id="topMarginLogin"
        >
        <div id="profileVisual">
          <div className="avenir flex items-center justify-center pa1 bg-teal" id="calloutBox">
            <p className="avenir lh-title ml3">
              This is how your profile will appear to visitors!
            </p>
          </div>
          <br />
          <img alt="profile img" className="tc" src={user.imageURL} />
          <div className="f2">Hi, I'm {user.userName}!</div>
          </div>

          <div className="containerInner bt">
            <div className="f3">My Goods & Services: </div>
            <div>
              {availableServices.length ? (
                availableServices.map(service => {
                  return (
                    <div key={service.id}>
                      <Link to={`/services/${service.id}`}>
                        <div className="f4 b dim">{service.name}</div>
                      </Link>
                      <p>
                        <b>Description:</b> {service.description}
                      </p>
                      <p>
                        <b>Category:</b> {service.category}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p>No available goods and services.</p>
              )}
            </div>
          </div>
          <div className="containerInner bt">
            <div className="f3"> Seller History: </div>
            <div>
              {pastServices.length ? (
                <h3>
                  {pastServices.length} transactions, {servicesCompleted.length}{" "}
                  fulfilled{" "}
                </h3>
              ) : (
                <p>No past transactions.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, "CURRENT USER STATE PUBLIC");
  return {
    user: state.singleUser,
    currentUser: state.currentUser
  };
};

const mapStateToDispatch = dispatch => {
  return {
    handleFetchUserById: function(id) {
      dispatch(fetchUserById(id));
    },
    fetchServices
  };
};

export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(MyProfile)
);
