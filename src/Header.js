import React from 'react';


export default function Header(props) {

  function updateInfo(e) {
    props.update({ [e.target.id]: e.target.value });
  }
  
  return (
      <div id="header">
        <input
          id="name"
          placeholder="Name"
          onChange={updateInfo}
          defaultValue={props.data.name}
        />
        <input
          id="phone"
          placeholder="Phone"
          type="tel"
          onChange={updateInfo}
          defaultValue={props.data.phone}
        />
        <input
          id="email"
          placeholder="Email"
          type="email"
          onChange={updateInfo}
          defaultValue={props.data.email}
        />
      </div>
  );
}
