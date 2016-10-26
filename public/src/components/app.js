import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getQuizList }      from '../actions/actions';
import Nav                  from './nav';

class App extends Component {
  componentWillMount() {
    if(window.localStorage.quizzes){
      this.props.dispatch(getQuizList());
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
};
export default connect()(App);