import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchWeb3, fetchServiceById, fetchServices, fetchAccounts, fetchContract, updateService, updateCompleteService } from '../store'

class SingleService extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }
  componentDidMount() {
    this.props.handleFetchServices()
    this.props.handleFetchContract()
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

  handleClick(evt) {
    evt.preventDefault()
    this.props.contract.updateAgreement(this.props.singleService.contractId, { from: this.props.accounts[0] })
      .then(agreementUpdated => { console.log(agreementUpdated, "AGREEMENT UPDATED") })
      .then(() => this.props.handleUpdateService(evt, this.props.singleService, this.props.currentUser.id))
      .catch(err => console.log('agreementUpdated failed....'))
  }

  handleComplete(evt) {
    evt.preventDefault()
    this.props.contract.completeAgreement(this.props.singleService.contractId, { from: this.props.accounts[0], value: this.props.web3.toWei(this.props.singleService.price, 'ether')})
      .then(agreementCompleted => { console.log(agreementCompleted, "COMPLETE AGREEMENT") })
      .then(() => this.props.handleCompleteService(evt, this.props.singleService))
      .catch(err => console.log('agreementCompleted failed....'))
  }

  handleClose(evt) {
    this.props.handleCloseService(evt, this.props.singleService)
      .catch(err => console.log(err))

  }

  //.logs[0].args.id.toString()
  render() {
    const service = this.props.singleService
    const currentUser = this.props.currentUser
    if (!service) return <div className="avenir dark-red"><h2>Oh no! No service exists at this address.</h2></div>
    return (
      this.props.singleService &&
      <div className="avenir center bg-light-gray pa3 ph5-ns">
        <h1 className="purple">{service.name} </h1>
        <img src={service.imgUrl} />
        <p><b>Description:</b> {service.description} </p>
        <p><b>Category:</b> {service.category} </p>
        <p><b>Price:</b> {service.price} Ether</p>
        <p><b>Date created:</b> {service.createdAt}</p>
        <Link to={`/users/${service.seller}`}>
          <p><b>Offered By:</b> {service.Seller.userName}</p>
        </Link>
        <Link to="/services"><button>Back to Services</button></Link>

        {service.isAvailable && currentUser.id !== service.Seller.id ? <button onClick={this.handleClick}>Purchase</button> : <div />}
        {service.isAvailable && currentUser.id === service.Seller.id ? <button onClick={this.handleClose}>Close Service</button> : <div />}
        {!service.isAvailable && service.status === "Posted" && currentUser.id === service.Seller.id ? <h3>You have closed this service.</h3> : <div />}

        {!service.isAvailable && service.status === "Pending" && (currentUser.id === service.Seller.id) ? <h3>Transaction in progress. {service.Buyer.userName} has purchased this service.</h3> : <div />}

        {!service.isAvailable && service.status === "Pending" && currentUser.id === service.Buyer.id ? <div><button onClick={this.handleComplete}>Complete Agreement</button> <h3>Transaction in progress. Click "Complete Agreement" when you have received your goods or services.</h3> </div> : <div />}

        {!service.isAvailable && (service.status === "Pending" || service.status === "Completed") && currentUser.id !== service.Seller.id && currentUser.id !== service.Buyer.id ? <h3>Service no longer available.</h3> : <div />}

        {!service.isAvailable && service.status === "Completed" && (currentUser.id === service.Seller.id || currentUser.id === service.Buyer.id) ?
          <h3>Congrats, transaction completed! Your blockchain contract ID is: {this.props.singleService.contractId}</h3>
          : <div />}

      </div>
    )
  }

}

const mapStateToProps = ({ web3, services, users, contract, accounts, currentUser }, ownProps) => ({
  singleService: services.find(
    service => +service.id === +ownProps.match.params.id
  ),
  contract,
  users,
  accounts,
  currentUser,
  web3
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchServices() {
    dispatch(fetchServices())
  },
  handleFetchContract() {
    dispatch(fetchContract())
  },
  handleUpdateService(evt, service, userId) {
    evt.preventDefault()
    service.isAvailable = false;
    service.status = "Pending";
    service.buyer = userId;
    dispatch(updateService(service, ownProps))
  },
  handleCompleteService(evt, service) {
    evt.preventDefault()
    service.status = "Completed";
    dispatch(updateCompleteService(service, ownProps))
  },
  fetchWeb3: function () {
    return dispatch(fetchWeb3());
  },
  fetchAccounts: function (web3) {
    return dispatch(fetchAccounts(web3));
  },
  handleCloseService(evt, service) {
    evt.preventDefault()
    console.log("IN HANDLE CLOSE", service)
    service.isAvailable = false;
    dispatch(updateService(service, ownProps))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))
