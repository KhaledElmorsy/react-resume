import React from 'react';

/**
 * A component that renders an array of objects and handles adding, removing, and 
 * passing state updates for its children. The component to be used to render is injected 
 * as a property 
 */
export default function List(props) {
 
    const Component = props.component;
    const template = props.template;
    const className = props.name;
    let data = props.data;

  function add () {
    const newItem = {};
    for (let field in template) {
      newItem[field] = template[field].default;
    }
    props.update(data.concat(newItem));
  }

  function remove(i) {
    return () => {
      props.data.splice(i, 1);
      props.update(props.data);
    };
  }

  function edit(i) {
    return (newValue) => {
      props.data[i] = newValue;
      props.update(props.data);
    };
  }

  const items = data.map((item, i) => (
    <div key={i} className={className}>
      <Component
        data={item}
        template={template}
        edit={edit(i)}
        remove={remove(i)}
      />
    </div>
  ));

  return (
    <div className={className + '-list'}>
      {items}
      <button className="add" onClick={() => add()}>{props.button}</button>
    </div>
  );
}
