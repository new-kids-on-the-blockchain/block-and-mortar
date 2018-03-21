import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../store'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

class AllServices extends Component {

  componentDidMount(){
    this.props.fetchServices();
  }

  render() {
    const {services} = this.props
    return (
      <div>
      <h1>All Available Services in Your Community </h1>
      <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
      <div className="container all-services">
      {services && services.map((service) => {
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
      })}
     </div>
     </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  const availableServices = state.services.filter(service => service.isAvailable === true)
  return {
    services: availableServices
  }
}

const mapDispatch = { fetchServices }

export default connect(mapState, mapDispatch)(AllServices)
