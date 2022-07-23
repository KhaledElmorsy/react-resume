import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import School from './School';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Add Name',
      email: 'Add Email',
      phone: 'Add Phone',
      education: [],
      experience: [],
      skills: { Technical: [], 'Soft-Skills': [] },
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
        <List
          data={this.state.education}
          update={this.updateField('education')}
          component={School}
        />
      </div>
    );
  }
}
