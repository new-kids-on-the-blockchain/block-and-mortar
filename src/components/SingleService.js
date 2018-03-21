import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServices, fetchContract } from '../store'

class SingleService extends Component {
  componentDidMount() {
    this.props.handleFetchServices()
    this.props.handleFetchContract()
  }

  handleClick(evt){
    evt.preventDefault()
    const updatedAgreement = this.props.contract.updateAgreement(/*get id*/)

  }

  render() {
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
        { service.isAvailable ? <button>Purchase</button> : <button>Complete Agreement</button> }
      </div>
    )
  }

}

const mapStateToProps = ({ services, users, contract }, ownProps) => ({
  singleService: services.find(
    service => +service.id === +ownProps.match.params.id
  ),
  contract,
  users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchServices() {
    dispatch(fetchServices())
  },
  handleFetchContract(){
    dispatch(fetchContract())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))
