import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../store';
import { NavLink } from 'react-router-dom';



class AllServices extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    console.log('All services rendering')
    this.props.fetchServices();
  }

  render(){

    const {services} = this.props
    return(
      <div>
      <ul>
      {services && services.map((service, ind) => {
        return (
          <NavLink to={`/services/${service.id}`}>
          <li key={ind}>{service.name}</li>
          </NavLink>
        )
      })}
     </ul>
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
