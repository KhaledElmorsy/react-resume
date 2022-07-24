import React, { Component } from 'react';

export default class Bullet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.editMode = this.editMode.bind(this);
    this.save = this.save.bind(this);
    this.input = React.createRef();
  }

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  save() {
    const newItem = { bullet: this.input.current.value };
    this.props.edit(newItem);
  }

  render() {
    const edit = this.state.edit;
    return (
      <div className="bullet">
        <li>
          {edit ? (
            <input
              ref={this.input}
              defaultValue={this.props.data.bullet}
              onChange={this.save}
            ></input>
          ) : (
            <span>
              {this.props.data.bullet}
            </span>
          )}
          <button onClick={this.editMode}>{edit ? 'save' : 'edit'}</button>
          <button onClick={this.props.remove}>x</button>
        </li>
      </div>
    );
  }
}
