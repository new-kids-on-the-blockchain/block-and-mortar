import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServices, fetchUsers } from '../store'

class SingleService extends Component {
  componentDidMount() {
    this.props.handleFetchServices()
  }
  render() {
    const service = this.props.singleService
    const users = this.props.users
    if (!service) return <div />
    console.log(users, "USERS!!!!")
    return (
      <div>

        <h1>{service.name} </h1>
        <h4>Description: {service.description} </h4>
        <h4>Category: {service.category} </h4>
        <h4>Date created: {service.createdAt}</h4>
        <h4>Offered By: {service.user.userName}</h4>
        <Link to="/services"><button>Back to Services</button></Link>
        <button>Purchase</button>

      </div>

    )
  }

}

const mapStateToProps = ({ services, users }, ownProps) => ({
  singleService: services.find(
    service => +service.id === +ownProps.match.params.id
  ),
  users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchServices() {
    dispatch(fetchServices())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))