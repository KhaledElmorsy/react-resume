import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.updateInfo = this.updateInfo.bind(this);
  }

  updateInfo(e) {
    this.props.update({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div id="header">
        <input
          id="name"
          placeholder="Name"
          onChange={this.updateInfo}
          defaultValue={this.props.data.name}
        />
        <input
          id="phone"
          placeholder="Phone"
          type="tel"
          onChange={this.updateInfo}
          defaultValue={this.props.data.phone}
        />
        <input
          id="email"
          placeholder="Email"
          type="email"
          onChange={this.updateInfo}
          defaultValue={this.props.data.email}
        />
      </div>
    );
  }
}
