import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../store';



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
    console.log(this.props.services)
    return(
      <div>
      <ul>
      {this.props.services && this.props.services.map((service, ind) => {
        return (<li key={ind}>{service.name}</li>)
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
    services: state.services
  }
}

const mapDispatch = { fetchServices }


export default connect(mapState, mapDispatch)(AllServices)
