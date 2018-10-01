import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {Router,Route,browserHistory} from 'react-router';

import Home from './components/home/home';
import Pricing from './components/pricing/pricing';
import Features from './components/features/features';


class App extends Component {
  render() {
    return (
		<div>
			<Header />
			<div className="middle-content">
				<Router history={browserHistory}>
					<Route path={"/"} component={Home}>
						<Route path={"features"} component={Features} />
						<Route path={"pricing"} component={Pricing} />
					</Route>
				</Router>
			</div>
			<Footer />
		</div>
    );
  }
}

export default App;
