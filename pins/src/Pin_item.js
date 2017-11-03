import React, { Component } from 'react';
import "./Pin_item.css";

class PinItem extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const {pin} = this.props
		return(
			<div className="PinItem">
				<img src={pin.url} alt=""></img>
			</div>
		);

	}
}

export default PinItem;