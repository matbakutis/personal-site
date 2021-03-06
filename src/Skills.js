import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import './Skills.css';


class SkillsComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Skills</h1>
				</div>
				<div className="logos">
					<div className="logoRow">
					<div className="category">Front-End</div>
						<div className="logoBlock">
							<a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
								<img src="/icons/HTML5.png" className="logo" alt="HTML5 Logo" />
							</a>
							<div className="underLogo">HTML5</div>
						</div>
						<div className="logoBlock">
							<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer">
								<img src="/icons/CSS3.png" className="logo" alt="CSS3 Logo" />
							</a>
							<div className="underLogo">CSS3</div>
						</div>
						<div className="logoBlock">
							<a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/JS.png" className="logo" alt="JavaScript Logo" />
							</a>
							<div className="underLogo">JS ES6</div>
						</div>
						<div className="logoBlock">
							<a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/BOOTSTRAP.png" className="logo" alt="Bootstrap Logo" />
							</a>
							<div className="underLogo">Bootstrap</div>
						</div>
						<div className="logoBlock">
							<a href="http://materializecss.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/MATERIALIZE.png" className="logo" alt="Materialize Logo" />
							</a>
							<div className="underLogo">Materialize</div>
						</div>
						<div className="logoBlock">
							<a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/JQUERY.png" className="logo" alt="JQuery Logo" />
							</a>
							<div className="underLogo">JQuery</div>
						</div>
					</div>
					<div className="logoRow">
					<div className="category">Back-End</div>
						<div className="logoBlock">
							<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/NODEJS.png" className="logo" alt="Node.js Logo" />
							</a>
							<div className="underLogo">Node.js</div>
						</div>
						<div className="logoBlock">
							<a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/EXPRESSJS.png" className="logo" alt="Express.js Logo" />
							</a>
							<div className="underLogo">Express.js</div>
						</div>
						<div className="logoBlock">
							<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/MONGODB.png" className="logo" alt="MongoDB Logo" />
							</a>
							<div className="underLogo">MongoDB</div>
						</div>
						<div className="logoBlock">
							<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/POSTGRESQL.png" className="logo" alt="PostgreSQL Logo" />
							</a>
							<div className="underLogo">PostgreSQL</div>
						</div>
						<div className="logoBlock">
							<a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/RUBY.png" className="logo" alt="Ruby Logo" />
							</a>
							<div className="underLogo">Ruby</div>
						</div>
						<div className="logoBlock">
							<a href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/RAILS.png" className="logo" alt="Rails Logo" />
							</a>
							<div className="underLogo">Rails</div>
						</div>
						<div className="logoBlock">
							<a href="http://sinatrarb.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/SINATRA.png" className="logo" alt="Sinatra Logo" />
							</a>
							<div className="underLogo">Sinatra</div>
						</div>
					</div>
					<div className="logoRow">
					<div className="category">FE Frameworks / Testing</div>
						<div className="logoBlock">
							<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/REACT.png" className="logo" alt="React Logo" />
							</a>
							<div className="underLogo">React</div>
						</div>
						<div className="logoBlock">
							<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/ANGULAR.png" className="logo" alt="Angular Logo" />
							</a>
							<div className="underLogo">Angular</div>
						</div>
						<div className="logoBlock">
							<a href="https://phaser.io/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/PHASER.png" className="logo" alt="Phaser.js Logo" />
							</a>
							<div className="underLogo">Phaser.js</div>
						</div>
						<div className="logoBlock">
							<a href="https://mochajs.org/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/MOCHA.png" className="logo" alt="Mocha Logo" />
							</a>
							<div className="underLogo">Mocha</div>
						</div>
						<div className="logoBlock">
							<a href="http://chaijs.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/CHAI.png" className="logo" alt="Chai Logo" />
							</a>
							<div className="underLogo">Chai</div>
						</div>
					</div>
					<div className="logoRow">
					<div className="category">C# / Task Manager / Versioning</div>
						<div className="logoBlock">
							<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/CSHARP.png" className="logo" alt="C# Logo" />
							</a>
							<div className="underLogo">C#</div>
						</div>
						<div className="logoBlock">
							<a href="https://unity3d.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/UNITY.png" className="logo" alt="Unity Logo" />
							</a>
							<div className="underLogo">Unity</div>
						</div>
						<div className="logoBlock">
							<a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/GULP.png" className="logo" alt="Gulp Logo" />
							</a>
							<div className="underLogo">Gulp</div>
						</div>
						<div className="logoBlock">
							<a href="https://github.com/" target="_blank" rel="noopener noreferrer">
								<img src="/icons/GitHub.png" className="logo" alt="GitHub Logo" />
							</a>
							<div className="underLogo">Git / GitHub</div>
						</div>
					</div>
				</div>
				<div className='tr-footer'></div>
			</div>
		)
	}
}

const Skills = AnimatedWrapper(SkillsComponent);
export default Skills;