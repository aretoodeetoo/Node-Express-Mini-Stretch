import React, { Component } from 'react';
import './App.css';

// Components
import UserListView from './views/UserListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <UserListView />
      </div>
    );
  }
}

export default App;
