import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Skills from './Skills.js';
import Contact from './Contact.js';


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

	render() {
		return (
			<div className="App">
				<nav>
					<div className="linkHover">
						<Link to="/" className="aLink">Home</Link>
						<Link to="/projects" className="aLink dropLink">Projects</Link>
						<Link to="/about" className="aLink">About</Link>
						<Link to="/skills" className="aLink dropLink">Skills</Link>
						<Link to="/contact" className="aLink">Contact</Link>
					</div>
				</nav>
				<Route
					exact
					path="/"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Home {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/projects"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Projects {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/about"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <About {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/skills"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Skills {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/contact"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Contact {...rest} />}
					</TransitionGroup>
				)}/>
			</div>
		);
	}
}

export default App;
