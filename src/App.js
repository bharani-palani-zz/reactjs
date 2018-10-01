import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
		<div>
			<Header />
			<div class="middle-content">
				<p>
					poda dai!
				</p>
			</div>
			<Footer />
		</div>
    );
  }
}

export default App;
