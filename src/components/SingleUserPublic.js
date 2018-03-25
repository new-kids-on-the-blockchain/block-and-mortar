import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserById, fetchServices } from "../store";

class SingleUserPublic extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("FETCHING USER ID", this.props.match.params.id);
    this.props.handleFetchUserById(this.props.match.params.id);
    this.props.fetchServices();
  }

  render() {
    console.log("SINGLE USER PUBLIC!!", this.props.user);
    const user = this.props.user;
    const boughtServices = this.props.user.Buyer || [];
    const soldServices = this.props.user.Seller || [];
    const availableServices = soldServices.filter(
      item => item.isAvailable === true
    );
    const pastServices = soldServices.filter(item => item.isAvailable === false)
    console.log("AVAILABLE SERVICES", availableServices);
    console.log("user is: ", user);
    if (!user.id) return <div className="avenir dark-red"><h2>Oh no! No user found.</h2></div>;
    return (
      user.id ? (
        <div className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <img alt="profile img" src={user.imageURL} />
          <h1 className="dark-pink">Hi, I'm {user.userName}!</h1>
          <h2>My Available Goods & Services: </h2>
          <ul>
            {availableServices.length ?
              (availableServices.map(service => {
                return (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`}>
                      <h2>{service.name}</h2>
                    </Link>
                    <h3>{service.description}</h3>
                    <p>Category: {service.category}</p>
                  </li>
                );
              })) : (<p>No available goods and services.</p>)}
          </ul>
          <h2> My Past Transactions: </h2>
          <ul>
            {pastServices.length ?
              (pastServices.map(pastService => {
                return (
                  <li key={pastService.id}>
                    <Link to={`/services/${pastService.id}`}>
                      <h2>{pastService.name}</h2>
                    </Link>
                    <h3>{pastService.description}</h3>
                    <p>Category: {pastService.category}</p>
                  </li>
                );
              })) : (<p>No past transactions.</p>)}
          </ul>
        </div>
      ) : (<div />

        )

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, "CURRENT USER STATE PUBLIC");
  return {
    user: state.singleUser
  };
};

const mapStateToDispatch = dispatch => {
  return {
    handleFetchUserById: function (id) {
      dispatch(fetchUserById(id));
    },
    fetchServices
  };
};

export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(SingleUserPublic)
);

