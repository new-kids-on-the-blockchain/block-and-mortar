import React, { Component } from "react";
import { connect } from "react-redux";
import { postService } from "../store";

class AddService extends Component {
  constructor() {
    super();
    //this.props.handleFetchWeb3()
    //this.props.handleFetchContract()

    this.state = {
      name: "hi",
      description: "hi",
      category: "Misc",
      //isAvailable: true,
      price: "1 eth",
      userId: "1"
    };
  }

  // componentWillMount() {
  //   this.collectBlockchainInfo();
  // }

  // async collectBlockchainInfo() {
  //   // Get network provider, web3, and truffle contract instance and store them on state.
  //   try {
  //     const { web3 } = await this.props.getWeb3();
  //     console.log(web3, "APP.JS Web3");
  //     this.props.getContract(web3);
  //     console.log("MIDDLE OF ASYNC GET CONTRACT APP.JS");
  //     this.props.getAccounts(web3);
  //   } catch (e) {
  //     console.log(e, 'AWAIT collectBlockchainInfo DIDN"T WORK');
  //   }
  // }

  // componentWillMount() {
  //   console.log('COMPONENT WILL MOUNT')
  //   const web3obj = this.props.handleFetchWeb3()
  //   console.log('COMPONENT WILL MOUNT WEB3Obj', web3obj)
  //   this.props.contract && this.props.handleFetchContract(web3obj)
  //   console.log('CONTRACT HERE', this.props.contract)
  // }

  // componentWillUpdate(nextProps, nextState){
  //  console.log(nextProps, "next props")
  //  console.log(nextState, "nextState")
  // }

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
          <input
            value={category}
            name="serviceCategory"
            onChange={this.handleChange}
          />
          <h3> Price: </h3>
          <input
            value={price}
            name="servicePrice"
            onChange={this.handleChange}
          />
          <h3> Description: </h3>
          <input
            value={description}
            name="serviceDescription"
            onChange={this.handleChange}
          />
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
