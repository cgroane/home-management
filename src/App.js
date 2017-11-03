import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import Nav from './Nav';
import router from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        {router}
      </div>
    );
  }
}

export default App;
