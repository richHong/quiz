import React, { Component } from 'react';
import { connect }          from 'react-redux';
import QuizList             from './quizList';

class Home extends Component {
  render(){
    return(
      <div>
        <QuizList quizzes={this.props.quizzes}/>
      </div>
    );
  }
};
function mapStateToProps(state) {
  return {
    quizzes: state.quizzes
  }
}
export default connect (mapStateToProps)(Home);