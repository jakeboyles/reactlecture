import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data:[],
    }
  }


  componentDidMount(){
    axios.post('https://trumpdonald.herokuapp.com/search',{search:'obama'})
    .then((response)=> {

      this.setState({
        data: response.data._embedded.quotes,
      })

      console.log(this.state.data);
    });
  }


  render() {
    return (
      <div className="App">
        <h3>Donald Trump</h3>
        <p className="App-intro">
          {this.state.data.map(res=>{
            return (

              <div className="quote">
                <span>He said "{res.value}"</span>
              </div>

            )
          })}
        </p>
      </div>
    );
  }
}

export default App;
