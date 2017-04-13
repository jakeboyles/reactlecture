import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Day from './Day';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      weather:[],
      value: '',
    }
  }

  componentDidMount(){
    this.getWeather('cincinnati',1);
  }

  getNewWeather(e){
    e.preventDefault();
    this.getWeather(this.state.value,10);
  }

  getWeather(city, number){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=${number}&APPID=b52a2c029fff494c5032a2860ad870f2`)
    .then((response)=> {
      this.setState({
        weather: response.data.list,
      })
    });
  }

  changedInput(e){
    this.setState({
      value:e.target.value,
    })
  }


  render() {

    const weather = this.state.weather.map(day=>{
       return (
         <Day key={day.dt} data={day} />
       )
    })

    return (
      <div className="App container">
        <h3>Weather</h3>

        <form onSubmit={this.getNewWeather.bind(this)}>
          <input className="form-control" onChange={this.changedInput.bind(this)} type="text" placeholder="Enter City" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className="row">
          {weather}
        </div>

      </div>
        
    );
  }
}

export default App;
