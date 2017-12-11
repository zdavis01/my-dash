import React, { Component } from 'react'
import './email.css';

class Email extends Component {
  constructor(props){
    super(props)
  }

state = {
  sender: {firstName: 'Michael', lastName: 'Spencer', adress: 'mSpen@gmail.com' },
  subject: 'Help with setting up client meeting',
  date: {day: 3, month: 6, year: 2018},
  time: '3pm'
}
  render(){
    return(

       <div className="email">
         <div className="sender">
           {this.state.sender.firstName} {this.state.sender.lastName}
         </div>
         <div className="time">
           {this.state.time}
         </div>
         <div className="subject">{this.state.subject} </div>
       </div>

    )
  }
}

export default Email
