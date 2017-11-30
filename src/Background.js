import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";


class AboutComponent extends Component {
	render(){
		return (
			<div className="page">
				<h1>Background</h1>
				<p>Hello from the background page!</p>
			</div>
		)
	}
}

const About = AnimatedWrapper(AboutComponent);
export default About;