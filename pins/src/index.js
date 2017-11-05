import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Slider from './Slider';
import './index.css';

const Root = () => (
	<HashRouter>
		<div>
			<Route exact path="/" component = {App}/>
			<Route path="/sliders" component = {Slider}/>
		</div>
	</HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
