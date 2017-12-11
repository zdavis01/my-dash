import React, { Component } from 'react';
import './calendar-event.css';

class CalendarEvent extends Component {
  constructor(props){
    super(props)
  }

  state = {
    date: {day: 7, month: 'Jan', year: 2018 },
    time:'9pm',
    title: 'Catch up with Ash',
    location: 'ThoughtWorks Office, 8/51 Pitt Street',
    coOrdinator: 'Ash Rolke'
  }

  render(){
    return(

        <div className="calendarCell">
         <div className="time">
            {this.state.time}
          </div>
          <div className="location">
            {this.state.location}
          </div>
          <div className="coOrdinator">
            {this.state.coOrdinator}
          </div>
        </div>


    )
  }
}

export default CalendarEvent
