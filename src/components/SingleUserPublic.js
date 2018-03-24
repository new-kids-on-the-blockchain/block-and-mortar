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
    if (!user) return <div>No user exists at this location</div>;
    return (
      user ? (
      <div>
        <img alt="profile img" src={user.imageURL} />
        <h1>Hi, I'm {user.userName}!</h1>
        <h1>My Available Goods & Services: </h1>
        <ul>
          {availableServices &&
            availableServices.map(service => {
              return (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>
                    <h2>{service.name}</h2>
                  </Link>
                  <h3>{service.description}</h3>
                  <p>category: {service.category}</p>
                </li>
              );
            })}
        </ul>
        <h1> My Past Transactions: </h1>
        <ul>
          {pastServices &&
            pastServices.map(pastService => {
              return (
                <li key={pastService.id}>
                  <Link to={`/services/${pastService.id}`}>
                    <h2>{pastService.name}</h2>
                  </Link>
                  <h3>{pastService.description}</h3>
                  <p>Category: {pastService.category}</p>
                </li>
              );
            })}
        </ul>
      </div>
          ) : ( <h1>No user found.</h1>
            
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

