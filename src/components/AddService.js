import React, { Component } from "react";
import { connect } from "react-redux";
import { postService } from "../store";

class AddService extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      category: "",
      price: "",
      userId: ""
    };
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

  handleSubmit() {}

  render() {
    const { name, description, category, price } = this.state;
    console.log(this.props.contract, "THIS.PROPS.CONTRACT");
    return (
      this.props.contract &&
      <div>
        <h2>CREATE A SERVICE</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="preview" />
          <h3> Name: </h3>
          <input value={name} name="serviceName" onChange={this.handleChange} />
          <h3> Category: </h3>
          <select onChange={this.handleChage} name="category">
            <option value='Childcare'>Childcare</option>
            <option value='Pet'>Pet</option>
            <option value='Home Maintenance'>Home Maintenance</option>
            <option value='Food'>Food</option>
            <option value='Misc'>Misc</option>
            <option value='Professional'>Misc</option>
            <option value='Products'>Misc</option>
          </select>
          <h3> Price (ether) </h3>
          <input
            value={price}
            name="servicePrice"
            type="number"
            min="0"
            max="100"
            step="0.0001"
            onChange={this.handleChange}
          />
          <h3> Description: </h3>
          <label>Description:
          <textarea
          onChange={this.handleChange}
          name="description"
          rows="1"
          cols="50"
          value={description}
            />
          </label>
          <button> Submit </button>
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
