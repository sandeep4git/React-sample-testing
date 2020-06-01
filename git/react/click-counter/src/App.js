import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';

class App extends Component {
  render() {
    return (
      <div data-test='component-app'
        className="App">
        <Header />
      </div>
    );
  }
}

export default App;
