import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeb3, postService, fetchAccounts } from "../store";
import { withRouter, Link } from 'react-router-dom'

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
        <div className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <h1 className="avenir purple">New Service</h1>
        <div className="avenir flex items-center justify-center pa4 bg-lightest-blue navy">
          <p className="lh-title ml3"><b>Posting a good or service for sale is as easy as filling out the form below, but a lot of exciting things are going on behind the scenes:</b>
          <li>When you click "submit," you are actually writing to the blockchain! A "smart contract" will record all of the important information about your product and sale.</li>
          <li>Writing to the blockchain incurs a small transaction fee, charged in ether, which is called "gas."</li>
           </p>
        </div>
        <h2 className="avenir">Post Goods and Services</h2>
          <form onSubmit={this.handleSubmit} className="avenir">
            <h3>Title:</h3>
            <input name="serviceName" placeholder="3 Jars of Artisanal Honey" size="50" />
            <h3>Category:</h3>
            <select name="serviceCategory">
              <option value="Goods">Goods</option>
              <option value="Services">Services</option>
            </select>
            <h3>Price (ether):</h3>
            <input
              name="servicePrice"
              type="number"
              min="0"
              max="100"
              step="0.0001"
              placeholder=".05"
            /> 
            <a href={`https://currencio.co/eth/usd/`} target="_blank">ETH to USD Converter</a>
            <h3>Description:</h3>
            <textarea name="serviceDescription" rows="1" cols="50" placeholder="I'm a beekeeper. Only the freshest honey from local bees"/>
            <h3>Image URL (optional):</h3>
            <textarea name="imgUrl" rows="1" cols="50" placeholder="https://images.unsplash.com/33/IR8nDBZETv6aM6HdJ7RD_IMG_5784.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ea2c67c054b77631dc2fb1ec0d7b074&auto=format&fit=crop&w=1650&q=80"/>
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
