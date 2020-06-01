import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import Headline from './component/headline/headline';

class App extends Component {
  render() {
    return (
      <div data-test='component-app'
        className="App">
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render' />
        </section>
      </div>
    );
  }
}

export default App;
