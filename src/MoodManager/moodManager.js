import React, { Component } from 'react'
import './mood-manager.css';

class MoodManager extends Component {
  constructor(props){
    super(props)
    this.handleMood = this.handleMood.bind(this)
    this.dismissMoodManager = this.dismissMoodManager.bind(this)
  }

  state = {
    messages: [{mood: 'happy', message: "Push yourself today"}, {mood: 'ok', message: "Stay positive"}, {mood:'average', message: "You're amazing!"}],
    hasMood: false,
    displayMessage: '',
    dismiss: false
  }

  handleMood = (e) => {
    var mood = {date: new Date(),mood:e.target.id}
    this.props.addDailyMood(mood)
    var messageOptions = this.state.messages.filter(message =>
       message.mood == e.target.id)

    this.setState({
      displayMessage: messageOptions[0].message,
      hasMood: true
    })
  }

  dismissMoodManager() {
    this.setState({
      dismiss: true
    })
    console.log(this.state.dismiss)
  }

  render() {
    if(!this.state.dismiss){
      if(!this.state.hasMood){
        return(
          <div className="wrapper">
            <h4>How are you feeling today? </h4>
              <button class="happy-button" id="happy" onClick={this.handleMood}>&#9986</button>
              <button class="ok-button" id="ok" onClick={this.handleMood}></button>
              <button class="sad-button" id="average" onClick={this.handleMood}></button>
          </div>
        )
    }
    return(
      <div className="wrapper">
      <div className="message"> {this.state.displayMessage}</div>
      <button onClick={this.dismissMoodManager}>Dimiss</button>
      </div>
    )
    }else if(this.state.dismiss){
      return(
        <div> </div>
      )
    }
  }
}
export default MoodManager
