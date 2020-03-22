import React, { Component } from 'react';
import Modal from './Modal.js';
import {doAnimate, doClose} from './Animation.js';

class ExperienceCard extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);

      const defaultRect = {left: 0, width: 0}

      this.state = {isOpen: false, containerRect: defaultRect, isClosing: false}
      this.containerRef = new React.createRef();
      this.getRectsInterval = undefined;
      this.captureClick = true;
  }

  handleClick() { 
    if(!this.state.isOpen) {
        this.setState(state => ({isOpen: !state.isOpen}), () => doAnimate(this.props.modal.id, this.state));
        return;
    }
    
  }

  componentDidMount() {
    this.getRectsInterval = setInterval(() => {
        this.setState(state => {
          const containerRect = this.containerRef.current.getBoundingClientRect();
          return JSON.stringify(containerRect) === JSON.stringify(state.containerRect) ? null : { containerRect };
        });
      }, 10);
  }

  componentWillUnmount() {
      clearInterval(this.getRectsInterval);
  }
  
  shouldComponentUpdate() {
    if(this.props.capturedDomClick && this.state.isOpen && !this.state.isClosing && this.captureClick) {
        this.captureClick = false;
        this.setState({isClosing: true}, () => {
            doClose(this.props.modal.id, () => {
                this.setState({isOpen: false, isClosing: false});
                this.captureClick = true;
            });
        })
        return true;
    }
    return true;
  }

  render() {
    return (
        <div className="card-container" ref={this.containerRef}>
            <div className="card zoom" onClick={this.handleClick}>
                {
                this.props.img &&
                  <img className="descimg" src={this.props.img} alt={this.props.modal ? this.props.modal.header : ""}></img>
                }
                {
                this.props.altImg &&
                  <h2 className="descAlt">{this.props.altImg}</h2>
                }

                <p className="description">{this.props.desc}</p>
            </div>
            {
                this.state.isOpen && 
                <Modal header={this.props.modal.header} year={this.props.modal.year} desc={this.props.modal.desc} id={this.props.modal.id}/>
            }
        </div>
    );
  }
}

export default ExperienceCard;