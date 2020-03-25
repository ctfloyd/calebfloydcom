import React, { Component } from 'react';

class Social extends Component {
  render() {
    let socialClass = this.props.fwdClass || "social zoon";
    let linkFwd = this.props.linkFwd || "";
    let alt = this.props.alt || "";
    return (
        <a href={this.props.to} className={linkFwd}><i className={this.props.icon + " " + socialClass}></i>{" " + alt}</a>
    );
  }
}

export default Social;