import React, { Component } from 'react';
import QuizItem from './quizItem';

class QuizList extends Component {
  render(){
    return (
      <div>
        {this.props.quizzes.map( (quiz, i) => {
          return (
            <QuizItem key={i} quiz={quiz} />
            )
        })}
      </div>
      );
  }
};

export default QuizList;