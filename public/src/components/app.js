import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { updateQuizList } from '../actions/actions';

class App extends Component {
  componentWillMount() {
    let quizzesJSON = window.localStorage.getItem('quizzes');
    let quizzes = JSON.parse(quizzesJSON);
    if(quizzes){
      this.props.dispatch(updateQuizList(quizzes));
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App);