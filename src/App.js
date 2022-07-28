import React, { Component } from 'react';
import Bullet from './Bullet';
import Header from './Header';
import List from './List';
import ListObj from './DetailedEntry';
import templates from './templates';

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
        <div key='education' id='education'>
          <h1>Education</h1>
            <List
              data={this.state.education}
              template={templates.education}
              update={this.updateField('education')}
              component={ListObj}
              button='Add Education'
            />
        </div>
        <div key='experience' id='experience'>
          <h1>Experience</h1>
            <List
              data={this.state.experience}
              template={templates.experience}
              update={this.updateField('experience')}
              component={ListObj}
              button='Add Experience'
            />
        </div>
        <div key='technical-skills' className="skills" id="technical-skills">
          <h1>Technical Skills</h1>
            <List
              data={this.state.technicalSkills}
              template={templates.bullet}
              update={this.updateField('technicalSkills')}
              component={Bullet}
              button='+'
            />
        </div>
        <div key='soft-skills' className="skills" id="soft-skills">
          <h1>Soft Skills</h1>
            <List
              data={this.state.softSkills}
              template={templates.bullet}
              update={this.updateField('softSkills')}
              component={Bullet}
              button='+'
            />
        </div>
      </div>
    );
  }
}
