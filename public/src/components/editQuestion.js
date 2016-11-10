import React, { Component } from 'react';
import { findDOMNode }      from 'react-dom';
import { connect }          from 'react-redux';
import { hashHistory }   from 'react-router';
import { editQuestion, removeQuestion } from '../actions/actions';

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
  updateChanges(e, oldQuestion) {
    e.preventDefault();
    let question = findDOMNode(this.refs[`${oldQuestion.id}-question`]);
    let answer   = findDOMNode(this.refs[`${oldQuestion.id}-answer`]);
    let newQuestion = {
      id: oldQuestion.id,
      question: question.value,
      answer: answer.value
    };
    this.props.dispatch(editQuestion(newQuestion, oldQuestion, this.state.currentQuiz));
    hashHistory.push('/');
  }
  remove (e, id) {
    if(confirm('Are you sure you want to remove this question?')) {
      e.preventDefault();
      let question = findDOMNode(this.refs[`${id}-question`]);
      let answer   = findDOMNode(this.refs[`${id}-answer`]);
      let newQuestion = {
        id,
        question: question.value,
        answer: answer.value
      };
      this.props.dispatch(removeQuestion(newQuestion, this.state.currentQuiz));
      hashHistory.push('/');
    }
  }
  render() {
    return (
      <div>
      <h1>{this.state.currentQuiz.title}</h1>
      {this.state.currentQuiz.questions.map((question, i) => {
        return (
          <div key={i}>
            <form onSubmit={e => this.updateChanges(e, question)}>
              <label>Question:</label>
              <br/>
              <input className='inputs' type='text' defaultValue={question.question} ref={`${question.id}-question`}/>
              <br/><br/>
              <label>Answer:</label>
              <br/>
              <input className='inputs' type='text' defaultValue={question.answer} ref={`${question.id}-answer`}/>
              <br/><br/>
              <input type='submit' value ='Save Changes'/>
              <button onClick={e => this.remove(e, question.id)}>Remove Question</button>
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
    quizzes: state.quizzes
  }
}
export default connect(mapStateToProps)(EditQuestion);