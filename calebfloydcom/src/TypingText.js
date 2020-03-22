import React, { Component } from 'react';

class TypingText extends Component {

  constructor(props) {
      super(props);
      this.state = {text: "Caleb.", fragment: "", drawCursor: true, drawHighlight: false, textIndex: 1};
  }

  chooseNewText() {
      this.setState(function(state, props){
          let nextText = props.options[state.textIndex];
          return {
              text: nextText,
              fragment: "",
              time: 0,
              drawHighlight: false,
              textIndex: (state.textIndex + 1) % props.options.length
          }
      });
  }

  addToFragment() {
      this.setState(function(state, props) {
        let text = state.text;
        let fragment = state.fragment;
        if(text === fragment || fragment.length >= text.length) {
            return { drawHighlight: true };
        }
            
        return {
            fragment: state.fragment + state.text[fragment.length],
            time: state.time + props.updateTime
        }
      });
  }

  drawCursor() {
      this.setState((state, props) => ({
          drawCursor: !state.drawCursor
      }));
  }

  componentDidMount() {
    this.changeId = setInterval(
        () => this.chooseNewText(), 
        this.props.animationTime
    );

    this.fragmentTimer = setInterval(
        () => this.addToFragment(),
        this.props.updateTime
    );

    this.cursorTimer = setInterval(
        () => this.drawCursor(),
        350
    )
  }

  componentWillUnmount() {
      clearInterval(this.changeId);
      clearInterval(this.fragmentTimer)
  }

  render() {
    let visible = this.state.drawCursor ? "visible" : "hidden";
    let textClass = "";
    if(this.state.drawHighlight) {
        textClass = "highlightText";
    }
    return (
        <div style={{display: "inline-block"}}>
            <span className={textClass}>{this.state.fragment}</span>
            <span style={{visibility: visible, position: "relative", bottom: "0.2vh", fontSize: "1.2em", fontWeight: "100"}}>|</span>
        </div>
    );
  }
}

export default TypingText;