import uniqid from 'uniqid';
import React, { Component } from 'react';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.component = this.props.component;
    this.template = this.component.template;
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.data = this.props.data;
  }

  componentDidUpdate() {
    this.data = this.props.data;
  }

  add() {
    this.props.update(this.data.concat(this.template));
  }

  remove(i) {
    return () => {
      this.props.data.splice(i, 1);
      this.props.update(this.props.data);
    }
  }

  edit(i) {
    return (newValue) => {
      this.props.data[i] = newValue;
      this.props.update(this.props.data);
    };
  }

  render() {
    const data = this.props.data || [];
    const items = data.map((item, i) => (
      <div className={this.component.name + '-list-item'}>
        <this.component
          key={uniqid() + i}
          data={item}
          edit={this.edit(i)}
          remove={this.remove(i)}
        />
      </div>
    ));

    return (
      <>
        {items}
        <button onClick={() => this.add()}>Add {this.component.name}</button>
      </>
    );
  }
}
