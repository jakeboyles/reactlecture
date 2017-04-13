import React, { Component } from 'react';
import moment from "moment";


class Day extends Component {
	render(){ 
		return(
			<div key={this.props.data.dt*1000} className="col-md-3 day">
				<h3>{moment(this.props.data.dt*1000).format('dddd')}</h3>
          		<p>High:{this.props.data.temp.max}℉</p>
          		<p>Low:{this.props.data.temp.min}℉</p>
          		<p>{this.props.data.weather[0].main}</p>
         	</div>
        )
	}

 }

 export default Day;
