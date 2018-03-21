import React, { Component } from "react";
import { connect } from "react-redux";
import { postService } from "../store";

class AddService extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const formData = {
      name: evt.target.serviceName.value,
      category: evt.target.serviceCategory.value,
      price: evt.target.servicePrice.value,
      description: evt.target.serviceDescription.value,
      contractId: null
    };

    console.log("IN HANDLE SUBMIT!!!!");
    const price = formData.price;
    const { postNewService } = this.props;

    const newContract = this.props.contract
      .newAgreement(price, { from: this.props.accounts[0] })
      .then(newAgreement => {
        console.log(newAgreement.tx, "NEWAGREEMENT!!!");
        formData.contractId = newAgreement.tx;
      })
      .then(() => {
        postNewService(formData);
      })
      .catch(console.log);
    //omg thanks jon
    console.log(newContract, "OPTIMISTICALLY EXCITED");
  }

  render() {
    const { name, description, category, price } = this.state;
    return (
      this.props.contract && (
        <div>
          <h2>CREATE A SERVICE</h2>

          <form onSubmit={this.handleSubmit}>
            <h3> Name: </h3>
            <input name="serviceName" />
            <h3> Category: </h3>
            <select name="serviceCategory">
              <option value="Childcare">Childcare</option>
              <option value="Pet">Pet</option>
              <option value="Home Maintenance">Home Maintenance</option>
              <option value="Food" onChange={this.handleChage}>
                Food
              </option>
              <option value="Misc">Misc</option>
              <option value="Professional">Professional</option>
              <option value="Products">Products</option>
            </select>
            <h3> Price (ether) </h3>
            <input
              name="servicePrice"
              type="number"
              min="0"
              max="100"
              step="0.0001"
            />
            <h3> Description: </h3>
            <textarea name="serviceDescription" rows="1" cols="50" />
            <button> Submit </button>
          </form>
        </div>
      )
    );
  }
}

const mapState = state => {
  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts,
    configuredAccount: state.configuredAccount
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    postNewService: function(service) {
      dispatch(postService(service, ownProps));
    }
  };
};

export default connect(mapState, mapDispatch)(AddService);
