import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import "./HelloWorldList.css";

class HelloWorldList extends Component{
	constructor(props){
		super(props);
		this.state = { greetings: ["A1", "A2"]};
	}

	render(){
		var greetings = this.state.greetings.map(name => (
    		<HelloWorld key_name={name} name={name}/>

  		));

		return(
		<div className="HelloWordList">
			{greetings}
		</div>
		);
	}
}

export default HelloWorldList;