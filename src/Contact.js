import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import './Contact.css';


class ContactComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Contact</h1>
				</div>
				<div className="contactText">
					<div className="contactBlock">
						<div className="name">Mat Bakutis</div>
						<div className="contact">(630) 819 - 9554</div>
						<div className="contact">mat.bakutis@gmail.com</div>
						<div className="contactIcons">
							<div className="iconBlock"><a href="https://github.com/matbakutis/" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="contactIcon" alt="GitHub Icon" /></a><div className="underIcon">GitHub</div></div>
							<div className="iconBlock"><a href="https://www.linkedin.com/in/matbakutis/" target="_blank" rel="noopener noreferrer"><img src="/icons/LINKEDIN.png" className="contactIcon" alt="LinkedIn Icon" /></a><div className="underIcon">LinkedIn</div></div>
							<div className="iconBlock"><a href="/MatasBakutisResume.pdf" target="_blank" rel="noopener noreferrer"><img src="/icons/PDF.png" className="contactIcon" alt="PDF Icon" /></a><div className="underIcon">Resume</div></div>
						</div>	
					</div>
				</div>
			</div>
		)
	}
}

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;