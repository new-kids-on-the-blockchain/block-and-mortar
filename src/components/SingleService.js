import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServices, fetchContract, updateService, updateCompleteService } from '../store'

class SingleService extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleComplete = this.handleComplete.bind(this)

  }
  componentDidMount() {
    this.props.handleFetchServices()
    this.props.handleFetchContract()
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
    this.props.contract.completeAgreement(this.props.singleService.contractId, { from: this.props.accounts[0] })
      .then(agreementCompleted => { console.log(agreementCompleted, "COMPLETE AGREEMENT") })
      .then(() => this.props.handleCompleteService(evt, this.props.singleService))
      .catch(err => console.log('agreementCompleted failed....'))
  }

  //.logs[0].args.id.toString()
  render() {
    const service = this.props.singleService
    const currentUser = this.props.currentUser
    if (!service) return <div>No service exists at this location</div>

    return (
      <div>
        <h1>{service.name} </h1>
        <h4><b>Description:</b> {service.description} </h4>
        <h4><b>Category:</b> {service.category} </h4>
        <h4><b>Price:</b> {service.price} Ether</h4>
        <h4><b>Date created:</b> {service.createdAt}</h4>
        <Link to={`/users/${service.Seller.id}`}>
          <h4><b>Offered By:</b> {service.Seller.userName}</h4>
        </Link>
        <Link to="/services"><button>Back to Services</button></Link>

        {service.isAvailable && currentUser.id !== service.Seller.id ? <button onClick={this.handleClick}>Purchase</button> : <div />}
        {!service.isAvailable && service.status === "Pending" && currentUser.id !== service.Seller.id ? <button onClick={this.handleComplete}>Complete Agreement</button> : <div />}



        {!service.isAvailable && service.status === "Completed" ?
          <h3>Congrats, transaction completed! Your blockchain contract ID is: {this.props.singleService.contractId}</h3>
          : <div />}

      </div>
    )
  }

}

const mapStateToProps = ({ services, users, contract, accounts, currentUser }, ownProps) => ({
  singleService: services.find(
    service => +service.id === +ownProps.match.params.id
  ),
  contract,
  users,
  accounts,
  currentUser
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
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))
