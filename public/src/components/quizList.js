import React, { Component } from 'react';
import QuizItem             from './quizItem';

class QuizList extends Component {
  render(){
    const localQuizzes = window.localStorage.getItem('quizzes');
    return (
      <div>
        {!localQuizzes && !this.props.quizzes.length ? <h3>No Quizzes</h3> : 
          localQuizzes && !this.props.quizzes.length ? <img className='loader' src='http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif'/> : 
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