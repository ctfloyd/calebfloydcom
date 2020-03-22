import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
        <div>
            <div className="modalHide"></div>
            <div className="modalContainer" id={this.props.id}>
                <h1 className="modalHeader">{this.props.header}</h1>
                <h3 className="modalYear">{this.props.year}</h3>
                <hr className="modalDivider"></hr>
                <p className="modalDesc">{this.props.desc}</p>
            </div>
        </div>
    );
  }
}

export default Modal;