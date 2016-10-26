import React, { Component } from 'react';
import QuizList from './quizList';
import { connect } from 'react-redux';

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
    quizzes: state
  }
}
export default connect (mapStateToProps) (Home);