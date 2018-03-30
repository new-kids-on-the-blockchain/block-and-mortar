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

  componentDidMount(){
    window.scroll(0,0)
  }

  componentWillMount() {
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
      imgUrl: evt.target.imgUrl.value ? evt.target.imgUrl.value : '/assets/items/placeholder.png',
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
        <div className="home" id="background">
        <div className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns" id="topMargin">
          <div className="avenir f2">New Service</div>
          <div className="avenir flex items-center justify-center ma3 pa4 bg-teal navy">
          <div className="avenir">
            <div className="f4">Posting a good or service for sale is as easy as filling out the form below, but a lot of exciting things are going on behind the scenes:</div>
            <div>
              <li>When you click "submit," you are actually writing to the blockchain! A "smart contract" will record all of the important information about your product and sale.</li>
              <li>Writing to the blockchain incurs a small transaction fee, charged in ether, which is called "gas."</li>
            </div>
           </div>
        </div>
            <form onSubmit={this.handleSubmit} className="avenir containerInner bt pa4 black-80">
              <div className="avenir f3">Post Goods and Services</div>

              <div className="pa3">
                <label for="serviceName" className="avenir f6 b db mb2">Title</label>
                <input className="input-reset ba b--black-20 pa2 mb2 db w-100" id="serviceName" name="serviceName" placeholder="3 Jars of Artisanal Honey" size="50" />
              </div>

              <div className="pa3">
                <label for="serviceCategory" className="avenir f6 b db mb2">Category</label>
                <select id="serviceCategory" name="serviceCategory">
                  <option value="Goods">Goods</option>
                  <option value="Services">Services</option>
                </select>
              </div>

              <div className="pa3">
                <label for="servicePrice" className="avenir f6 b db mb2">Price <span class="normal black-60">(ether)</span></label>
                <input
                  id="servicePrice"
                  name="servicePrice"
                  type="number"
                  min="0"
                  max="100"
                  step="0.0001"
                  placeholder=".05"
                />
                <div className="pv2"><a className="dim" href={`https://currencio.co/eth/usd/`} target="_blank">ETH to USD Converter</a></div>
              </div>

              <div className="ph3 pv2">
                <label for="serviceDescription" className="avenir f6 b db mb2">Description</label>
                <textarea className="input-reset ba b--black-20 pa2 mb2 db w-100" id="serviceDescription" name="serviceDescription" placeholder="I'm a beekeeper. Only the freshest honey from local bees"/>
              </div>

              <div className="pa3">
                <label for="imgUrl" className="avenir f6 b db mb2">Image URL (optional)<span class="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db w-100" id="imgUrl" name="imgUrl" rows="1" cols="50" placeholder="https://images.unsplash.com/33/IR8nDBZETv6aM6HdJ7RD_IMG_5784.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ea2c67c054b77631dc2fb1ec0d7b074&auto=format&fit=crop&w=1650&q=80"/>
              </div>

              <button id="signUpButton" className="f4 link dim br-pill mb2 dib white bg-dark-pink inline-flex items-center ma2 pv2 pw4 ">Submit</button>
            </form>
          </div>
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
