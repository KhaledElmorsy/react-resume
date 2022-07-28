import React, { Component } from 'react';

/**
 * A component that renders an array of objects and handles adding, removing, and 
 * passing state updates for its children. The component to be used to render is injected 
 * as a property 
 */
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
    const newItem = {};
    for (let field in this.props.template) {
      newItem[field] = this.props.template[field].default;
    }
    this.props.update(this.data.concat(newItem));
  }

  remove(i) {
    return () => {
      this.props.data.splice(i, 1);
      this.props.update(this.props.data);
    };
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
      <div key={i} className={this.component.name}>
        <this.component
          data={item}
          template={this.props.template}
          edit={this.edit(i)}
          remove={this.remove(i)}
        />
      </div>
    ));

    return (
      <div className={this.component.name + '-list'}>
        {items}
        <button className="add" onClick={() => this.add()}>{this.props.button}</button>
      </div>
    );
  }
}
