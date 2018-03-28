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
    const pendingPurchases = currentUser && services && services.filter(service => service.buyer && (service.buyer === currentUser.id) && service.status === "Pending")

    const completedSales = currentUser && services && services.filter(service => (service.seller === currentUser.id) && service.status === "Completed")
    const completedPurchases = currentUser && services && services.filter(service => service.buyer && (service.buyer === currentUser.id) && service.status === "Completed")

    if (!currentUser) return <div>No user exists at this location</div>

    return (
      <div className="home" id="background">
      <div className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns" id="topMargin">
        <div className="f2">Welcome back, {currentUser.userName}!</div>
        <div className="pv2 ph2 tc-l">
          <Link to="/services/new">
            <button className="f4 link dim br-pill mb2 dib white bg-dark-pink inline-flex items-center ma2 pv2 pw4">Create a Post</button>
          </Link>
        </div>

        <div className="containerInner bt">
          <div className="f3">Pending Sales</div>
          <ul>
            {pendingSales.length ? (
              pendingSales.map(transaction => {
                return (
                  <div key={transaction.id}>
                    <Link to={`/services/${transaction.id}`}>
                      <div className="f4 b dim">{transaction.name}</div>
                    </Link>
                    <p><b>Buyer:</b> {transaction.Buyer.userName}</p>
                    <p><b>Status:</b> {transaction.status}</p>
                    <p><b>Category:</b> {transaction.category}</p>
                    <p><b>Date Posted:</b> {toDate(transaction.createdAt)}</p>
                  </div>
                );
              })) : (<p>You have no transactions to fulfill.</p>)}
          </ul>
        </div>

        <div className="containerInner bt">
          <div className="f3">Pending Purchases</div>
          <ul>
            {pendingPurchases.length ? (
              pendingPurchases.map(transaction => {
                return (
                  <div key={transaction.id}>
                    <Link to={`/services/${transaction.id}`}>
                      <div className="f4 b dim">{transaction.name}</div>
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

        <div className="containerInner bt">
          <div className="f3">Completed Sales</div>
          <ul>
            {completedSales.length ? (
              completedSales.map(transaction => {
                return (
                  <div key={transaction.id}>
                    <Link to={`/services/${transaction.id}`}>
                      <div className="f4 b dim">{transaction.name}</div>
                    </Link>
                    <p><b>Buyer:</b> {transaction.Buyer.userName}</p>
                    <p><b>Status:</b> {transaction.status}</p>
                    <p><b>Category:</b> {transaction.category}</p>
                    <p><b>Date Completed:</b> {toDate(transaction.updatedAt)}</p>
                  </div>
                );
              })) : (<p>You have no completed sales.</p>)}
          </ul>
        </div>

        <div className="containerInner bt">
          <div className="f3">Completed Purchases</div>
          <ul className="purchase">
            {completedPurchases.length ? (
              completedPurchases.map(transaction => {
                return (
                  <div key={transaction.id}>
                    <Link to={`/services/${transaction.id}`}>
                      <div className="f4 b dim">{transaction.name}</div>
                    </Link>
                    <p><b>Seller:</b> {transaction.Seller.userName}</p>
                    <p><b>Status:</b> {transaction.status}</p>
                    <p><b>Category:</b> {transaction.category}</p>
                    <p><b>Date Completed:</b> {toDate(transaction.updatedAt)}</p>
                  </div>
                );
              })) : (<p>You have no completed purchases.</p>)}
          </ul>
        </div>
      </div>
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
