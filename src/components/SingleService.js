import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServiceById } from '../store';
import { NavLink } from 'react-router-dom';



class SingleService extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    console.log('Single service rendering', this.props.match.params.id)
    this.props.fetchServiceById(this.props.match.params.id);
  }

  render(){
    console.log(this.props.services)
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
  return {
    service: state.service
  }
}

const mapDispatch = { fetchServiceById }


export default connect(mapState, mapDispatch)(SingleService)
