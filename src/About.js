import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";


class AboutComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>About Me</h1>
				</div>
			</div>
		)
	}
}

const About = AnimatedWrapper(AboutComponent);
export default About;