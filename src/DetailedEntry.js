import React, { Component } from 'react';
import List from './List';
import Bullet from './Bullet';

/**
 * A component that renders one or more data fields and contains a list of bullet 
 * points.
 */
export default class DetailedEntry extends Component {
  constructor(props) {
    super(props);
    this.inputs = [];
    this.template = this.props.template;
    this.list = this.props.data.list;

    this.save = this.save.bind(this)
    this.updateList = this.updateList.bind(this);
  }

  updateList(newList) {
    this.list = newList;
    this.save();
  }

  save() {
    const updatedData = {};
    this.inputs.forEach((obj) => (updatedData[obj.field] = obj.el.value));
    Object.assign(updatedData, { list: this.list });
    this.props.edit(updatedData);
  }

  render() {
    const data = this.props.data;
    return (
      <>
        {Object.keys(data).map((field, i) => {
          const value = data[field];
          return value instanceof Array ? null : (
            <input
              key={i}
              type={this.props.template[field].type}
              placeholder={field}
              name={field}
              ref={(el) => (this.inputs[i] = { el, field })}
              defaultValue={value}
              onChange={this.save}
            ></input>
          )
        })}
        <List
          template={{bullet: {default: '', type: 'text'}}}
          component={Bullet}
          data={this.list}
          update={this.updateList}
          button='+'
        />

      </>
    );
  }
}
