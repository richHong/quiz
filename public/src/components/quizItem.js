import React, { Component } from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';
import { removeQuiz } from '../actions/actions';
import { connect } from 'react-redux';

class QuizItem extends Component {
  takeQuiz () {
    hashHistory.push(`/quiz/${this.props.quiz.title}`);
  }
  addQuestion () {
    hashHistory.push(`/addQuestion/${this.props.quiz.title}`);
  }
  editQuestion () {
    hashHistory.push(`/editQuestion/${this.props.quiz.title}`);
  }
  removeQuiz (quiz) {
    this.props.dispatch(removeQuiz(quiz));
  }
  render() {
    return (
      <div> 
        <h3>{this.props.quiz.title}</h3>
        <label>Status: </label>{this.props.quiz.saved ? <span>Saved</span> : <span>NOT Saved</span>}
        <br/><br/>
        <label>Number of Questions: </label><span>{this.props.quiz.questions.length}</span>
        <br/><br/>
        {this.props.quiz.questions.length ? <button onClick={e => this.takeQuiz()}>Take Quiz</button> : null}
        <button onClick={e => this.addQuestion()}>Add Question</button>
        <button onClick={e => this.editQuestion()}>Edit Questions</button>
        <button onClick={e => this.removeQuiz(this.props.quiz)}>Remove Quiz</button>
        <hr/>
      </div>
      );
  }
};

export default connect()(QuizItem);