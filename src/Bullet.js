import React, { useRef } from 'react';

export default function Bullet(props) {
    const input = useRef();

  function save () {
    const newItem = { bullet: input.current.value };
    props.edit(newItem);
  }

    return (
      <>
        <span className='bullet-point'>{props.bullet || '○'}</span>
        <input
          ref={input}
          defaultValue={props.data.bullet}
          onChange={save}
        ></input>
        <button onClick={props.remove}>x</button>
      </>
    );

}
