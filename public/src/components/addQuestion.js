import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { hashHistory }   from 'react-router';
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
    hashHistory.push('/');
  }
  render(){
    return (
      <div>
        <h1>{this.state.currentQuiz.title}</h1>
        <form onSubmit={e => this.handleSubmit(e, this.question, this.answer)}>
        <h3>Add a Question</h3>
          <label>Question:</label>
          <br/>
          <input style={{width: '30vw'}} type='text' ref={input => this.question = input} required />
          <br/><br/>
          <label>Answer:</label>
          <br/>
          <input style={{width: '30vw'}} type='text' ref={input => this.answer = input} required />
          <br/><br/>
          <input type='submit' value='Add Question'/>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quizzes: state.quizzes
  }
}
export default connect(mapStateToProps)(AddQuestion);