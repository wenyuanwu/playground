import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Pin_item.css";

class PinItem extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const {pin} = this.props;
		return(
			<div className="PinItem">
				<Link to="/sliders">
				<img src={pin.url} alt="" ></img>
				</Link>
			</div>
		);

	}
}

export default PinItem;