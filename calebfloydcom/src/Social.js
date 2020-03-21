import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
        <a href={this.props.to}><i className={this.props.icon + " social zoom"}></i></a>
    );
  }
}

export default Social;