import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editQuestion, removeQuestion } from '../actions/actions';
import { hashHistory} from 'react-router';

class EditQuestion extends Component {
  constructor(props){
    super(props);
    this.state={currentQuiz:{}};
  }
  componentWillMount () {
    let title = this.props.params.quizTitle;
    this.props.quizzes.forEach( quiz => {
      if (title === quiz.title){
        this.setState({currentQuiz: quiz});
      }
    });
  }
  updateChanges(e, question, answer, oldQuestion) {
    e.preventDefault();
    let newQuestion = {
      question: question.value,
      answer: answer.value
    };
    this.props.dispatch(editQuestion(newQuestion, oldQuestion, this.state.currentQuiz));
    hashHistory.push('/');
  }
  remove (e, question, answer) {
    e.preventDefault();
    let newQuestion = {
      question: question.value,
      answer: answer.value
    };
    this.props.dispatch(removeQuestion(newQuestion, this.state.currentQuiz));
    hashHistory.push('/');
  }
  render() {
    return (
      <div>
      <h3>{this.state.currentQuiz.title}</h3>
      {this.state.currentQuiz.questions.map((question, i) => {
        return (
          <div key={i}>
            <form onSubmit={e => this.updateChanges(e, this.question, this.answer, question)}>
              <label>Question:</label>
              <br/>
              <input type='text' defaultValue={question.question} ref={input => this.question = input}/>
              <br/>
              <label>Answer:</label>
              <br/>
              <input type='text' defaultValue={question.answer} ref={input => this.answer = input}/>
              <br/>
              <input type="submit"/>
              <button onClick={e => this.remove(e, this.question, this.answer)}>Remove Question</button>
            </form>
            <hr/>
          </div>
        )
      })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quizzes: state
  }
}
export default connect(mapStateToProps)(EditQuestion);