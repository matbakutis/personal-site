import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import './Projects.css'


class ProjectsComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Projects</h1>
				</div>
				<div className="project">
					<a href="https://theplaylist.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/thePlaylist.png" className="projectShotLeft projectShot" alt="Playlist Screen Shot" /></a>
					<div className="projectText">
						<div className="projectTitle">thePlaylist</div>
						<div className="projectAbout">An app to browse and create YouTube playlists. The playlists are independant of YouTube and do not require a YouTube channel. Built using JQuery and HTML5 / CSS3.</div>
						<div className="projectAbout">Testing username and password are just "username" and "password".</div>
						<div className="icons">
							<a href="https://github.com/matbakutis/thePlaylist" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="icon" alt="GitHub Icon" /></a>
							<a href="https://theplaylist.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/icons/Link.png" className="icon" alt="Link Icon" /></a>
						</div>
					</div>
				</div>
				<hr className="hrStyle" />
				<div className="project projectReversed">
					<a href="https://thebestgame.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/theGame.png" className="projectShotRight projectShot" alt="theGame Screen Shot" /></a>
					<div className="projectText">
						<div className="projectTitle">theGame</div>
						<div className="projectAbout">theGame is a top down shooter game. The main focus was to create a game that required a lot of user interaction and skill. It is meant to be played with a keyboard and mouse. I am planning on adding more levels, and different character classes. Phaser.js was used as the framework for the game.</div>
						<div className="icons">
							<a href="https://github.com/matbakutis/theGame" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="icon" alt="GitHub Icon" /></a>
							<a href="https://thebestgame.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/icons/Link.png" className="icon" alt="Link Icon" /></a>
						</div>
					</div>
				</div>
				<hr className="hrStyle" />
				<div className="project">
					<a href="https://react-guild.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src="/Guildy.jpg" className="projectShotLeft projectShot" alt="Guildy Screen Shot" /></a>
					<div className="projectText">
						<div className="projectTitle">Guildy</div>
						<div className="projectAbout">Guildy is meant to be a hub for World of Warcraft guilds (in game communities). Guild leaders can sign up their guild and create rosters for the in game teams that the site will display statistics and information about. We used React for the front-end, while using Sinatra and Ruby to set up the back-end. We used PostgreSQL to create a sql database.</div>
						<div className="icons">
							<div className="iconBlock"><a href="https://github.com/CollCrom/Guild-Website" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="icon" alt="GitHub Icon" /></a><div className="underIcon">Front End</div></div>
							<div className="iconBlock"><a href="https://github.com/matbakutis/Guild-Website-Back-End" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="icon" alt="GitHub Icon" /></a><div className="underIcon">Back End</div></div>
							<a href="https://react-guild.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src="/icons/Link.png" className="icon" alt="Link Icon" /></a>
						</div>
					</div>
				</div>
				<hr className="hrStyle" />
				<div className="project projectReversed">
					<a href="https://github.com/matbakutis/Air-Hockey" target="_blank" rel="noopener noreferrer"><img src="/airHockey.gif" className="projectShotRight projectShot" alt="Air Hockey GIF" /></a>
					<div className="projectText">
						<div className="projectTitle">Air Hockey</div>
						<div className="projectAbout">Air Hockey is an arcade air hockey game bulit for IOS, but mainly for an IPad. I created all of the art work myself, and have the game running and playable on an IPad, but because it costs money to upload an app onto the app store, there is no way for the public to play it at this time. Air Hockey is built using Unity and C# scripts.</div>
						<div className="icons">
							<a href="https://github.com/matbakutis/Air-Hockey" target="_blank" rel="noopener noreferrer"><img src="/icons/GitHub.png" className="icon" alt="GitHub Icon" /></a>
						</div>
					</div>
				</div>
				<div className='tr-footer'></div>
			</div>
		)
	}
}

const Projects = AnimatedWrapper(ProjectsComponent);
export default Projects;