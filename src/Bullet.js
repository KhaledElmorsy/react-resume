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

  static template = 'New item';

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  save() {
    this.props.edit(this.input.current.value);
    this.editMode();
  }

  updateField(field) {
    return (value) => this.setState({ [field]: value });
  }

  render() {
    const edit = this.state.edit;
    return (
      <div className="bullet">
        <li>
          {edit ? (
            <>
              <input ref={this.input} defaultValue={this.props.data}></input>
              <button onClick={this.save}>save</button>
            </>
          ) : (
            <>
              {this.props.data}
              <button onClick={this.editMode}>edit</button>
            </>
          )}
          <button onClick={this.props.remove}>x</button>
        </li>
      </div>
    );
  }
}
