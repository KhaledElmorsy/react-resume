import React, { Component } from 'react';
import Bullet from './Bullet';
import Header from './Header';
import List from './List';
import ListObj from './DetailedEntry';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Add Name',
      email: 'Add Email',
      phone: 'Add Phone',
      education: [],
      experience: [],
      technicalSkills: [], 
      softSkills: [] 
    };

    this.update = this.update.bind(this);
    this.tempaltes = {
      education: {
        University: {default: '', type:'text'},
        Major: {default: '', type:'text'},
        Minor: {default: '', type:'text'},
        'Start Date': {default: '', type:'date'},
        'End Date': {default: '', type:'date'},
        list: {default: []},
      },
      experience: {
        Company: {default: '', type:'text'},
        Position: {default: '', type:'text'},
        Location: {default: '', type:'text'},
        'Start Date': {default: '', type:'date'},
        'End Date': {default: '', type:'date'},
        list: {default: []},
      },
    };
  }

  update(state) {
    this.setState(state);
  }

  updateField(field) {
    return (value) => this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state} update={this.update} />
        <div key='education' className='education'>
          <h1>Education</h1>
            <List
              data={this.state.education}
              template={this.tempaltes.education}
              update={this.updateField('education')}
              component={ListObj}
              button='Add Education'
            />
        </div>
        <div key='experience' className='experience'>
          <h1>Experience</h1>
            <List
              data={this.state.experience}
              template={this.tempaltes.experience}
              update={this.updateField('experience')}
              component={ListObj}
              button='Add Experience'
            />
        </div>
        <div key='technical-skills' className="skills">
          <h1>Technical Skills</h1>
            <List
              data={this.state.technicalSkills}
              template={{bullet:{default: ''}}}
              update={this.updateField('technicalSkills')}
              component={Bullet}
              button='+'
            />
        </div>
        <div key='soft-skills' className="skills">
          <h1>Soft Skills</h1>
            <List
              data={this.state.softSkills}
              template={{bullet:{default: ''}}}
              update={this.updateField('softSkills')}
              component={Bullet}
              button='+'
            />
        </div>
      </div>
    );
  }
}
