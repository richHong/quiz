import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { hashHistory} from 'react-router';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      currentQuiz: {},
      correct: false,
      answered: false,
      end: false
    };
  }
  componentWillMount () {
    let title = this.props.params.quizTitle;
    this.props.quizzes.forEach( quiz => {
      if (title === quiz.title){
        this.setState({currentQuiz: quiz});
      }
    });
  }
  checkAnswer(e, answer) {
    e.preventDefault();
    let val = answer.value;
    let {currentQuiz, index, correct, answered } = this.state;
    if (currentQuiz.questions[index].answer.toLowerCase() === val.toLowerCase()) {
      this.setState({answered:true, correct: true});
      answer.value = '';
    } else {
      this.setState({answered:true});
      answer.value = '';
    }
  }
  nextQuestion() {
    if ( this.state.index + 1 > this.state.currentQuiz.questions.length - 1){
      this.setState({end: true, answered: false, correct:false});
    } else {
      this.setState({index: this.state.index + 1, answered: false, correct:false});
    }
  }
  render () {
    let {currentQuiz, index, correct, answered, end } = this.state;
    return (
      <div>
        {this.props.quizzes.length ? 
        <div>
          <h2>Question #{index + 1}</h2>
          <h3>{currentQuiz.questions[index].question}</h3> 
          <form onSubmit={e => this.checkAnswer(e, this.answer)}>
            <input type="text" placeholder="Enter your answer" ref={input => this.answer = input}/>
            <input type="submit" />
          </form>
        </div> : null }
        {correct && answered ? <span>You are correct</span> : answered && !correct ? <span>Wrong Answer</span> : null}
        {correct && answered ? <button onClick={e => this.nextQuestion()}>Next Question</button> : null}
        {end ? <Link to='/'><button>Try Another Quiz</button></Link> : null}
      </div>
      );
  }
};
function mapStateToProps (state) {
  return {
    quizzes: state
  }
}
export default connect (mapStateToProps)(Quiz);