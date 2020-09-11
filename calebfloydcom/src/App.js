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
    // this.setState({wasTouch: false});
  }

  render() {
    let cModal = {
        header: "Cruiser's Yachts", 
        year: "IS Intern - 2017-2020", 
        desc: [
              "I applied at Cruiser’s Yachts for an “IS Intern” position, but it quickly turned out to be so much more. The company was in desperate need for" +
              " someone to take on the day to day operations of the technology infrastructure because the previous employee would only come in when he was" +
              " available from retirement. I quickly learned that I was in a position where I would not be given much guidance and it was my job to pilot the" + 
              " company to success until they found someone to permanently take over the previous role. Everyday was a learning experience as I was interacting" +
              " with technology that was older than me (dusty 20-year-old switches, IBM I series) just to name a few. I even found an old Compaq Portable 3" +
              " sitting in some old cupboards. Nonetheless, I was able to answer the requests of users and respond to upper management during their two-month" + 
              " transition period. Most of my time spent during this period was documenting technological procedures and taking inventory of our assets to make" +
              " the job for the next employee much easier.",
              <br />,<br />,
              "When Cruisers acquired a permanent employee for the position my role in the company changed for the better. Together we started" +
              " implementing new technologies. Just to name a few I setup: Lansweeper, gigabit core switches, Windows 10 for ~200 users, Ubiquity Access" +
              " Points, scripted automatic backup solutions, and many many more things. Although the job was not a perfect fit for what I wanted to do in" +
              " the future (software development), it provided me with ample opportunity to expand my skillsets in other areas. I learned many skills in" + 
              " communication (specifically dealing with frustrated users), persistence and dedication (seeing projects through from design, implementation," + 
              " to maintenance). Most importantly I learned that it is ok to not always know the solution right away but having a good mindset and the" +
              " ability to learn often leads you down the path to success.",
              <div id="letters"> 
                <Social icon={"fas fa-download"} fwdClass=" " linkFwd="link alt-link" alt="Letter One" to="./public/letterOne.pdf" />
                <Social icon={"fas fa-download"} fwdClass=" " linkFwd="link alt-link" alt="Letter Two" to="./public/letterTwo.pdf" />
              </div>
            ],
        id: "cruisers"
    }
    let mModal = {
        header: "University of Wisconsin-Madison",
        year: "2017 - 2020",
        desc: "I will be graduating from the University of Wisconsin-Madison in December 2020. I enjoyed my team here studying as a Computer Science major" +
              " with a certificate in Mathematics. I have learned so much from the very talented professors and peers here, both personally and" +
              " professionally. The classes that I have found the most value from include: Algorithms, Data Structure, Software Security," + 
              " Software Engineering, Operating Systems, Computer Graphics, Compilers, and Artificial Intelligence. All these courses have provided a rich" + 
              " and deepened understanding of the systems that I work with every day. I have an attention for detail, so I enjoyed the courses going from" + 
              " bits and bytes all the way up to modern software practices.",
        id: "madison"
    }
    let muddyModal = {
      header: "MuddyScript",
      year: [<a className="link" href="https://www.github.com/ctfloyd/Muddscript"><i className="fab fa-github" /> https://www.github.com/ctfloyd/Muddyscript</a>],
      desc: "This is one project that I have put a considerable amount of time into" + 
      " throughout 2020. This project started out as just a small idea, I wanted to" +
      " implement a Telnet client that you could connect to MUDs (Multi-User Dungeons)" +
      " and provide a scripting interface that allows you to interact with the incoming" +
      " messages as well as modify the user interface of the program to your liking." +
      " While developing this project, I put an emphasis on trying to create a clean" +
      " code base and tried to use the tactics that I thought were the best at the" +
      " time. I have found immediate payoff in doing so, as the code base is more" +
      " pleasurable to work with (but it is far from perfect). So far, I have a fully" +
      " implanted terminal swing component that supports ANSI escape sequences, a basic" +
      " way to take a frame of data from the telnet client and pass it along to user" +
      " scripts, some intractability between user scripts and the telnet client, and a" +
      " pathfinding algorithm by loading the MUDs database and tracking the optimal" +
      " path between two rooms.",
      id: "muddyscript"
    }
    let iModal = {
      header:"Intel 8080 Emulator",
      year:[<a className="link" href="https://www.github.com/ctfloyd/8080Emulator"><i className="fab fa-github" /> https://www.github.com/ctfloyd/8080Emulator</a>],
      desc: "The Intel 8080 Emulator was one of my first substantial programming projects that I took on outside of school. Before" +
      " this time, I was developing simple scripts that could get the job done for what I needed, but I had not looked at" +
      " software from a scalable and maintainable view. I also used this project as an introduction to the intel instruction" +
      " sets. The CPU was almost fully implemented (except for modifying the nibble flag on the appropriate instructions). The" +
      " CPU was able to completely pass tests written for the Intel 8080 at the time. If I ever circle back to this project, I" +
      " would like to implement I/O to the point where I would be able to play space invaders on it.",
      id: "8080emu"
    }
    let lModal = {
      header:"LC3EZEdit",
      year: [<a className="link" href="https://github.com/ctfloyd/LC3EzEdit"><i className="fab fa-github" /> https://github.com/ctfloyd/LC3EzEdit</a>],
      desc: "Whenever you read programming inspiration articles, they always say to fix something that would make your life easier." +
      " In this project I did this that. I was taking a class that was introducing computer architecture using a fake" +
      " architecture called Little Computer 3 (LC-3). Throughout the course we were required to write assembly code, but the" +
      " only existing tools were very limited and was like editing in a notepad. In my attempt to fix this, I wrote basic" +
      " editing software that included syntax highlighting, pattern matching, assembly instruction hints (think IntelliSense)," +
      " and autocompletion.",
      id: "ezedit"
    }

    let qModal = {
      header: "Quote Jar",
      year: [<a className="link" href="https://github.com/ctfloyd/quotejar"><i className="fab fa-github" /> https://github.com/ctfloyd/quotejar</a>],
      desc: "Among the people that I know, they claim that I ‘radiate TikTok energy’. I do not know if I agree with that statement," +
      " but when someone gives you a title you take it. In this project I created a simple website with a simple backend that" +
      " allows you to import a quote and metadata that someone had said. When you land on the page it picks a random quote that" +
      " has not been seen recently and displays it to you.",
      id: "quotejar"
    }

    let bModal = {
      header:"BuckIt",
      year: [<a className="link" href="https://devpost.com/software/buckit-vybder"><i className="fas fa-code" /> https://devpost.com/software/buckit-vybder</a>],
      desc: "BuckIt was inspired by the hack-a-thon's theme which was sustainability. BuckIt is a social media platform where like tinder with peer-reviewed" +
            " sustinable actions. The thought behind it was to give some sort of incentive either a small payout or other incentives such as a free slice of" +
            " pizza at a campus dining hall. We also gamified sustainable actions by creating a local leaderboard with players around you to see who could get the" +
            " most peer verified sustainable actions. To verify an actions you would be presented with a picture of someone performing their social contribution" +
            " and after a certain quota of people verified the actions, the contributor would be rewarded 'drops in their bucket' as well as all those who verified" +
            " that the picture was indeed a sustainable action. I primarily worked on the user interface for the application as well as the hosting infrastructure" +
            " and integration of different pieces of code.",
      id:"buckit"
    }

    let hModal = {
      header:"DJ Lil Lex",
      year: [<a className="link" href="https://devpost.com/software/dj-lil-lex"><i className="fas fa-code" /> https://devpost.com/software/dj-lil-lex</a>],
      desc: "BuckIt was inspired by the hack-a-thon’s theme, which was sustainability. BuckIt is a social media platform like" +
      " tinder, but instead of swiping on people you are swiping on sustainable actions. Users would be able to submit" +
      " themselves performing sustainable actions, and other users would be able to swipe left and right to dictate whether" +
      " they were performing a sustainable action. If enough people agreed that your action was sustainable, you were" +
      " incentivized to perform more of these actions through some sort of payout service. The payout system could be partner" +
      " organizations (like a campus) where a user could earn a free slice of pizza at the dining hall if they performed enough" +
      " sustainable actions.",
      id: "lilex"
    }

    let oModal = {
      header:"Open Source Contributions",
      year: [<a className="link" href="https://www.github.com/ctfloyd"><i className="fab fa-github" /> https://www.github.com/ctfloyd</a>],
      desc: "I have made some small contributions to large open source projects. The project that I have contributed to that I" +
      " am most interested in is Serenity OS. Serenity is an open source passion project to implement an operating system that" +
      " tributes to the retro 90’s theme of computing. I look forward to contributing more to open source software as I believe" +
      " the culture and thought process behind it is something that software developers should promote.",
      id: "opensource"
    }

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
                <Social icon={"fab fa-linkedin-in"} to="https://www.linkedin.com/in/caleb-floyd-a658591a5/" />
                <i className="fas fa-circle pad"></i>
                <Social icon={"fab fa-twitter"} to="http://www.twitter.com/CalebFloyd17/" />
                <i className="fas fa-circle pad"></i>
                <Social icon={"fas fa-file-alt"} to="./resume-samples.pdf" />
            </div>
            <div className="spotify-container">
                <Spotify/>
            </div>
            <div id="expcards">
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img={cruisers} desc="IS Intern" modal={cModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} img={madison} desc="Student" modal={mModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="MuddyScript" desc="Personal Project" modal={muddyModal} />
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="Intel 8080 Emulator" desc="Personal Project" modal={iModal} />
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="LC3EZEdit" desc="Personal Project" modal={lModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="Quote Jar" desc="Personal Project" modal={qModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="BuckIt" desc="Hack-a-Thon" modal={bModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="DJ Lil Lex" desc="Hack-a-Thon" modal={hModal}/>
                <ExperienceCard capturedDomClick={this.state.capturedDomClick} altImg="Open Source" modal={oModal} />
            </div>
            <div id="footer">
                <p> me, 2020 </p>
            </div>
        </div>
    );

  }
}

export default App;