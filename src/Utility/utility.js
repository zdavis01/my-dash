import React, { Component } from 'react'
import './utility.css';

class Utility extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="social-container"></div>
        <div className="weather-container"></div>
      </div>

    )
  }
}

export default Utility
