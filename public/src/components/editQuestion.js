import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editQuestion, removeQuestion } from '../actions/actions';
import { hashHistory} from 'react-router';
import ReactDOM from 'react-dom';

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
    let question = ReactDOM.findDOMNode(this.refs[`${oldQuestion.id}-question`]);
    let answer = ReactDOM.findDOMNode(this.refs[`${oldQuestion.id}-answer`]);
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
      let question = ReactDOM.findDOMNode(this.refs[`${id}-question`]);
      let answer = ReactDOM.findDOMNode(this.refs[`${id}-answer`]);
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
      <h3>{this.state.currentQuiz.title}</h3>
      {this.state.currentQuiz.questions.map((question, i) => {
        return (
          <div key={i}>
            <form onSubmit={e => this.updateChanges(e, question)}>
              <label>Question:</label>
              <br/>
              <input className='inputs' type='text' defaultValue={question.question} ref={`${question.id}-question`}/>
              <br/>
              <label>Answer:</label>
              <br/>
              <input className='inputs' type='text' defaultValue={question.answer} ref={`${question.id}-answer`}/>
              <br/>
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
    quizzes: state
  }
}
export default connect(mapStateToProps)(EditQuestion);