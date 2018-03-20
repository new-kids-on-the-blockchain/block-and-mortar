import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServices, fetchContract } from '../store'

class SingleService extends Component {
  componentDidMount() {
    this.props.handleFetchServices()
    this.props.handleFetchContract()
  }

  render() {
    const user = this.props.singleUser
    const services = this.props.services
    console.log("user is: ", user)
    if (!user) return <div>No user exists at this location</div>
    return (
      <div>
        <h1>{user.name} </h1>
        <h4>Description: THINGS </h4>
        <Link to="/services"><button>Back to Services</button></Link>
      </div>
    )
  }
}

const mapStateToProps = ({ services, users, contract }, ownProps) => ({
  singleUser: users.find(
    user => +user.id === +ownProps.match.params.id
  ),
  contract,
  services
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFetchServices() {
    dispatch(fetchServices())
  },
  handleFetchContract() {
    dispatch(fetchContract())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleService))
