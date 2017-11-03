import React, { Component } from 'react';
import PinItem from './Pin_item';
import './App.css';

class App extends Component {
  constructor(props){
     super(props);
     this.state = {pins: []};
     this._onResponse = this._onResponse.bind(this);
     this._onJsonReady = this._onJsonReady.bind(this);
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
      return { pin: pin_obj[id],
              id: [id]};
    });
    this.setState({pins: pin_arr});
  }

  render() {
    let pins;
    if (this.state.pins.length > 0){
      pins = this.state.pins.map(function(pin){
        return <PinItem pin={pin.pin} key={pin.id}/>;
      });
    } else {
      pins = <div className = "loading"></div>;
    }

    return (
      <div className="App">
        {pins}
      </div>
    );
  }
}

export default App;
