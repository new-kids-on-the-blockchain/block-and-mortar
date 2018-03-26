import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeb3, postService, fetchAccounts } from "../store";
import { withRouter } from 'react-router-dom'

class AddService extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      category: "",
      price: 0,
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    //Jon insisted on this
    this.collectBlockchainInfo()
    }

    async collectBlockchainInfo() {
    // Get network provider, web3, and truffle contract instance and store them on state.
      try {
        await this.props.fetchWeb3();
        const web3 = this.props.web3
        this.props.fetchAccounts(web3);
      } catch (e) {
        console.log(e, 'AWAIT collectBlockchainInfo DIDN"T WORK');
    }
  }


  handleSubmit(evt, currentUser) {
    evt.preventDefault();
    const formData = {
      name: evt.target.serviceName.value,
      category: evt.target.serviceCategory.value,
      price: evt.target.servicePrice.value,
      description: evt.target.serviceDescription.value,
      imgUrl: evt.target.imgUrl.value ? evt.target.imgUrl.value : "https://st.depositphotos.com/1742172/1490/v/950/depositphotos_14907315-stock-illustration-cartoon-bricks.jpg",
      contractId: null,
      seller: this.props.currentUser.id
    };

    const price = formData.price;
    const { postNewService } = this.props;
    const newContract = this.props.contract
      .newAgreement(price, { from: this.props.accounts[0] })
      .then(newAgreement => {
        const contractId = newAgreement.logs[0].args.id.toString()
        formData.contractId = contractId;
      })
      .then(() => {
        postNewService(formData);
      })
      .catch(console.log);
  }

  render() {
    const currentUser = this.props.currentUser
    const { name, description, category, price } = this.state;
    return (
      this.props.contract && (
        <div>
          <h1 className="avenir">Post a Service</h1>
        <div className="avenir flex items-center justify-center pa4 bg-lightest-blue navy">
          <p className="lh-title ml3">Transactions between you and buyers in your community will be facilitated by a "smart contract," a set of rules that govern the exchange of goods and services for ether. When you post a good or service on Block and Mortar, you're kicking off this process and writing to the blockchain! Subsequent interactions between you and your buyers will also be captured on the blockchain.

          Please note that you'll incur a small fee every time you write to the blockchain (called "gas"), but the advantage is that the transaction is immutable, public, and xxx. </p>
        </div>
          <form onSubmit={this.handleSubmit}>
            <h3>Name:</h3>
            <input name="serviceName" />
            <h3>Category:</h3>
            <select name="serviceCategory">
              <option value="Goods">Goods</option>
              <option value="Services">Services</option>
            </select>
            <h3>Price (ether)</h3>
            <input
              name="servicePrice"
              type="number"
              min="0"
              max="100"
              step="0.0001"
            />
            <h3>Description:</h3>
            <textarea name="serviceDescription" rows="1" cols="50" />
            <h3>Image URL:</h3>
            <input name="imgUrl" />
            <button>Submit</button>
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
    configuredAccount: state.configuredAccount,
    currentUser: state.currentUser
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    postNewService: function(service) {
      dispatch(postService(service, ownProps))
    },
    fetchAccounts: function(web3) {
      dispatch(fetchAccounts(web3))
    },
    fetchWeb3: function () {
      return dispatch(fetchWeb3());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(AddService));
