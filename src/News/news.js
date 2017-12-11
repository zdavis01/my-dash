import React, { Component } from 'react'
import './news.css';

class News extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
       <div className="news">
         <div className="title"> {this.props.title}</div><br/>
         <div className="description"> {this.props.description} </div> <br/>
         <div className="author"> {this.props.author} </div>

       </div>
      </div>

    )
  }
}

export default News
