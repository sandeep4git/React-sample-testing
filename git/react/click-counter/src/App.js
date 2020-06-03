import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import Headline from './component/headline/headline';
import SharedButton from './component/button/button';
import ListItem from './component/listItem/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const tempArr = [{
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

const initialState = {
  hideBtn: false
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }
  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }
  exampleMethod_returnsValue(number) {
    return number + 1;
  }
  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
    return (
      <div data-test='component-app'
        className="App">
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render' />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (<ListItem key={index} {...configListItem} />
                )
              }
              )}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
