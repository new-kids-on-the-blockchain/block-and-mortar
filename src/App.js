import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb3 } from './store/web3'
import { fetchContract } from './store/contract'
import { fetchAccounts } from './store/accounts'
import Routes from './components/Routes'
import { withRouter } from 'react-router-dom'
import './App.css'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.collectBlockchainInfo = this.collectBlockchainInfo.bind(this)
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
      await this.props.getWeb3();
      const web3 = this.props.web3
      this.props.getContract(web3);
      this.props.getAccounts(web3);
    } catch (e) {
      console.log(e, 'await collectBlockchainInfo did not succeed');
    }
  }

  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch){
  return {
    getWeb3: function (){
      return dispatch(fetchWeb3());
    },
    getContract: function (web3){
      return dispatch(fetchContract(web3));
    },
    getAccounts: function (web3){
      return dispatch(fetchAccounts(web3));
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
