import React, { Component } from 'react';

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.editMode = this.editMode.bind(this);
  }

  static temaplte = {
    company: '',
    location: '',
    position: '',
    startDate: '',
    endDate: '',
    responsibilities: [],
  };

  render() {
    const edit = this.state.edit;
    return (
      <div className="bullet">
        {edit ? (
          <li>
            <input ref={this.input} defaultValue={this.props.data}></input>
            <button onClick={this.save}>save</button>
          </li>
        ) : (
          <li>
            {this.props.value}
            <button onClick={this.editMode}>edit</button>
          </li>
        )}
      </div>
    );
  }
}
