import React, { Component } from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';

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
  render() {
    return (
      <div> 
        <h3>{this.props.quiz.title}</h3>
        <span>{this.props.quiz.questions.length} Questions</span>
        <br/><br/>
        <button onClick={e => this.takeQuiz()}>Take Quiz</button>
        <button onClick={e => this.addQuestion()}>Add Question</button>
        <button onClick={e => this.editQuestion()}>Edit Questions</button>
        <hr/>
      </div>
      );

  }
};

export default QuizItem;