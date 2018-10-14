import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/">ReactJS</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link href="/features" className="nav-link" activeStyle={{color:"red"}} >Features</Link>
							</li>
							<li className="nav-item">
								<Link href="/pricing" className="nav-link" >Pricing</Link>
							</li>
							<li className="nav-item">
								<Link href="/redux" className="nav-link" >Redux</Link>
							</li>
							<li className="nav-item">
								<Link href="/forms" className="nav-link" >Forms</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
