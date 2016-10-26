import React, { Component } from 'react';
import { browserHistory }   from 'react-router';
import { connect }          from 'react-redux';
import { removeQuiz }       from '../actions/actions';

class QuizItem extends Component {
  takeQuiz () {
    browserHistory.push(`/quiz/${this.props.quiz.title}`);
  }
  addQuestion () {
    browserHistory.push(`/addQuestion/${this.props.quiz.title}`);
  }
  editQuestion () {
    browserHistory.push(`/editQuestion/${this.props.quiz.title}`);
  }
  removeQuiz (quiz) {
    if(confirm('Are you sure you want to remove this quiz?')){
      this.props.dispatch(removeQuiz(quiz));
    }
  }
  render() {
    return (
      <div> 
        <h2>{this.props.quiz.title}</h2>
        <label>Status: </label>{this.props.quiz.saved ? <span>Saved</span> : <span>NOT Saved</span>}
        <br/><br/>
        <label>Questions:</label>
        <ol>
          {this.props.quiz.questions.map((question, i) => {
            return (
              <li key={i}>{question.question}</li>
            );
          })}
        </ol>
        {this.props.quiz.questions.length ? <button onClick={e => this.takeQuiz()}>Take Quiz</button> : null}
        {this.props.quiz.questions.length ? <button onClick={e => this.editQuestion()}>Edit Questions</button> : null}
        <button onClick={e => this.addQuestion()}>Add Question</button>
        <button onClick={e => this.removeQuiz(this.props.quiz)}>Remove Quiz</button>
        <hr/>
      </div>
    );
  }
};
export default connect()(QuizItem);