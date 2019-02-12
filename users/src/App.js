import React, { Component } from 'react';
import './App.css';

// Components
import UserListView from './views/UserListView';
import FormView from './views/FormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <UserListView />
        <FormView />
      </div>
    );
  }
}

export default App;
