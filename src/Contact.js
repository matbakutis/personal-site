import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";


class ContactComponent extends Component {
	render(){
		return (
			<div className="page">
				<h1>Contact</h1>
				<p>Hello from the contact page!</p>
			</div>
		)
	}
}

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;