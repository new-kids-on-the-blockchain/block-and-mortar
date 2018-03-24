import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class SingleUser extends Component {

  // componentDidMount() {
  //   this.props.handleCurrentUser()
  // }

  render() {
    const {currentUser, services} = this.props
    const pendingSoldTransactions = services && services.filter(service => service.Seller.id === currentUser.id && service.status === "Pending")
    const pendingPurchases = services && services.filter(services => services.Buyer.id === currentUser.id && services.status === "Pending")
    // const boughtServices = this.props.currentUser.Buyer || []
    // const soldServices = this.props.currentUser.Seller || []

    if (!currentUser) return <div>No user exists at this location</div>

    return (
      <div>
        <h1>Welcome back, {currentUser.userName}! </h1>
        <h1>Transactions to Fulfill:</h1>
        <ul>
          {pendingSoldTransactions.length ? (
            pendingSoldTransactions.map(transaction => {
              return (
                <li key={transaction.id}>
                  <Link to={`/services/${transaction.id}`}>
                    <h2>{transaction.name}</h2>
                  </Link>
                  <h3>Buyer: {transaction.Buyer.userName}</h3>
                  <p>Category: {transaction.category}</p>
                </li>
              );
            })) : (<h4>You have no transactions to fulfill.</h4>)}
        </ul>

        <h1>Your Pending Purchases:</h1>
        <ul>
          {pendingPurchases.length ? (
            pendingPurchases.map(transactions => {
              return (
                <li key={transactions.id}>
                  <Link to={`/services/${transactions.id}`}>
                    <h2>{transactions.name}</h2>
                  </Link>
                  <h3>Seller: {transactions.Seller.userName}</h3>
                  <p>Category: {transactions.category}</p>
                </li>
              );
            })) : (<h4>You have no pending purchases. <Link to="/services">Go make some!</Link></h4>)}
        </ul>

        <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    services: state.services
}}

export default withRouter(connect(mapStateToProps, null)(SingleUser))
