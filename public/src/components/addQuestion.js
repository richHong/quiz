import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import { addQuestion }      from '../actions/actions';

class AddQuestion extends Component {
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
  handleSubmit (e, question, answer) {
    e.preventDefault();
    let num = Math.random() * 1000000;
    let newQuestion = {
      id: num,
      question: question.value,
      answer: answer.value
    };
    this.props.dispatch(addQuestion(newQuestion, this.state.currentQuiz));
    browserHistory.push('/');
  }
  render(){
    return (
      <div>
        <h1>{this.state.currentQuiz.title}</h1>
        <form onSubmit={e => this.handleSubmit(e, this.question, this.answer)}>
        <h3>Add a Question</h3>
          <label>Question:</label>
          <br/>
          <input type='text' ref={input => this.question = input} required />
          <br/>
          <label>Answer:</label>
          <br/>
          <input type='text' ref={input => this.answer = input} required />
          <br/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quizzes: state
  }
}
export default connect(mapStateToProps)(AddQuestion);