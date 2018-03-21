import React, { Component } from "react";
import { connect } from "react-redux";
import { postAgreement, postService } from "../store";
import BarterAgreement from "../../build/contracts/BarterAgreement.json";


class AddService extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      category: "",
      price: 0,
      blockchainContractId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const form = event.target.value;
    console.log(form, 'FFFOORRNNNNNNMMMMM')
    this.setState({
      name: form.serviceName.value,
      category: form.serviceCategory.value,
      price: form.servicePrice.value,
      description: form.serviceDescription.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("IN HANDLE SUBMIT!!!!");
    const { name, category, price, description } = this.state;

    const {postNewAgreement, postNewService} = this.props

    const newContract = this.props.contract
      .newAgreement(price, { from: this.props.accounts[0] })
      .then(newAgreement => {
        postNewAgreement(newAgreement.tx)
      })
      .then(() => {
        postNewService(this.state)
      })
      .catch(console.log);
    //omg thanks jon
    console.log(newContract, "OPTIMISTICALLY EXCITED");
  }

  render() {
    const { name, description, category, price } = this.state;
    console.log(this.props.contract, "THIS.PROPS.CONTRACT");
    return (
      // <form onSubmit={this.handleSubmit}>
      // <button type="submit">Submit</button>
      // </form>
      this.props.contract && (
        <div>
          <h2>CREATE A SERVICE</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="preview" />
            <h3> Name: </h3>
            <input
            value={name}
            name="serviceName"
            onChange={this.handleChange}/>
            <h3> Category: </h3>
            <select onChange={this.handleChage} name="category">
              <option value="Childcare">Childcare</option>
              <option value="Pet">Pet</option>
              <option value="Home Maintenance">Home Maintenance</option>
              <option value="Food">Food</option>
              <option value="Misc">Misc</option>
              <option value="Professional">Professional</option>
              <option value="Products">Products</option>
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
            <label>
              Description:
              <textarea
                onChange={this.handleChange}
                name="description"
                rows="1"
                cols="50"
                value={description}
              />
            </label>
            <h3> Description: </h3>
            <label>
              Description:
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
    addService: function(service) {
      dispatch(postService(service, ownProps));
    },
    postNewAgreement: function(agreement) {
      dispatch(postAgreement(agreement, ownProps))
    },
    postNewService: function(service) {
      dispatch(postService(service, ownProps))
    }
    // fetchContractAfterAsync: function() {
    //   dispatch(fetchContract());
    // },

  };
};

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
