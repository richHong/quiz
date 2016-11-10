import React, { Component } from 'react';
import QuizItem             from './quizItem';

class QuizList extends Component {
  render(){
    const localQuizzes = window.localStorage.getItem('quizzes');
    return (
      <div>
        {!localQuizzes && !this.props.quizzes.length ? null : 
          localQuizzes && !this.props.quizzes.length ? <img className='loader' src='https://www.robtaber.com.au/img/ajax-loader.gif'/> : 
          this.props.quizzes.map( (quiz, i) => {
          return (
            <QuizItem key={i} quiz={quiz} />
          );
        })}
      </div>
    );
  }
};
export default QuizList;