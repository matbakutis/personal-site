import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";


class AboutComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>About Me</h1>
					<div>I'm a programmer with a drive to create great programs and platforms, as well as continuously expand my knowledge of development and technology. My passion and quick learning is a great way for any organization to improve their technological footprint. Being born in Lithuania, I am fluent in Lithuanian and English, as well as a handful of programming languages. I am always open to learning and try my best to keep an open mind.</div>
					<div>
						<div>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</div>
						<div>~ Gandhi</div>
					</div>
					<div>
						<div>
							<h4>Hobbies</h4>
							<ul>
								<li>Rock Climbing</li>
								<li>Fishing</li>
								<li>Video Games</li>
								<li>Ice Hockey</li>
							</ul>	
						</div>
						<div>
							<h4>Favorite Foods</h4>
							<h6>(Basic but Delicious)</h6>
							<ul>
								<li>Pasta</li>
								<li>Pizza</li>
								<li>Wings</li>
								<li>Burritos</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const About = AnimatedWrapper(AboutComponent);
export default About;