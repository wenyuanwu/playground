import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Slider.css";

class Slider extends Component{

	render(){
		return(
			<div>
				<Link to="/">
				<button> Return </button>	
				</Link>
			</div>
		);
	}
}

export default Slider;