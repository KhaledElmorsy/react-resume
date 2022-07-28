import React, { Component } from 'react';

export default class Bullet extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.input = React.createRef();
  }

  save() {
    const newItem = { bullet: this.input.current.value };
    this.props.edit(newItem);
  }

  render() {
    return (
      <>
        <span className='bullet-point'>{this.props.bullet || '○'}</span>
        <input
          ref={this.input}
          defaultValue={this.props.data.bullet}
          onChange={this.save}
        ></input>
        <button onClick={this.props.remove}>x</button>
      </>
    );
  }
}
