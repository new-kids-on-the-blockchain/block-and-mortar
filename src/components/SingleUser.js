import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { fetchCurrentUser } from '../store'

class SingleUser extends Component {

  // componentDidMount() {
  //   this.props.handleCurrentUser()
  // }

  render() {
    console.log("SINGLE USER!!", this.props.currentUser)
    const user = this.props.currentUser
    const boughtServices = this.props.currentUser.Buyer || []
    const soldServices = this.props.currentUser.Seller || []
    console.log("user is: ", user)
    if (!user) return <div>No user exists at this location</div>
    return (
      <div>
        <h1>Hi!!! {user.userName} </h1>
        <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
        <h4>Services Bought</h4>
        <h4>Services Sold</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'CURRENT USER STATE')
  return {
    currentUser: state.currentUser
}}

export default withRouter(connect(mapStateToProps, null)(SingleUser))
