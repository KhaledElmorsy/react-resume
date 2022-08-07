import React, { useState } from 'react';
import Bullet from './Bullet';
import Header from './Header';
import List from './List';
import DetailedEntry from './DetailedEntry';
import templates from './templates';

export default function App() {
    const cache = JSON.parse(localStorage.getItem('resume'));
    const [state, setState] = useState(cache || {
      name: '',
      email: '',
      phone: '',
      education: [],
      experience: [],
      technicalSkills: [],
      softSkills: [],
    });
    
  function update(stateUpdate){
    setState((prevState) => {
      const newState = {...prevState, ...stateUpdate}
      localStorage.setItem('resume', JSON.stringify(newState));
      return newState
    });
  }
  
  function updateField(field) {
    return (value) => update({ [field]: value });
  }

  return (
    <div className="App">
      <Header data={state} update={update} />
      <div key="education" id="education">
        <h1>Education</h1>
        <List
          data={state.education}
          template={templates.education}
          update={updateField('education')}
          component={DetailedEntry}
          name="DetailedEntry"
          button="Add Education"
        />
      </div>
      <div key="experience" id="experience">
        <h1>Experience</h1>
        <List
          data={state.experience}
          template={templates.experience}
          update={updateField('experience')}
          component={DetailedEntry}
          name="DetailedEntry"
          button="Add Experience"
        />
      </div>
      <div key="technical-skills" className="skills" id="technical-skills">
        <h1>Technical Skills</h1>
        <List
          data={state.technicalSkills}
          template={templates.bullet}
          update={updateField('technicalSkills')}
          component={Bullet}
          name="Bullet"
          button="+"
        />
      </div>
      <div key="soft-skills" className="skills" id="soft-skills">
        <h1>Soft Skills</h1>
        <List
          data={state.softSkills}
          template={templates.bullet}
          update={updateField('softSkills')}
          component={Bullet}
          name="Bullet"
          button="+"
        />
      </div>
    </div>
  );

}
