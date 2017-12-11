import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarEvent from './CalendarEvent/calendarEvent.js'
import Email from './Email/email.js'
import MoodManager from './MoodManager/moodManager.js'
import Utility from './Utility/utility.js'
import News from './News/news.js'
import Weather from './Weather/weather.js'
import firebase from 'firebase'
const mtv = 'https://newsapi.org/v2/top-headlines?sources=mtv-news-uk&apiKey=ee3927e291d041e6ba8fd44f4c0516ed'
const gMap = 'https://maps.googleapis.com/maps/api/geocode/json?address=Sydney'



class App extends Component {
  constructor(props){
    super(props)

    const config = {
    apiKey: "AIzaSyB53hZfXHaa2IyUuUyqb-PNzj8ABxfFKgA",
    authDomain: "daesi-711f5.firebaseapp.com",
    databaseURL: "https://daesi-711f5.firebaseio.com",
    projectId: "daesi-711f5",
    storageBucket: "daesi-711f5.appspot.com",
    messagingSenderId: "1001992652226"
    };

    firebase.initializeApp(config);
    this.database = firebase.database()
    this.addDailyMood = this.addDailyMood.bind(this)
    this.getArticles = this.getArticles.bind(this)
  }

  state = {
    dailyMood: '',
    articles: []
  }


  getArticles(source){
    fetch(source)
      .then(response => response.json())
        .then(data => {
          if(data.status !== `OK`) {
            this.setState({
              articles: data.articles
            })
            // console.log(data.articles)
          }
        })
  }

  addDailyMood(dailyMood) {
    // console.log(dailyMood)
    //firebase.database().ref('dailyMoods/' + dailyMood.date).set(dailyMood)

    this.setState({
      dailyMood: dailyMood.mood
    })

  }

  componentDidMount(){
    this.getArticles(mtv)
  }

render() {
  return (
      <div className="row">
        <div className='column'>
          <CalendarEvent />
          <CalendarEvent />
          <CalendarEvent />

          <MoodManager
            addDailyMood={this.addDailyMood}
          />

        </div>

        <div className='column'>
          <Email />
          <Email />
          <Email />
          <Email />
          <Email />
          <Email />
          <Email />

        </div>

      <div className='column'>
        <Weather />

        {this.state.articles.map(article => {
          return(
            <News
            title={article.title}
            author={article.author}
            description={article.description}
          />
          )

        })}
        </div>

      </div>
    )
  }
}

export default App;
