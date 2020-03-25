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
        header:"Cruiser's Yachts", 
        year:"IS Intern - 2017-2020", 
        desc: ["When I was first employed at Cruiser's Yachts I thought I was signing up for an intern position, but it quickly turned out to be so much more." +
              " The previous IS Manager had been released from the company and the previous semi-retired manager came back to fill the position for a while. About" + 
              " a week after I had arrived the previous manager decided to take off and leave me in the position all alone. During this time I was the go-to individual" +
              " to handle all things systems. Imagine sticking an (at that time) 18 year old kid in charge of an IBM i series. This system was old, like real old." +
              " We're talking at least double my age. Needless to say I filled the position (and didn't burn anything down!) for about two months before a new IS Manager" +
              " was hired. I still work closely with the new manager today and I am able to fill a much more intern'ish' role with more emphasis on learning and developing" + 
              " new skills. However, being thrown to the woles in the begining has put me in a position where I have a lot of knowledge about the systems and has provided me" +
              " with the opportunity to voice my opinion on the company's technological infrastructure decisions. (Not too shabby, huh?) Attatched below are two letters of recommendation given to me.",
              <div id="letters"> 
                <Social icon={"fas fa-download"} fwdClass=" " linkFwd="link alt-link" alt="Letter One" to="./public/letterOne.pdf" />
                <Social icon={"fas fa-download"} fwdClass=" " linkFwd="link alt-link" alt="Letter Two" to="./public/letterTwo.pdf" />
              </div>],
        id: "cruisers"
    }
    let mModal = {
        header:"University of Wisconsin-Madison",
        year:"2017 - 2020",
        desc: `As of writing this (3/2020) I am currently a student at the University of Wisconsin-Madison studying computer science. I have one more semester before` +
              ` graduation. My first two years at campus I enjoyed volunteering at Reach-A-Child, a local non-profit organization that helps provide books to children` +
              ` who face a crisis. My final two years at UW-Madison have been spent finding an identity for myself and who I want to be, while delving deeper into my` +
              ` passion for computer science and software development. Some notable classes that I have taken at Madison include:\n\tAlgorithms, Data Structures,` +
              ` Software Security, Operating Systems, and Computer Graphics.\nI plan on taking a software engineering and/or android developemnt course during my last` +
              ` semester. Each of the classes listed above have had very cool projects that I am unfortunately not allowed to share. :(`,
        id: "madison"
    }
    let iModal = {
      header:"Intel 8080 Emulator",
      year:[<a className="link" href="https://www.github.com/ctfloyd/8080Emulator"><i className="fab fa-github" /> https://www.github.com/ctfloyd/8080Emulator</a>],
      desc: "This projet was my first 'real' project. It was one where I had to spend a lot of time learning before I was even able to begin writing code. The end" +
            " goal for this project was to be able to play space invaders on an emulated 8080 and other hardware components. I got as far as writing a functioning" +
            " Intel 8080 emulator (which is of course what the name of the project would imply). I have recently contemplated picking this project back up and" +
            " finishing it off strong, but instead I've decided to go big or go home and write an emulator for x86 instead (also on github!).",
      id: "8080emu"
    }
    let lModal = {
      header:"LC3EZEdit",
      year: [<a className="link" href="https://github.com/ctfloyd/LC3EzEdit"><i className="fab fa-github" /> https://github.com/ctfloyd/LC3EzEdit</a>],
      desc: "I had a lot of motivation and inspiration when I was writing this project. I was in an intro to computer architecture class which used the 'toy'" +
            " archictecture called LC-3. The class turned out to be pretty heavy in writing LC-3 assembly code, but the best tool available were some editor" +
            " that the developers of LC-3 came out with many years ago (there was also a plugin for vscode that did syntax highlighting). This editor lacked" +
            " critical features such as syntax highlighting, assembly instruction syntax and formatting reminders, as well as autocomplete. Needless to say" +
            " I quickly implemented all of these features in an editor of my own one weekend and writing LC-3 assembly was never the same since. Sounds great" +
            " but the implementation details of the project are something that should probably be looked at again. Inexperience led to some bad decisions" +
            " like putting syntax highlighting on the same thread as keyboard input (I said it worked, not that it worked well (:), but at least I learned something from it!",
      id: "ezedit"
    }

    let qModal = {
      header: "Quote Jar",
      year: [<a className="link" href="https://github.com/ctfloyd/quotejar"><i className="fab fa-github" /> https://github.com/ctfloyd/quotejar</a>],
      desc: "This project was more a gift to my girlfriend than anything. It's a short and sweet project to store all the funny quotes that we share" +
            " with each other. She claims that I 'radiate tiktok energy', but I don't agree with her. Anyways, this was a couple hour project that helped" +
            " me explore using sqlite dataebases with express servers. (I used prepared statements, so don't you even go thinking of trying to find where this" +
            " is hosted and performing an sql injection.) This short piece really helped tie a knot in my understanding of certain web vulnerabilities" +
            " as well as database integration to a web frontend.",
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
      desc: "DJ Lil Lex was a product of my first hack-a-thon ever. My team and I went into the venue having no ideas whatsoever. I think we were just twiddiling our" +
            " thumbs until we decided to look at what hardware was provided. One of the options was Amazon Alexa, so we rented it without much of a plan." +
            " Eventually one of us suggested, as a joke, that it would be funny to make Alexa rap. I thought it was a great idea and convinced the rest of the" +
            " team to run with it. Next thing you know we had an entire Alexa skill that would take user input, make a request to the server hosted in my basement" +
            " that would execute a python script (yikes! really any command/code injection could have happened here) which generated the rap. The script would generate" +
            " related words to the one given and then choose a couple of those words. It would then scrape lyrics websites looking for words that ended in the user's" +
            " word and also words that rhymed with the user's word. It was all done in real-time and on the fly (sorry whichever website we scraped, we probably didn't" +
            " obey your TOS, oops!), but the response time was only somewhere around 15 seconds.",
      id: "lilex"
    }

    let oModal = {
      header:"Open Source Contributions",
      year: [<a className="link" href="https://www.github.com/ctfloyd"><i className="fab fa-github" /> https://www.github.com/ctfloyd</a>],
      desc: "I have made a couple of small contributions to open source projects. My favorite project that I've contributed to so far is SerenityOS." +
            " Although I haven't made very many contributions as of yet, I would like to expand more into this space. For now, this is more of a placeholder" +
            " to give myself some accountability to contribute more to open source. I look forward to updating this section when I find a passion project in the open source community.",
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