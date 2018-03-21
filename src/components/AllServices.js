import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../store'
import { NavLink, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

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

  handleClick() {
    this.setState({selectedCategory: event.target.value})
  }

  render() {
    const {services} = this.props
    console.log(this.state, 'this.state')
    if (!services) return <div>Available services in your community loading....</div>
    else return (
      <div>
        <div>
          <h1>Available Services in Your Community </h1>
          <Link to="/services/new"> <button className="btn btn-info new">Add a Service</button></Link>
          <div>
            <button class="btn active" value="All" onclick={this.handleClick}>Show All</button>
            <button class="btn" value="Goods" onclick={this.handleClick}>Goods</button>
            <button class="btn" value="Services" onclick={this.handleClick}>Services</button>
          </div>
        </div>
        <div className="container all-services">
            {services && services.map(service => {
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
const mapState = (state) => {
  const availableServices = state.services.filter(service => service.isAvailable === true)
  return {
    services: availableServices
  }
}

const mapDispatch = { fetchServices }

export default withRouter(connect(mapState, mapDispatch)(AllServices));
