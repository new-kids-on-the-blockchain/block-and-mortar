import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class SingleUser extends Component {

  // componentDidMount() {
  //   this.props.handleCurrentUser()
  // }

  render() {
    const { currentUser, services } = this.props
    const pendingSales = currentUser && services && services.filter(service => (service.seller === currentUser.id) && service.status === "Pending")
    const pendingPurchases = currentUser && services && services.filter(service => service.buyer && (service.buyer=== currentUser.id) && service.status === "Pending")

    console.log(pendingPurchases, "PENDING PURCHASESS")
    console.log(pendingSales, 'pendingSales')

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
                <li key={transaction.id}>
                  <Link to={`/services/${transaction.id}`}>
                    <h2>{transaction.name}</h2>
                  </Link>
                  <h3>Buyer: {transaction.Buyer.userName}</h3>
                  <p>Status: {transaction.status}</p>
                  <p>Category: {transaction.category}</p>
                </li>
              );
            })) : (<p>You have no transactions to fulfill.</p>)}
        </ul>


        <h1>Pending Purchases</h1>
        <ul>
          {pendingPurchases.length ? (
            pendingPurchases.map(transaction => {
              return (
                <li key={transaction.id}>
                  <Link to={`/services/${transaction.id}`}>
                    <h2>{transaction.name}</h2>
                  </Link>
                  <h3>Buyer: {transaction.Buyer.userName}</h3>
                  <p>Status: {transaction.status}</p>
                  <p>Category: {transaction.category}</p>
                </li>
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
