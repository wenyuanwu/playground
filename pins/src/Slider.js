import {Link} from "react-router-dom";
import React, {Component} from "react";
import RightArrow from "./right_arrow";
import "./Slider.css";

class Slider extends Component{
	constructor(props){
		super(props);
		this.state = {counter: 0,
					  pins: []};
		this._onResponse = this._onResponse.bind(this);
    	this._onJsonReady = this._onJsonReady.bind(this);
    	this.updateCounter = this.updateCounter.bind(this);
	}

	componentDidMount(){
    this.AlbumList("Maria Carey");
  	}

  	AlbumList(name){
    // const SPOTIFY_PATH = "https://api.spotify.com/v1/search?type=artist&q=";
    // const artist_name = encodeURIComponent(name);
    fetch("https://yayinternet.github.io/lecture17/oo-albums/albums.json")
      .then(this._onResponse)
      .then(this._onJsonReady);
  }

  _onResponse(response){
    return response.json();
  }

  _onJsonReady(json){
    if(!json.albums){
      return;
    }
    const pin_obj = json.albums;
    const pin_arr = Object.keys(pin_obj).map(function(id){
      return pin_obj[id];});
    this.setState({pins: pin_arr});
  }

  updateCounter(){
  	this.setState({counter: this.state.counter + 1});
  }
	render(){
		let img;
		if (this.state.pins.length > 1){
			let num = this.state.counter % (this.state.pins.length);
			let pin_obj = this.state.pins[num];
			let url = pin_obj.url;
			img = <img src={url}/>;
		} else{
			img = <div/>;
		}

		return(
			<div>
				<Link to="/">
				<button> Return </button>	
				</Link>
				<RightArrow updateCounter={this.updateCounter}/>
				{img}
			</div>
		);
	}
}

export default Slider;