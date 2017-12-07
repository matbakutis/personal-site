import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import './Home.css';
import TextLoop from 'react-text-loop';

class HomeComponent extends Component {
	render() {
		return (
			<div className="page">
				<div className="homeName">
					<div>Mat Bakutis</div>
				</div>
				<div className="homeLegend">
						<TextLoop>
							<span>A web developer.</span>
							<span>An adventurer.</span>
							<span>An engineer.</span>
							<span>A lithuanian.</span>
							<span>A biscuit-handler.</span>
							<span>A rock climber.</span>
							<span>A tech junkie.</span>
							<span>An optimist.</span>
							<span>A human.</span>
							<span>A front-end wizard.</span>
							<span>A back-end enthusiast.</span>
							<span>A designer.</span>
							<span>A problem solver.</span>
							<span>A quick learner.</span>
							<span>A front-end wizard.</span>
							<span>An analyst.</span>
						</TextLoop>
				</div>
			</div>
		)
	}
}


const Home = AnimatedWrapper(HomeComponent);
export default Home;