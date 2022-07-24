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
    this.state = { edit: false };
    this.template = this.props.template;
    this.list = this.props.data.list;

    this.editMode = this.editMode.bind(this);
    this.updateList = this.updateList.bind(this);
    this.save = this.save.bind(this);
  }

  updateList(newList) {
    this.list = newList;
    this.save();
  }

  save() {
    const updatedData = {...this.props.data};
    if (this.state.edit) {
      this.inputs.forEach((obj) => (updatedData[obj.field] = obj.el.value));
    }
    Object.assign(updatedData, { list: this.list });
    this.props.edit(updatedData);
  }

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const edit = this.state.edit;
    const data = this.props.data;
    return (
      <>
        {Object.keys(data).map((field, i) => {
          const value = data[field];
          return value instanceof Array ? null : edit ? (
            <input
              key={i}
              type={this.props.template[field].type}
              placeholder={field}
              ref={(el) => (this.inputs[i] = { el, field })}
              defaultValue={value}
              onChange={this.save}
            ></input>
          ) : (
            <div key={i}>
              {field}: {value}
            </div>
          )
        })}
        <List
          template={{bullet: {default: '', type: 'text'}}}
          component={Bullet}
          data={this.list}
          update={this.updateList}
          button='+'
        />
          <button onClick={this.editMode}>{edit? 'Save' : 'Edit'}</button>
          <button onClick={this.props.remove}>Delete</button>
      </>
    );
  }
}
