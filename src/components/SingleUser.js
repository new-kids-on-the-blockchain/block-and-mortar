import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toDate } from '../../utils'

class SingleUser extends Component {

  // componentDidMount() {
  //   this.props.handleCurrentUser()
  // }

  render() {
    const { currentUser, services } = this.props
    const pendingSales = currentUser && services && services.filter(service => (service.seller === currentUser.id) && service.status === "Pending")
    const pendingPurchases = currentUser && services && services.filter(service => service.buyer && (service.buyer=== currentUser.id) && service.status === "Pending")

    if (!currentUser) return <div>No user exists at this location</div>

    return (
      <div className="avenir center bg-light-gray pa3 ph5-ns">
        <h1 className="purple">Welcome back, {currentUser.userName}! </h1>
        <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
        <h1>Pending Sales</h1>
        <ul>
          {pendingSales.length ? (
            pendingSales.map(transaction => {
              return (
                <div> key={transaction.id}>
                  <Link to={`/services/${transaction.id}`}>
                    <h2>{transaction.name}</h2>
                  </Link>
                  <p><b>Buyer:</b>{transaction.Buyer.userName}</p>
                  <p><b>Status:</b> {transaction.status}</p>
                  <p><b>Category:</b> {transaction.category}</p>
                  <p><b>Date Posted:</b> {toDate(transaction.createdAt)}</p>
                </div>
              );
            })) : (<p>You have no transactions to fulfill.</p>)}
        </ul>


        <h1>Pending Purchases</h1>
        <ul>
          {pendingPurchases.length ? (
            pendingPurchases.map(transaction => {
              return (
                <div key={transaction.id}>
                  <Link to={`/services/${transaction.id}`}>
                    <h2>{transaction.name}</h2>
                  </Link>
                  <p><b>Seller:</b> {transaction.Seller.userName}</p>
                  <p><b>Status:</b> {transaction.status}</p>
                  <p><b>Category:</b> {transaction.category}</p>
                  <p><b>Date Posted:</b> {toDate(transaction.createdAt)}</p>
                </div>
              );
            })) : (<p>You have no pending purchases.</p>)}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    services: state.services
  }
}

export default withRouter(connect(mapStateToProps, null)(SingleUser))
