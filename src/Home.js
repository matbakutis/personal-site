import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import './Home.css';

class HomeComponent extends Component {
	render() {
		return (
			<div className="page">
				<div className="homeName">
					<div>Mat Bakutis</div>
				</div>
				<div className="homeLegend">
					<h2>The Man.</h2>
					<h2>The Myth.</h2>
					<h2>The Legend.</h2>
				</div>
			</div>
		)
	}
}


const Home = AnimatedWrapper(HomeComponent);
export default Home;