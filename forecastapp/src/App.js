import React, { Component } from 'react'

import Forecast from './components/Forecast'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
      
    };
  }
  


  componentDidMount(){
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=settle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "7f73f00c1amsh5074cb00132f0edp1ced7cjsnaa23442f5801"
      }
    })
    .then(response =>response.json())
      .then(response=>{
     this.setState({response:this.state.data})
      })
        .catch(err => {
          console.log(err);
        });
      }
       

  render(){
     console.log(this.state)
  return(
  <div className="App">
    <header className="App-header">
     <h1>React weather App</h1>
    </header>
 
  <main>
    <Forecast />
  </main>
  </div>
  )
  }
}
  
  
  




