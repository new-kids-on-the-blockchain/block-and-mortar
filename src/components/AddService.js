import React, { Component } from "react";
import { connect } from "react-redux";
import { postService } from "../store";

class AddService extends Component {
  constructor() {
    super();
    this.state = {
      name: "hi",
      description: "hi",
      category: "Misc",
       //isAvailable: true,
      price: "1 eth",
      userId: "1"
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    const form = event.target.parentNode;
    this.setState({
      name: form.serviceName.value,
      category: form.serviceCategory.value,
      price: form.servicePrice.value,
      description: form.serviceDescription.value
    });
    console.log("HANDLE CHANGE", this.state);
  };

  handleSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: evt.target.serviceName.value,
      category: evt.target.serviceCategory.value,
      price: evt.target.servicePrice.value,
      description: evt.target.serviceDescription.value 
    }
    console.log("WE HAVE SUBMITTED (jokes)", formData)
    console.log(this.props.contract, "INSIDE HANDLE SUBMIT!!!!!!!!!")
  }

  render() {
    const { name, description, category, price } = this.state;
    console.log(this.props.contract, "THIS.PROPS.CONTRACT");
    return (
      // <form onSubmit={this.handleSubmit}>
      // <button type="submit">Submit</button>
      // </form>
      this.props.contract &&
      <div>
        <h2>CREATE A SERVICE</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="preview" />
          <h3> Name: </h3>
          <input value={name} name="serviceName" />
          <h3> Category: </h3>
          <input
            value={category}
            name="serviceCategory"
          />
          <h3> Price: </h3>
          <input
            value={price}
            name="servicePrice"
          />
          <h3> Description: </h3>
          <input
            value={description}
            name="serviceDescription"
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addService: function(service) {
      dispatch(postService(service, ownProps))
    }
  }
}

// function mapDispatch(dispatch) {
//   return {
//     getWeb3: function() {
//       return dispatch(fetchWeb3());
//     },
//     getContract: function(web3) {
//       return dispatch(fetchContract(web3));
//     },
//     getAccounts: function(web3) {
//       return dispatch(fetchAccounts(web3));
//     }
//   };
// }

export default connect(mapState, mapDispatch)(AddService);
