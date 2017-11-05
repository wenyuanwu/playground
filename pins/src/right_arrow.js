import React, {Component} from "react";

class RightArrow extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let {updateCounter} = this.props; 
		return(
			<button onClick={updateCounter}>Next Img</button>
		);
	}
}

export default RightArrow;