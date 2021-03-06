import React, { Component } from 'react';
import TypingText from './TypingText.js';

class Avatar extends Component {
  render() {
    let textChoices = ["Caleb.", "a designer.", "an engineer.", "a student."];
    return (
      <div id="avatar">
        <img className="avatarImg" src={this.props.src} alt={this.props.alt} />
        <span className="typingText">I'm&nbsp;
            <TypingText options={textChoices} animationTime={3000} updateTime={150} />
        </span>
      </div>
    );
  }
}

export default Avatar;