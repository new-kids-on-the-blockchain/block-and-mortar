import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServices, fetchContract, updateService } from '../store'

class SingleService extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.handleFetchServices()
    this.props.handleFetchContract()
  }

  handleClick(evt) {
    evt.preventDefault()
    this.props.contract.updateAgreement(this.props.singleService.contractId, {from: this.props.accounts[0] })
    .then(agreementUpdated => {console.log(agreementUpdated.logs[0].args.id.toString(), "AGREEMENT ID")})
    .then(() => this.props.handleUpdateService(evt, this.props.singleService))
    .catch(err => console.log('UpdateAgreement failed....'))
  }

  //.logs[0].args.id.toString()
  render() {
    console.log(this.props.singleService, "LOOK HERE!!!!!!! :D")
    const service = this.props.singleService
    if (!service) return <div>No service exists at this location</div>
    return (
      <div>
        <h1>{service.name} </h1>
        <h4>Description: {service.description} </h4>
        <h4>Category: {service.category} </h4>
        <h4>Date created: {service.createdAt}</h4>
        <Link to={`/users/${service.Seller.id}`}>
          <h4>Offered By: {service.Seller.userName}</h4>
        </Link>
        <Link to="/services"><button>Back to Services</button></Link>
        {service.isAvailable ? <button onClick={this.handleClick}>Purchase</button> : <button>Complete Agreement</button>}
      </div>
    )
  }

}

const mapStateToProps = ({ services, users, contract, accounts }, ownProps) => ({
  singleService: services.find(
    service => +service.id === +ownProps.match.params.id
  ),
  contract,
  users,
  accounts
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchServices() {
    dispatch(fetchServices())
  },
  handleFetchContract() {
    dispatch(fetchContract())
  },
  handleUpdateService(evt, service) {
    evt.preventDefault()
    service.isAvailable = false;
    service.status = "Pending";
    service.BuyerId = 2; //DON"T HARDCODE LATER
    dispatch(updateService(service, ownProps))
  }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))
