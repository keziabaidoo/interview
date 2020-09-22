import React, { Component, useState } from 'react'

  
export default class Forecast extends Component  {
    constructor(props){
        super(props);
        this.state={
            date:[]
        
    };
}
     getForecast =()=> {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=settle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "7f73f00c1amsh5074cb00132f0edp1ced7cjsnaa23442f5801"
            }
        })
        
   

        .then(response => response.json())
        .then(response =>{
        this.setState({data:response});
        console.log(response)
            
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
    return (
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(this.state.data)}
           </div>
           <button onClick={this.getForecast}>Get Forecast</button>
       </div>

    )
}
}










