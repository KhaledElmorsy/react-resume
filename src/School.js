import React, { Component } from 'react';
import List from './List';
import Bullet from './Bullet';

export default class School extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.courses = this.props.data.courses;

    this.editMode = this.editMode.bind(this);
    this.updateChecklist = this.updateChecklist.bind(this)
    this.save = this.save.bind(this);
    
    [this.name, this.major, this.minor, this.startYear, this.endYear] =
      Array.from({ length: 5 }, () => React.createRef());
  }
  static template = {
    name: '',
    startYear: '',
    endYear: '',
    major: '',
    minor: '',
    courses: [],
  };

  updateChecklist(bullets) {
    this.courses = bullets;
    this.save();
  }

  save() {
    this.props.edit({
      name: this.name.current?.value || this.props.data.name,
      major: this.major.current?.value || this.props.data.major,
      minor: this.minor.current?.value || this.props.data.minor,
      startYear: this.startYear.current?.value || this.props.data.startYear,
      endYear: this.endYear.current?.value || this.props.data.endYear,
      courses: this.courses,
    });
    this.editMode();
  }

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { name, major, minor, startYear, endYear } = this.props.data;
    const edit = this.state.edit;
    return (
      <>
        {edit ? (
          <>
            <span>University: </span>
            <input ref={this.name} defaultValue={name}></input>
            
            <span>Major: </span>
            <input ref={this.major} defaultValue={major}></input>
            
            <span>Minor: </span>
            <input ref={this.minor} defaultValue={minor}></input>
            
            <span>Start Date: </span>
            <input ref={this.startYear} type="date" defaultValue={startYear}></input>
            
            <span>End Date: </span>
            <input ref={this.endYear} type="date" defaultValue={endYear} ></input>
           
            <button onClick={this.save}>Save</button>
          </>
        ) : (
          <>
            <div>University name:{name}</div>
            <div>Major: {major}</div>
            <div>Minor: {minor}</div>
            <div>Start Date: {startYear}</div>
            <div>End Date: {endYear}</div>
            <List
              component={Bullet}
              data={this.props.data.courses}
              update={this.updateChecklist} />
            <button onClick={() => this.editMode()}>Edit</button>
          </>
        )}
      </>
    );
  }
}
