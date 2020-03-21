import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Social from './Social.js';
import Spotify from './Spotify.js'
import ExperienceCard from './ExperienceCard.js';
import './App.css';

// Assets
import logo from "./static/me.jpg";
import cruisers from "./static/cruisers.png";
import madison from "./static/madison.png";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {capturedDomClick: false}
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({capturedDomClick: true});
  }

  componentDidMount() {
    this.setState({capturedDomClick: false});
  }

  render() {
    let cModal = {
        header:"Cruiser's Yachts", 
        year:"IS Intern - 2016-2020", 
        desc: "is intern that did a lot of cool things", 
        id: "cruisers"
    }
    console.log(cModal);
    return (
        <div id="landing" onClick={this.handleClick}>
            <Avatar src={logo} alt="Picture of me!"/>
            <div id="socialContainer">
                <p style={{display: "inline-block"}}>Caleb Floyd</p>
                <i className="fas fa-circle pad"></i>
                <Social icon={"fas fa-envelope"} to="mailto:calebfloyd0899@gmail.com" />
                <i className="fas fa-circle pad"></i>
                <Social icon={"fab fa-github"} to="http://www.github.com/ctfloyd/"/>
                <i className="fas fa-circle pad"></i>
                <Social icon={"fab fa-linkedin-in"} to="#" />
                <i className="fas fa-circle pad"></i>
                <Social icon={"fab fa-twitter"} to="http://www.twitter.com/CalebFloyd17/" />
                <i className="fas fa-circle pad"></i>
                <Social icon={"fas fa-file-alt"} to="./resume-samples.pdf" />
            </div>
            <div style={{marginTop: "3vh"}}>
                <Spotify/>
            </div>
            <div id="expcards">
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img={cruisers} desc="IS Intern" modal={cModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img={madison} desc="Student"/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img="#" desc="8080emu" />
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img="#" desc="lc3ezedit" />
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img="#" desc="quote jar" />
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img="#" desc="Open source" modal={{header:"brian kerm", year: "brian kerm 2", id:"briankerm"}}/>
            </div>
            <div id="footer">
                <p> me, 2020 </p>
            </div>
        </div>
    );

  }
}

export default App;