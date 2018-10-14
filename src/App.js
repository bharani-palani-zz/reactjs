import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Router, Route, browserHistory } from 'react-router';

import Pricing from './components/pricing/pricing';
import Features from './components/features/features';
import ReduxHome from './components/reduxtuts/reduxhome';
import FormTuts from './components/formtuts/formtuts';

import { Provider } from 'react-redux';
import store from './components/reduxtuts/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header />
					<div className="middle-content">
						<Router history={browserHistory}>
							<Route path={"features"} component={Features} />
							<Route path={"pricing"} component={Pricing} />
							<Route path={"redux"} component={ReduxHome} />
							<Route path={"forms"} component={FormTuts} />
						</Router>
					</div>
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
