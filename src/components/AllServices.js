import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../store'
import { NavLink, Link, withRouter } from 'react-router-dom'

class AllServices extends Component {

  constructor() {
    super();
    this.state = {
      selectedCategory: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchServices();
  }

  handleClick(event) {
    this.setState({selectedCategory: event.target.value})
  }

  render() {
    const {services} = this.props;
    let displayedServices;
    if (!this.state.selectedCategory || this.state.selectedCategory === "All") {
      displayedServices = services
    } else {
      displayedServices = services.filter(service => service.category === this.state.selectedCategory)
    }

    if (!services) return <div>Loading the Marketplace...</div>
    else return (
      <div className="avenir center bg-light-gray pa3 ph5-ns">
        <div>
          <h1 className="avenir purple">Marketplace</h1>
          <div>
          <div className="avenir flex items-center justify-center pa4 bg-lightest-blue navy">
          <p className="avenir lh-title ml3">When you place an order, you'll be charged a small transaction fee ("gas"); however you won't be charged the full amount until you've received the order. <br/><b><em>Please click "Complete Agreement" once your order is fulfilled.</em></b> At that time, the funds will be deducted from your digital wallet.</p>
          </div>
          <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
            <button className="btn active" value="All" onClick={this.handleClick}>Show All</button>
            <button className="btn" value="Goods" onClick={this.handleClick}>Goods</button>
            <button className="btn" value="Services" onClick={this.handleClick}>Services</button>
          </div>
        </div>
        <div className="container all-services">
            {displayedServices && displayedServices.map(service => {
              return (
                <div className="list-item service" key={service.id}>
                <NavLink key={service.id} to={`/services/${service.id}`}>
                  <img className="thumbnail" src={service.imgUrl} />
                  <div>
                    <div>Name: {service.name}</div>
                    <div>Price: {service.price} ether</div>
                    <div>Category: {service.category}</div>
                  </div>
                </NavLink>
                </div>
                  )
            })
          }
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  const availableServices = state.services.filter(service => service.isAvailable === true)
  return {
    services: availableServices
  }
}

const mapDispatch = { fetchServices }

export default withRouter(connect(mapState, mapDispatch)(AllServices))
