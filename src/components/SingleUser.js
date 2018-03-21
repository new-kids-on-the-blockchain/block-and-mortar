import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { fetchCurrentUser } from '../store'

class SingleUser extends Component {

  // componentDidMount() {
  //   this.props.handleCurrentUser()
  // }

  render() {
    const user = this.props.currentUser
    const boughtServices = this.props.currentUser.Buyer || []
    const soldServices = this.props.currentUser.Seller || []
    console.log("user is: ", user)
    if (!user) return <div>No user exists at this location</div>
    return (
      <div>
        <h1>{user.name} </h1>
        <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
        <h4>Services Bought</h4>
        <h4>Services Sold</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default withRouter(connect(mapStateToProps, null)(SingleUser))
