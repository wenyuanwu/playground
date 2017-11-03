import React, {Component} from "react";
import "./HelloWorld.css";

class HelloWorld extends Component{
	constructor(props){
		super(props);
		this.state = {greeting: "Hello"};
	}

	render(){
		const {key_name, name} = this.props;
		return(
			<div id="wrapper">
				<div className="HelloWorld" key={key_name}> {this.state.greeting} {name}</div>
				<button>Frechify</button>
			</div>
		);
	}
}

export default HelloWorld;
