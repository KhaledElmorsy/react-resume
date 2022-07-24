import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.editMode = this.editMode.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  editMode() {
    this.setState({ edit: !this.state.edit })
  }

  updateInfo(e) {
    this.props.update({[e.target.name]:e.target.value})
  }

  render() {
    const edit = this.state.edit;
    const { 
      name,
      phone,
      email
     } = this.props.data
    return (
      <div id="header">
        {edit ? (
          <>
            <input id="name"name="name" placeholder='Name' onChange={this.updateInfo} value={name} />
            <input id="phone" name="phone" placeholder='Phone' onChange={this.updateInfo} value={phone} />
            <input id="email" name="email" placeholder='Email' onChange={this.updateInfo} value={email} />
            <button id="save-header" onClick={this.editMode}>Save</button>
          </>
        ) : (
          <>
            <div id="name">{name}</div>
            <div id="phone">{phone}</div>
            <div id="email">{email}</div>
            <button id="edit-header" onClick={this.editMode}>Edit</button>
          </>
        )}
      </div>
    )
  }
}
