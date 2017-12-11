import React, { Component } from 'react'
import './weather.css';
const sydney = 'https://maps.googleapis.com/maps/api/geocode/json?address=Sydney'


class Weather extends Component {
  constructor(props){
    super(props)
  }

  state = {
    lat: '',
    lng:'',
    currentWeather:{},
    loading: true
  }

  getTemp(lat,lng) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=72af66db614bf9fd03583352142dd7a7`)
    .then(response => response.json())
    .then(data => {

      this.setState({
        lat: lat,
        lng: lng,
        currentWeather: data,
        loading:false
      }, console.log(data))
    })
}

  getlatlng(city) {

  return fetch(city)
    .then(response => response.json())
    .then(data => {
    if(data.status !== `OK`) {

      throw new Error(`Did not get lat long`)
    } else {
      var lat = data.results[0].geometry.location.lat
      var lng = data.results[0].geometry.location.lng
      this.getTemp(lat,lng)

    }
  })
}

componentDidMount() {
  this.getlatlng(sydney)

  }

  render() {
    if (!this.state.loading) {
      return(
        <div className="container">
          <div>For {this.state.currentWeather.name} </div>
          <div> Current Temp: {parseInt(this.state.currentWeather.main.temp - 273.15)} C</div>
          <div> High: {parseInt(this.state.currentWeather.main.temp_max - 273.15)} C</div>
          <div> Low: {parseInt(this.state.currentWeather.main.temp_min - 273.15)} C</div>
          <div> Forecast: {this.state.currentWeather.weather[0].description} </div>
        </div>
      )
    }else{
      return(
        <div> Loading </div>
      )
    }

  }


}

export default Weather
