import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.updateInfo = this.updateInfo.bind(this);
  }

  updateInfo(e) {
    this.props.update({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div id="header">
            <input id="name" placeholder='Name' onChange={this.updateInfo} />
            <input id="phone" placeholder='Phone' type="tel" onChange={this.updateInfo} />
            <input id="email" placeholder='Email' type="email" onChange={this.updateInfo} />
      </div>
    )
  }
}
