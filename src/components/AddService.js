import React, { Component } from "react";
import { connect } from "react-redux";
import { postService, fetchContract } from "../store";
import BarterAgreement from '../../build/contracts/BarterAgreement.json';

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
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.makeContract = this.makeContract.bind(this)
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
    // const formData = {
    //   name: evt.target.serviceName.value,
    //   category: evt.target.serviceCategory.value,
    //   price: evt.target.servicePrice.value,
    //   description: evt.target.serviceDescription.value 
    // }

    // const name = evt.target.serviceName.value
    // const category = evt.target.serviceCategory.value
    // const price = evt.target.servicePrice.value
    // const description = evt.target.serviceDescription.value
    
    console.log("IN HANDLE SUBMIT!!!!")
    // console.log(createAgreement, "CREATE AGREEMENT")
    console.log(this.props.web3, "WEB 3!!!!!!#@FRFEWRFAW")
    console.log(this.props.accounts, "ACCOUNTS!!!")
 const HELLO = this.props.contract.newAgreement.call(143543)
 console.log(HELLO, "OPTIMISTICALLY EXCITED")
//  this.props.contract.getAgreement.call(1)

    //const num = 1234
    //this.makeContract(num)

   
   
  }

  // async makeContract(num){
  //   try {
  //     await this.props.contract.newAgreement(5)
  //     this.props.fetchContractAfterAsync()
  //   } catch (e) {
  //     console.log(e, 'MAKE CONTRACT FAILEDDDD')
  //   }
  // }
  
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
    accounts: state.accounts,
    configuredAccount: state.configuredAccount
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addService: function(service) {
      dispatch(postService(service, ownProps))
    },
    fetchContractAfterAsync: function(){
      dispatch(fetchContract())
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
