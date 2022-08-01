import React from 'react';
import List from './List';
import Bullet from './Bullet';

/**
 * A component that renders one or more data fields and contains a list of bullet 
 * points.
 */
export default function DetailedEntry(props) {

    const inputs = [];
    const template = props.template;
    let list = props.data.list;

  function updateList(newList) {
    list = newList;
    save();
  }

  function save() {
    const updatedData = {};
    inputs.forEach((obj) => (updatedData[obj.field] = obj.el.value));
    Object.assign(updatedData, { list: list });
    props.edit(updatedData);
  }

  const data = props.data;
  return (
    <>
      <button className='remove' onClick={props.remove}>x</button>
      {Object.keys(data).map((field, i) => {
        const value = data[field];
        return value instanceof Array ? null : (
          <input
            key={i}
            type={template[field].type}
            placeholder={field}
            name={field}
            ref={(el) => (inputs[i] = { el, field })}
            defaultValue={value}
            onChange={save}
          ></input>
        )
      })}
      <List
        template={{bullet: {default: '', type: 'text'}}}
        component={Bullet}
        data={list}
        update={updateList}
        button='+'
      />

    </>
  );
}
