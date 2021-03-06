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
    window.scroll(0,0)
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
      <div className="home" id="background">
        <div className="avenir center bg-light-gray pa3 ph5-ns" id="topMargin">
          <div>
            <div className="f2 avenir purple">Marketplace</div>
            <div>
              <div className="avenir flex items-center justify-center pa4 bg-teal">
                <p className="avenir lh-title ml3">When you place an order, you'll be charged a small transaction fee ("gas"); however you won't be charged the full amount until you've received the order. <br/><b><em>Please click "Complete Agreement" once your order is fulfilled.</em></b> At that time, the funds will be deducted from your digital wallet.</p>
              </div>
              <div className="pv2 ph2 tc-l">
                <Link to="/services/new">
                  <button className="f4 link dim br-pill mb2 dib white bg-dark-pink inline-flex items-center ma2 pv2 pw4" id="signUpButton">Create a Post</button>
                </Link>
                <button className="f4 link dim br-pill mb2 dib white bg-main-blue inline-flex items-center ma2 pv2 pw4" id="signUpButton" value="All" onClick={this.handleClick}>Show All</button>
                <button className="f4 link dim br-pill mb2 dib white bg-main-blue inline-flex items-center ma2 pv2 pw4" id="signUpButton" value="Goods" onClick={this.handleClick}>Goods</button>
                <button className="f4 link dim br-pill mb2 dib white bg-main-blue inline-flex items-center ma2 pv2 pw4" id="signUpButton" value="Services" onClick={this.handleClick}>Services</button>
              </div>
            </div>
          </div>
          <div className="container all-services">
            {displayedServices && displayedServices.map(service => {
              return (
                <div className="dim list-item service" key={service.id}>
                  <NavLink key={service.id} to={`/services/${service.id}`}>
                    <img alt={service.name} className="thumbnail" src={service.imgUrl} />
                    <div>
                      <div className="f4 b pv2">{service.name}</div>
                      <div>Price: {service.price} ETH</div>
                    </div>
                  </NavLink>
                </div>
              )})
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  const availableServices = state.services.filter(service => service.isAvailable === true)
  return {
    services: availableServices
  }
}

const mapDispatch = { fetchServices }

export default withRouter(connect(mapState, mapDispatch)(AllServices))
